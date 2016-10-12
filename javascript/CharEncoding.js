/*
ByteStream.prototype.push_str=function(str,encoding_function)
※encodeing_function(result,str,i)
	set result={val,N} of ith chr.val is uint_32

ByteStream.prototype.get_str=function(pos,n,encoding_rvt_func)
※encodeing_revert_function({val,st})
	1.若完成編碼st=0,val=unicode.
	2.第一次傳入時st為0.val=取得的內容
	3.回傳st
	4.st<0代表編碼錯誤代號(由function自定義),st>0為再抓st個byte
*/
function utf8_enc(result,str,i)
{
	var k=str.charCodeAt(i);
	if(k<0x80)
		{result.N=1;result.val=k;}
	else if(k<0x800)
		{result.N=2;result.val=(k&0x3F|0x80)|(k>>>6&0x1F|0xC0)<<8;}
	else if(k<0x10000)
		{result.N=3;result.val=(k&0x3F|0x80)|(k>>>6&0x3F|0x80)<<8|(k>>>12&0xF |0xE0)<<16;}
	else
		{result.N=4;result.val=(k&0x3F|0x80)|(k>>>6&0x3F|0x80)<<8|(k>>>12&0x3F|0x80)<<16|(k>>>18&0x7 |0xF0)<<24;}
}
function utf8_dec(obj)
{
	var k=obj.val,c;
	if(obj.st==0)
	{
		if((k&0x80)==0)
			return 0;
		else if((k&0xE0)==0xC0)
			return obj.st=1;
		else if((k&0xF0)==0xE0)
			return obj.st=2;
		else if((k&0xF8)==0xF0)
			return obj.st=3;
		else
			return obj.st=-1;
	}
	for(c=0;c<obj.st && (k>>>c*8&0xC0)==0x80;++c);
	if(c<obj.st)
		return obj.st=-2;
	
	obj.st=0;
	if(k<0x10000)
		obj.val=(k&0x1F00)>>>2|k&0x3F;
	else if(k<0x1000000)
		obj.val=(k&0xF0000)>>>4|(k&0x3F00)>>>2|k&0x3F;
	else
		obj.val=(k&0x7000000)>>>6|(k&0x3F0000)>>>4|(k&0x3F00)>>>2|k&0x3F;
	return 0;
}
function utf16BE_enc(r,str,i) //r={val,N}
{
	r.val=str.charCodeAt(i);
	if(0xD800<=r.val && r.val<=0xDFFF)
	{
		r.val=r.val<<16|str.charCodeAt(i);
		r.N=4;
	}
	else
		r.N=2;
}
function utf16BE_dec(r) //r={val,st}
{
	if(r.st==0)
		return r.st=1;
	else if(r.st==1 && 0xD800<=r.val && r.val<=0xDFFF)
		return r.st=2;
	return r.st=0;
}