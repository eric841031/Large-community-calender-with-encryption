function run()
{
	var usr=document .getElementById("user").value.split(",");
	var grp=document .getElementById("group").value.split(",");
	var grp_s=document .getElementById("group_s").value.split(";");
	var key=document .getElementById("KEY").value;
	var db1=document .getElementById("DB1").value;
	var db2=document .getElementById("DB2").value;
	var php_name=document .getElementById("PHP").value;
	var i,j,n,t;
	for(i=0,n=grp_s.length;i<n;++i)
		grp_s[i]=grp_s[i].split(",");

	SetATag("outDB1","",db1);
	SetATag("outDB2","AAAAAAAAAAAAAAAAAAA",db2);

	var str="";
	str=str.fromBase64(FPHP);
	str=str.replace(/\/\*Setting\*\/\$fname=[^\n]*/,"$fname='"+db1+"';");
	str=str.replace(/\/\*Setting\*\/\$fname_st=[^\n]*/,"$fname_st='"+db2+"';");
	str=str.replace(/\/\*Setting\*\/\$key=[^\n]*/,"$key='"+key+"';");
	t="";
	for(i=0,n=grp_s.length;i<n;++i)
		t+=(i==0?"":",")+"array("+grp_s[i].toStr()+")";
	str=str.replace(/\/\*Setting\*\/\$group=[^\n]*/,"$group=array('',"+t.replace(/'/g,"")+");");
	SetATag("outPHP",str,php_name);
	str="";
	str=str.fromBase64(FHTML);
	SetATag("outMAIN",str,"index.html");
	
	str="const_title='"+document .getElementById("title").value
		+"';\nkey='"+key
		+"';\nconst_sever='"+document .getElementById("WEB").value+php_name
		+"';\nuser=["+usr.toStr()
		+"];\ngroup=["+grp.toStr()
		+"];\nuser_colors=["+document .getElementById("color-user").value.split(",").toStr()
		+"];\ngroup_colors=["+document .getElementById("color-group").value.split(",").toStr()
		+"];\nme=0;\npwd='";
	//pwd設定於此str
	var fs=document .getElementById("FPWD").files;
	var M={A:[],N:0};
	if(fs.length)
	{//將fs轉為byte陣列M
		var reader=new FileReader();
		reader.onload=function(e)
		{
			var a=new Uint8Array(e.target.result);
			for(i=0;i<a.length;++i)
			{
				//str+=(a[i]<16?"0":"")+a[i].toString(16).toUpperCase()+(i%16==15?"\n":" ");
				if(M.N&3)
					M.A[M.N>>>2]|=parseInt( a[i])<<8*(M.N&3);
				else
					M.A.push(a[i]);
				++M.N;
			}
			/*str+="\n";
			for(i=0;i<M.N;++i)
			{
				t=(M.A[i>>>2]>>>8*(i&3)&0xFF);
				str+=(t<16?"0":"")+t.toString(16).toUpperCase()+(i%16==15?"\n":" ");
			}*/
			while(M.A.length&7)
				M.A.push(0);
			for(i=0,n=M.A.length;i<n;i+=8)
			{
				a=SHAKE128({A:M.A.slice(i,i+8),N:32},256,1);
				for(j=0;j<8;++j)
					M.A[i+j]=a[j];
			}
			M.N=M.A.length*4;
			/*str+="\n";
			for(i=0;i<M.N;++i)
			{
				t=(M.A[i>>>2]>>>8*(i&3)&0xFF);
				str+=(t<16?"0":"")+t.toString(16).toUpperCase()+(i%16==15?"\n":" ");
			}*/
			n=parseInt(document .getElementById("TPWD").value);
			for(i=0;i<n;++i)
			{
				t=Math.floor(Math.random()*M.N);
				t=M.A[t>>>2]>>>8*(t&3)&0x3F;
				t=((Math.floor(Math.random()*64)+t)&0x3F);
				str+=B64[t];
			}
			str+="';";
			document .getElementById("dbg").innerHTML=str;
			SetATag("outCFG",str,"config.js");
		};
		reader.readAsArrayBuffer(fs[0]);
	}
	
}
Array.prototype.toStr=function()
{
	var i,n,str;
	n=this.length;
	if(n<=0)
		return "";
	str="";
	for(i=0;i<n;++i)
	{
		if(typeof this[i] === 'string')
			str+=(i==0?"'":",'")+this[i]+"'";
		else
			str+=(i==0?"":",")+this[i];
	}
	return str;
}
function SetATag(tagID,str,fname)
{
	var blob=new Blob([str],{type:"application/octet-binary"});
	var blobUrl=URL.createObjectURL(blob);
	var aTag_ref=document .getElementById(tagID);
	aTag_ref .setAttribute("href",blobUrl);
	aTag_ref .setAttribute("download",fname);
	aTag_ref .innerHTML=fname;
}
function TemplateConvert()
{
	var str="";
	var count=0;
	var A=["FPHP","FHTML"];
	function fcvt()
	{
		if(count==2)
		{
			SetATag("outTEMPLATE",str,"template.js");
			return;
		}
		var fs=document .getElementById(A[count]).files;
		
		if(fs.length)
		{
			var reader=new FileReader();
			reader.onload=function(e)
			{
				str+=A[count++]+"='"+e.target.result.toBase64()+"';\n";
				fcvt();
			};
			reader.readAsText(fs[0]);
		}
		else
		{
			str+=A[count++]+"='';";
			fcvt();
		}
	}
	fcvt();
}
