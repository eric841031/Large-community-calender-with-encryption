/*
需求:ByteStream.js、CharEncoding.js、aes.js

function get_data_stream(str) //將字串以UTF-8格式轉為stream，並加上亂數block及pad資訊
function get_str_from_stream(bs) //get_data_stream的反函數
function get_block(bs,k,block) //取得第k個block
function set_block(bs,k,block) //寫入第k個block
//使用:
function cbcR_encode(str,key,c_enc)
function cbcR_decode(bs,key,c_enc)
※key為[int,int,int,int];
*/
function get_data_stream(str,c_enc) //將字串轉為stream，並加上亂數block及pad資訊
{
	//block0[亂數]block1~n[資料+亂數填充+最後4bit pad資訊]
	var bs=new ByteStream();
	for(i=0;i<16;++i)
		bs.push_byte(Math.floor(Math.random()*256));
	bs.push_str(str,c_enc);
	var pad=bs.N%16;
	for(var i=16-pad;i>1;--i)
		bs.push_byte(Math.floor(Math.random()*256));
	bs.push_byte(Math.floor(Math.random()*16)<<4|pad);
	return bs;
}
function get_str_from_stream(bs,c_enc) //從stream中取出字串
{
	var pad=bs.get_byte(bs.N-1)&0x0F;
	return bs.get_str(16,bs.N-16-16+pad,c_enc);
}
function get_block(bs,k,block)
{
	for(var i=0;i<4;++i)
		block[i]=bs.A[k*4+i];
}
function set_block(bs,k,block)
{
	for(var i=0;i<4;++i)
		bs.A[k*4+i]=block[i];
}
function cbcR_encode(str,key,c_enc)
{
	var bs=get_data_stream(str,c_enc);
	var rk=GetRoundKey(key);
	var p_block=[0,0,0,0],c_block=[0,0,0,0];
	for(var i=0;i*16+15<bs.N;++i)
	{
		get_block(bs,i,c_block);
		for(var j=0;j<4;++j)//p_block^=c_block;
			p_block[j]^=c_block[j];
		aes_enc(p_block,rk);
		set_block(bs,i,p_block);		
	}
	return bs;
}
function cbcR_decode(bs,key,c_enc)
{
	var rk=GetRoundKey(key);
	var p_block=[],c_block=[0,0,0,0];
	for(var i=0;i*16+15<bs.N;++i)
	{
		get_block(bs,i,p_block);
		aes_dec(p_block,rk);
		for(var j=0;j<4;++j)//p_block^=c_block;
			p_block[j]^=c_block[j];
		get_block(bs,i,c_block);
		set_block(bs,i,p_block);
	}
	return get_str_from_stream(bs,c_enc);
}