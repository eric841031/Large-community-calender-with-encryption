/*
函數:
	call_php(url,params,cbk_func,ststus_div)
參數:
	url:希望連結的伺服器。資料型態:字串
	params:傳送給伺服器的參數。資料型態:字串
	cbk_func:當伺服器回傳訊息時，要執行的內容。資料型態:字串
	status_div(可選):顯示連線狀態的div物件。資料型態:Element
取得伺服器回傳:
	用cbk_func="ret_val=http.responseText;"可以將回傳值存在變數ret_val中
範例:
	call_php("http://Demo/sever.php","user=Lucky","ans=http.responseText;f1()");
	將字串"user=Lucky"送給伺服器，當伺服器回傳後時，將資料存在變數ans中，並呼叫函數f1。不顯示連線狀態。
*/
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