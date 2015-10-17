function call_php(url,params,cbk_func,ststus_div)
{
	var http = new XMLHttpRequest();
	http.open("POST", url, true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.setRequestHeader("Content-length", params.length);
	http.setRequestHeader("Connection", "close");
	http.onreadystatechange = function() 
	{
		if(http.readyState == 4)
		{
			if(http.status == 200)
			{
				eval(cbk_func);
				ststus_div.innerHTML="　";
			}
			else if(ststus_div)
				ststus_div.innerHTML="連線失敗，請重試！";
		}
	}
	if(ststus_div)
		ststus_div.innerHTML="讀取中，請稍候...";
	http.send(params);
}