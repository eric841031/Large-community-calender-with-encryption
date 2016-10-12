/*
使用方式:
	SHAKE128(M,d,ret_type)
	參數:
		M:{A:[],N:number of byte}
		d:希望取得的bit數(8的整數倍)
		ret_type:指定回傳方式,0為字串,1數字陣列
	回傳:
		ret_type=0:0F00000000010000....
		ret_type=1:[15,256,....]
	
*/
function keccak_p_1600_24() //Olny for w=64
{
	this.S;
}
keccak_p_1600_24.prototype.run=function(state_array)
{	
	this.S=state_array;
	for(var i=0;i<24;++i)
	{
		this.f1();
		this.f2();
		this.f3();
		this.f4();
		this.f5(i);
	}
}
keccak_p_1600_24.prototype.f1=function() //A[S|0]->A[S'|0]
{
	var D;
	for(var i=0;i<10;++i)
		this.S[50+i]=this.S[i]^this.S[i+10]^this.S[i+20]^this.S[i+30]^this.S[i+40];
	for(i=0;i<10;++i)
	{
		D=this.S[50+(i+2)%10]<<1|this.S[50+(i+3-(i<<1&2))%10]>>>31;
		D^=this.S[50+(i+8)%10];
		for(var z=0;z<5;++z)
			this.S[i+10*z]^=D;
	}
}
keccak_p_1600_24.prototype.f2=function() //A[S|S']
{
	this.S[50]=this.S[0];
	this.S[51]=this.S[1];
	var t_x=1,t_y=0,off,pos,H,L;
	for(var t=0;t<24;++t)
	{
		off=((t+1)*(t+2)>>>1)%64;
		pos=t_x*2+t_y*10;		
		H=off>=32?this.S[pos]:this.S[pos+1];
		L=off>=32?this.S[pos+1]:this.S[pos];		
		off=off%32;
		this.S[pos+50]=L<<off|H>>>32-off;
		this.S[pos+51]=H<<off|L>>>32-off;
		pos=t_y;
		t_y=(2*t_x+3*t_y)%5;
		t_x=pos;
	}
	
}
keccak_p_1600_24.prototype.f3=function() //A[S'|S]
{
	var p1,p2;
	for(var i=0;i<5;++i)
	{
		for(var j=0;j<5;++j)
		{
			p1=i*2+j*10;
			p2=(i+3*j)%5*2+i*10+50;
			this.S[p1]=this.S[p2];
			this.S[p1+1]=this.S[p2+1];
		}
	}
}
keccak_p_1600_24.prototype.f4=function() //A[S|S']
{
	var p1,p2,p3;
	for(var i=0;i<5;++i)
	{
		for(var j=0;j<5;++j)
		{
			p1=i*2+j*10;
			p2=(i+1)%5*2+j*10;
			p3=(i+2)%5*2+j*10;
			this.S[p1+50]=this.S[p1]^((~this.S[p2])&this.S[p3]);
			this.S[p1+51]=this.S[p1+1]^(~this.S[p2+1]&this.S[p3+1]);
		}
	}
}
keccak_p_1600_24.prototype.RC=[
[0x00000000,0x00000001],[0x00000000,0x00008082],[0x80000000,0x0000808A],
[0x80000000,0x80008000],[0x00000000,0x0000808B],[0x00000000,0x80000001],
[0x80000000,0x80008081],[0x80000000,0x00008009],[0x00000000,0x0000008A],
[0x00000000,0x00000088],[0x00000000,0x80008009],[0x00000000,0x8000000A],
[0x00000000,0x8000808B],[0x80000000,0x0000008B],[0x80000000,0x00008089],
[0x80000000,0x00008003],[0x80000000,0x00008002],[0x80000000,0x00000080],
[0x00000000,0x0000800A],[0x80000000,0x8000000A],[0x80000000,0x80008081],
[0x80000000,0x00008080],[0x00000000,0x80000001],[0x80000000,0x80008008]];
keccak_p_1600_24.prototype.f5=function(ir) //A[S'|S]
{
	var p1;
	for(var i=0;i<5;++i)
	{
		for(var j=0;j<5;++j)
		{
			p1=i*2+j*10;
			this.S[p1]=this.S[p1+50];
			this.S[p1+1]=this.S[p1+51];
		}
	}
	this.S[0]^=this.RC[ir][1];
	this.S[1]^=this.RC[ir][0];
}

function SHAKE128(M,d,ret_type)
{
	function push_byte_macro(obj,val)
	{
		val&=0xFF;
		if((obj.N&3)==0)
			obj.A[obj.N>>>2]=val;
		else
			obj.A[(obj.N-1>>>2)]|=val<<8*(obj.N%4);
		++obj.N;
	}
	var f=new keccak_p_1600_24();
	//製造P=copy(M),S={A:[0,0,...],N:400}
	var P={A:[],N:M.N};
	var S={A:[],N:400};
	for(var i=0;i<100;++i)
		S.A[i]=0;
	for(var i=0;i<M.A.length;++i)
		P.A[i]=M.A[i];
	//填滿P為168的整數倍
	if(P.N%168==167)
		push_byte_macro(P,0xF9);
	else
	{
		push_byte_macro(P,0x1F);
		for(;P.N%168!=167;)
			push_byte_macro(P,0x00);
		push_byte_macro(P,0x80);
	}
	//吸收
	var n=(P.N/168|0);
	var str="";
	for(var i=0;i<n;++i)
	{
		for(var j=0;j<42;++j)
			S.A[j]^=P.A[i*42+j];
		f.run(S.A);
	}
	//擠出
	var Z={A:[],N:168};
	for(var k=0;k<42;++k)
		Z.A[k]=S.A[k];
	while(Z.N*8<d)
	{
		f.run(S.A);
		for(var k=0;k<42;++k)
			Z.A[Z.N++]=S.A[k];
	}
	if(!ret_type)
	{
		for(var i=0,k;i<(d>>>3);++i)
		{
			n=(Z.A[i>>>2]>>>8*(i%4)&0xFF);
			str+=n<16?"0"+n.toString(16).toUpperCase():n.toString(16).toUpperCase();
		}
		return str;
	}
	d>>>=3; //bytes
	Z.A.length=(d>>>2)+((d&0x3)?1:0);
	if(d&3)
		Z.A[Z.A.length-1]&=0xFFFFFFFF<<8*(d&3);
	return Z.A;
}
