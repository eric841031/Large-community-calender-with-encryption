/*
	function ByteStream()
寫入:
	push_byte(b)
	push_BE(k)
	push_LE(k)
	push_str(str,encoding_function)
		※encodeing_function(result,str,i) //set result={val,N} of ith chr.code is uint_32
讀取:
	read_byte()
	get_byte(pos)
	get_str(pos,n,encoding_rvt_func)
		※encodeing_revert_function({val,st})
			1.若完成編碼st=0,val=unicode.
			2.第一次傳入時st為0.val=取得的內容
			3.回傳st
			4.st<0代表編碼錯誤代號(由function自定義),st>0為再抓st個byte
修改內容:
	set_byte(pos,b)
轉換:
	getBase64Str(pos,Nbyte)
	putBase64Str(b64s)
輸出:
	toString(k)
*/
function ByteStream()
{
	this.A=[];
	this.N=0;
	this.rd=0;
}
ByteStream.prototype.push_byte=function(b)
{
	if((this.N&3)==0)
		this.A.push(b);
	else
		this.A[this.A.length-1]|=b<<((this.N&3)<<3);
	++this.N;
	return this;
}
ByteStream.prototype.push_BE=function(k)
{
	var i;
	for(i=24;i>0 && !(k>>>i);i-=8);
	for(;i>=0;i-=8)
		this.push_byte(k>>>i&0xFF);
	return this;
}
ByteStream.prototype.push_LE=function(k)
{
	var i,j;
	for(i=24;i>0 && !(k>>>i);i-=8);
	for(j=0;j<=i;j+=8)
		this.push_byte(k>>>j&0xFF);
	return this;
}
ByteStream.prototype.push_str=function(str,encoding_func)
{
	var r={val:0,N:0};
	for(var i=0;i<str.length;++i)
	{
		encoding_func(r,str,i);
		//alert(r.val.toString(16));
		for(var j=r.N-1;j>=0;--j)
			this.push_byte(r.val>>>j*8&0xFF);
	}
}
ByteStream.prototype.get_str=function(pos,n,encoding_rvt_func)
{
	var str="";
	var r={val:0,st:0};
	n=n<0?this.N:(n>this.N-pos?this.N:n+pos);
	for(var i=pos;i<n;)
	{
		r.val=this.get_byte(i++);
		while(encoding_rvt_func(r))
		{
			if(r.st<0)
				return r.st;
			if(i+r.st>n)
				return 1; //error:資料不夠
			for(var j=0;j<r.st;++j)
				r.val=r.val<<8|this.get_byte(i++);
		}
		str+=String.fromCharCode(r.val);
	}
	return str;
}
ByteStream.prototype.read_byte=function()
{
	if(this.rd>=this.N)
		return null;
	var t=this.rd++;
	return this.A[Math.floor(t/4)]>>>t%4*8&0xFF;
}
ByteStream.prototype.get_byte=function(pos)
{
	if(pos>=this.N || pos<0)
		return null;
	return (this.A[pos>>>2]>>>(pos%4*8))&0xFF;
}
ByteStream.prototype.set_byte=function(pos,b)
{//alert(pos+","+b);
	if(pos>=this.N)
		return null;
	this.A[Math.floor(pos/4)]=this.A[Math.floor(pos/4)]& ~(0xFF<<pos%4*8) | (b&0xFF)<<pos%4*8;
	return this;
}
var B64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function B64toV(b)
{
	var a=b.charCodeAt();
	if(0x41<=a && a<=0x5A)
		return a-0x41;
	if(0x61<=a && a<=0x7A)
		return a-0x61+26;
	if(0x30<=a && a<=0x39)
		return a-0x30+52;
	return a==0x2D?62:(a==0x5F?63:-1);
}
ByteStream.prototype.getBase64Str=function(pos,Nbyte)
{//return the base64_str encoded from pos to pos+Nbyte-1
	var str="",t,i;
	Nbyte=Nbyte<0?this.N-pos:(Nbyte>this.N-pos?this.N-pos:Nbyte);
	for(i=0;i+2<Nbyte;i+=3)
	{//get three byte
		t=this.get_byte(pos+i)<<16|this.get_byte(pos+i+1)<<8|this.get_byte(pos+i+2);
		str=str.concat(B64[t>>>18&0x3F],B64[t>>>12&0x3F],B64[t>>>6&0x3F],B64[t&0x3F]);
	}
	i=this.N-pos-i;//i byte rest.
	if(i==1)
	{
		t=this.get_byte(this.N-1);
		str=str.concat(B64[t>>>2&0x3F],B64[t<<4&0x3F],"==");
	}
	else if(i==2)
	{
		t=this.get_byte(this.N-2)<<8|this.get_byte(this.N-1);
		str=str.concat(B64[t>>>10&0x3F],B64[t>>>4&0x3F],B64[t<<2&0x3F],"=");
	}
	return str;
}
ByteStream.prototype.putBase64Str=function(b64s)
{//append base64 data to bytestream
	var i,t,pad;
	for(pad=0;pad<b64s.length && b64s[b64s.length-1-pad]=="=";++pad);
	//if(pad>2)alert("pad="+pad);
	for(i=0;i+3<b64s.length-pad;i+=4)
	{
		t=B64toV(b64s[i])<<18|B64toV(b64s[i+1])<<12|B64toV(b64s[i+2])<<6|B64toV(b64s[i+3]);
		this.push_byte(t>>>16&0xFF);
		this.push_byte(t>>>8&0xFF);
		this.push_byte(t&0xFF);
	}
	if(pad==1)
	{
		//alert("1");
		t=B64toV(b64s[i])<<18|B64toV(b64s[i+1])<<12|B64toV(b64s[i+2])<<6;
		this.push_byte(t>>>16&0xFF);
		this.push_byte(t>>>8&0xFF);
	}
	else if(pad==2)
	{
		//alert("2");
		t=B64toV(b64s[i])<<18|B64toV(b64s[i+1])<<12;
		this.push_byte(t>>>16&0xFF);
	}
}
ByteStream.prototype.toString=function(k)
{
	if(this.N==0)
		return "";
	if(!k)
		k=10;
	var str=(this.A[0]&0xFF).toString(k);
	for(var t=1;t<this.N;++t)
		str=str.concat(',',(this.A[Math.floor(t/4)]>>>t%4*8&0xFF).toString(k),t%16==15?"\n":'');
	//alert(this.N+","+this.A.length);
	return str;
}