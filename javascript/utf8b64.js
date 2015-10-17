/*
使用:
	String.prototype.toBase64()
	String.prototype.fromBase64(b64str)
	function B64AtoV(bs,pos,N)
	function VtoB64A(k,N)
開發:
function B64toV(b) //傳入base64字元，回傳其對應的數字(0~63)
function BinStrToUtf8(b64s) //將base64字串轉為UTF8整數陣列
function Utf8StrToBin(u8s) //utf-8整數陣列轉為Base64字串
function UinToUtf8(k) //給予unicode回傳utf-8(以整數儲存)
function Utf8ToUin(k) //給予utf-8(以整數儲存)回傳unicode
*/
var B64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
function B64AtoV(bs,pos,N)
{
	var k=0;
	for(var i=0,a;i<N && pos+i<bs.length;++i)
	{
		if(!bs[pos+i])
			alert(""+(pos+i));
		a=bs[pos+i].charCodeAt();
		if(0x41<=a && a<=0x5A)
			k=k<<6|a-0x41;
		else if(0x61<=a && a<=0x7A)
			k=k<<6|a-0x61+26;
		else if(0x30<=a && a<=0x39)
			k=k<<6|a-0x30+52;
		else if(a==0x2D)
			k=k<<6|62;
		else if(a==0x5F)
			k=k<<6|63;
	}
	return k;
}
function VtoB64A(k,N)
{
	var i;
	var r="";
	for(i=0;i<N;++i)
	{
		r=B64[k&0x3F]+r;
		k=k>>>6;
	}
	return r;
}
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
function BinStrToUtf8(b64s) //base64字串轉為UTF8整數陣列
{
	var u8s=[];
	var b=0,t,c=0,bb=0;
	for(var i=0;i<b64s.length && (t=B64toV(b64s[i]))>=0;++i)
	{
		//t=目前讀取
		if(i&3) //有輸出
		{
			b|=t>>>6-((i&3)<<1); //b|=t>>6-i%4*2
			if(c>0)
				--c;
			bb|=b << 8 * c;
			if(c==0)
			{
				if((b&0x80)==0 || (b&0xC0)==0x80) //0xxxxxxx 10xxxxxx
				{
					u8s.push(bb);
					bb=c=0;
				}
				else if((b&0xE0)==0xC0) //110xxxxx
				{
					bb=b<<8; 
					c=1;
				}
				else if((b&0xF0)==0xE0) //1110xxxx
				{
					bb=b<<16; 
					c=2;
				}
				else
				{
					bb=b<<24;
					c=3;
				}
			}
		}
		b=t<<(1+(i&3)<<1)&0xFF; //b=t<<2*(1+i%4)&0xFF;剩餘的
	}
	return u8s;
}
function Utf8StrToBin(u8s) //代表utf-8的整數陣列回傳Base64字串
{
	var r="";
	var t6=0,s=0,c=0;
	for(var i=0;i<u8s.length;++i)
	{
		k=u8s[i];
		for(c=1;c<4 && k>>>8*c!=0;++c); //c=u8s[i]是幾btye
		for(var kk;--c>=0;)
		{
			kk=k>>>8*c&0xFF;
			if(s%3==0)
			{
				r+=B64[kk>>2];
				t6=(kk&3)<<4;
			}
			else if(s%3==1)
			{
				r+=B64[t6|kk>>4];
				t6=(kk&0xF)<<2;
			}
			else
				r+=B64[t6|kk>>6]+B64[kk&0x3F];
			++s;
		}
	}
	if(s%3==1)
		r+=B64[t6]+"==";
	else if(s%3==2)
		r+=B64[t6]+"=";
	else
		;
	return r;
}
function UinToUtf8(k) //給予unicode回傳utf-8(以整數儲存)
{
	if(k<0x80)
		return k;
	else if(k<0x800)
		return (k&0x3F|0x80)|(k>>>6&0x1F|0xC0)<<8;
	else if(k<0x10000)
		return (k&0x3F|0x80)|(k>>>6&0x3F|0x80)<<8|(k>>>12&0xF |0xE0)<<16;
	else
		return (k&0x3F|0x80)|(k>>>6&0x3F|0x80)<<8|(k>>>12&0x3F|0x80)<<16|(k>>>18&0x7 |0xF0)<<24;
}
function Utf8ToUin(k) //給予utf-8(以整數儲存)回傳unicode
{
	if(k<0x100)
		return k;
	else if(k<0x10000)
		return (k&0x1F00)>>>2|k&0x3F;
	else if(k<0x1000000)
		return (k&0xF0000)>>>4|(k&0x3F00)>>>2|k&0x3F;
	else
		return (k&0x7000000)>>>6|(k&0x3F0000)>>>4|(k&0x3F00)>>>2|k&0x3F;
}
String.prototype.toBase64=function()
{
	var A=[];
	for(var i=0;i<this.length;++i)
		A.push(UinToUtf8(this[i].charCodeAt()));	
	return Utf8StrToBin(A);
}
String.prototype.fromBase64=function(b64str)
{
	var A=BinStrToUtf8(b64str);
	var r="";
	for(var i=0;i<A.length;++i)
		A[i]=String.fromCharCode(Utf8ToUin(A[i]));
	return A.join("");
}