<?php
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header("Content-Type: application/json;charset=utf-8");
//configure=================
/*Setting*/$fname="sever.txt";
/*Setting*/$fname_st="sever_st.txt";
/*Setting*/$key="RHeaalTrrute";
/*Setting*/$group=array("",array(1),array(1),array(1)); //group[0]都是"",array(0)代表所有人
//==========================
if(strcmp($_POST['key'],$key)!=0)
{
	echo "key err";
	return;
}
if(strcmp($_POST['cmd'],"read")==0)
	echo read();
if(strcmp($_POST['cmd'],"add")==0)
	echo add_data();
if(strcmp($_POST['cmd'],"del")==0)
	echo remove_data();
if(strcmp($_POST['cmd'],"edit")==0)
	echo edit_data();
/*if(strcmp($_POST['cmd'],"res")==0)
	reset_data();
if(strcmp($_POST['cmd'],"show")==0)
	echo show_data();*/

function is_in_group($uid,$gid) //uid and gid without rwx info
{
	global $group;
	$scan=array($gid); //the queue of gid that must be scanned
	for($idx=0;$idx<count($scan);++$idx)
	{
		$arr=$group[$scan[$idx]]; //current scaned group
		for($i=0,$N=count($arr);$i<$N;++$i)
		{ 
			$k=$arr[$i];
			if($k==$uid || $k==0)
				return true;
			if($k<0)
			{
				//check! if k dose not in scan array, push -k to scan
				for($j=0,$jN=count($scan);$j<$jN && $scan[$j]!=-$k;++$j);
				if($j==$jN)
					array_push($scan,-$k);
			}
		}
	}
	return false;
}
function read()
{
	global $group;
	global $fname;
	$datS=B64AtoV($_POST['date'],0,4);
	$datE=B64AtoV($_POST['dateE'],0,4);
	$uid=B64AtoV($_POST['uid'],0,2);
	$r="";
	if(($fp=fopenL($fname,"r",LOCK_SH,10,250))==false)
		return "0";
	while(!feof($fp))
	{
		$str=fgets($fp);
		$str_dat=B64AtoV($str,5,4);
		$str_uid=B64AtoV($str,9,2);
		$str_gid=B64AtoV($str,11,2);
		if($datS<=$str_dat && $str_dat<=$datE &&
			(($uid&0x1FF)==($str_uid&0x1FF)||($str_uid&0x800)||(($str_gid&0x800)&&is_in_group($uid&0x1FF,$str_gid&0x1FF))))
			$r=$r.$str;
	}
	fclose($fp);
	return $r;
}
function add_data()
{
	global $fname;
	global $fname_st;
	if(strlen($_POST['val'])>102400 || strlen($_POST['val'])+filesize($fname)>10485760)
		return "0";
	$dat=B64AtoV($_POST['date'],0,4);
	$uid=B64AtoV($_POST['uid'],0,2);
	$gid=B64AtoV($_POST['gid'],0,2);
	$enc=B64AtoV($_POST['val'],0,4);
	$val=substr($_POST['val'],4);
	if(($fp=fopenL($fname_st,"r+",LOCK_EX,10,250))==false)
		return "0";
	$did=fgets($fp);
	$did=B64AtoV($did,0,5);
	fseek($fp,0,SEEK_SET);
	fwrite($fp,VtoB64A($did+1,5));
	fclose($fp);
	if(enc&0x800000)
	{
		//encode process
	}
	$str=(filesize($fname)<17?"":"\n").VtoB64A($did,5).VtoB64A($dat,4).VtoB64A($uid,2).VtoB64A($gid,2).VtoB64A($enc,4).$val;
	if(($fp=fopenL($fname,"a",LOCK_EX,10,250))==false)
		return "0";	
	fwrite($fp,$str);
	fclose($fp);
	return $did;
}
function remove_data()
{
	global $fname;
	$uid=B64AtoV($_POST['uid'],0,2)&0x1FF;
	$did=B64AtoV($_POST['did'],0,5);
	$tmpfname="tmp".$uid.".txt";
	if(!copy($fname,$tmpfname) || ($fp=fopenL($fname,"w",LOCK_EX,10,250))==false)
		return "0";
	if(($fpr=fopenL($tmpfname,"r",LOCK_SH,10,250))==false)
	{
		fclose($fp);
		return "0";
	}
	while(!feof($fpr))
	{
		$str=fgets($fpr);
		if(($str_did=B64AtoV($str,0,5))!=$did)
		{
			fwrite($fp,$str);
			continue;
		}
		$str_uid=B64AtoV($str,9,2);
		$str_gid=B64AtoV($str,11,2);
		if($uid!=($str_uid&0x1FF) && !($str_uid&0x200) && !(($str_gid&0x200)&&is_in_group($uid,$str_gid&0x1FF)))
			fwrite($fp,$str);   
	}
	fclose($fp);
	fclose($fpr);
	unlink($tmpfname);
	return "1";
}
function edit_data()
{
	global $fname;
	global $fname_st;
	if(strlen($_POST['val'])>102400 || strlen($_POST['val'])+filesize($fname)>10485760)
		return "0";
	$did=B64AtoV($_POST['did'],0,5);
	$uid=B64AtoV($_POST['uid'],0,2);
	$enc=B64AtoV($_POST['val'],0,4);
	$val=substr($_POST['val'],4);
	$tmpfname="tmp".$uid.".txt";
	if(!copy($fname,$tmpfname) || ($fp=fopenL($fname,"w",LOCK_EX,10,250))==false)
		return "0";
	if(($fpr=fopenL($tmpfname,"r",LOCK_SH,10,250))==false)
	{
		fclose($fp);
		return "0";
	}
	$r="1";
	$f=false;
	while(!feof($fpr))
	{
		$str=fgets($fpr);
		$str_did=B64AtoV($str,0,5);
		$r.="#".$str_did;
		if(($str_did=B64AtoV($str,0,5))!=$did)
		{
			$r.="[D]";
			fwrite($fp,($f?"\n":"").$str);
			$f=false;
			continue;
		}
		$str_uid=B64AtoV($str,9,2);
		$str_gid=B64AtoV($str,11,2);		
		if($uid==($str_uid&0x1FF) || ($str_uid&0x400) || (($str_gid&0x400)&&is_in_group($uid,$str_gid&0x1FF)))
		{
			$str=substr($str,0,13).VtoB64A($enc,4).$val;
			$f=true;
		}
		if(enc&0x800000)
		{
			//add pos count to strlen of val
		}
		fwrite($fp,$str);
	}
	fclose($fp);
	fclose($fpr);
	unlink($tmpfname);
	return $r;
}
/*function reset_data()
{
	global $fname;
	global $fname_st;
	file_put_contents($fname,"");
	file_put_contents($fname_st,"AAAAAAAAAAAAAAAAAAAA");
}
function show_data()
{
	global $fname;
	global $fname_st;
	return "content:".file_get_contents($fname)."\nstatus:\n".file_get_contents($fname_st);
}*/
/*fopenlib*/
function fopenL($fname,$rw,$L,$N,$ms)
{
	if(($fp=fopen($fname,$rw))==false)
		return false;
	for($i=0;$i<$N && !flock($fp,$L);++$i)
		usleep($ms*1000);
	if($i<$N)
		return $fp;
	fclose($fp);
	return false;
}
/*B64lib*/
function B64AtoV($bs,$pos,$N)
{
	$k=0;
	for($i=0;$i<$N;++$i)
	{
		$a=ord(substr($bs,$pos+$i,1));//$bs[$pos+$i].charCodeAt();
		if(0x41<=$a && $a<=0x5A)
			$k=$k<<6|$a-0x41;
		else if(0x61<=$a && $a<=0x7A)
			$k=$k<<6|$a-0x61+26;
		else if(0x30<=$a && $a<=0x39)
			$k=$k<<6|$a-0x30+52;
		else if($a==0x2D) // - 
			$k=$k<<6|62;
		else if($a==0x5F) // _
			$k=$k<<6|63;
	}
	return $k;
}
function VtoB64A($k,$N)
{
	$A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
	$r="";
	for($i=0;$i<$N;++$i)
	{
		$r=substr($A,$k&0x3F,1).$r;
		$k=$k>>6&0x7FFFFFFF;
	}
	return $r;
}
?>
