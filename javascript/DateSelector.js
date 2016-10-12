/* 版本:2.0.0
function createCalendar(select_callback,change_page_callback,on_cell_draw);
	on_cell_draw(cell,cell_date):當td與內部的日期寫入後呼叫，可以用來設定cell樣式
	※前兩個參數是字串形式，第三個參數是符合上述格式的function
function CalendarRefreshBack(tb_obj); //更新畫面日曆畫面
function CalendarRefreshFront(tb_obj); //更新選擇按鈕
function CalendarOnPageChange(tb,off); //當換頁時
function CalendarOnSelect(cell); //當選擇時
*/

function createCalendar(select_callback,change_page_callback,on_cell_draw)
{
	var A="日一二三四五六";
	var tb=document .createElement("table");
	var d=new Date();
	//成員
	tb.SelectedDate={y:d.getFullYear(),m:d.getMonth()+1,d:d.getDate()};
	tb.ShowDate={y:d.getFullYear(),m:d.getMonth()+1,d:1};
	tb.LastCell=null;
	tb.LastStyle=null;
	tb.cbk=select_callback;
	tb.cbk2=change_page_callback;
	tb.cbk3=on_cell_draw;
	tb.GetDate=function()
	{
		return {y:this.SelectedDate.y,m:this.SelectedDate.m,d:this.SelectedDate.d};
	}
	tb.setAttribute("class","cal");
	var cell;
	var row=tb.insertRow(-1);
	(cell=row.insertCell(-1)).innerHTML="◀";
	cell.setAttribute("onclick","CalendarOnPageChange(this.parentNode.parentNode.parentNode,-1)");
	cell.setAttribute("class","other");
	(cell=row.insertCell(-1));
	cell.setAttribute("colspan","2");
	(cell=row.insertCell(-1)).innerHTML="年";
	(cell=row.insertCell(-1));
	(cell=row.insertCell(-1)).innerHTML="月";
	(cell=row.insertCell(-1)).innerHTML="▶";
	cell.setAttribute("onclick","CalendarOnPageChange(this.parentNode.parentNode.parentNode,1)");
	cell.setAttribute("class","other");
	row=tb.insertRow(-1);
	for(i=0;i<7;++i)
	{
		(cell=row.insertCell(-1)).innerHTML=A[i];
		cell.setAttribute("class","hav");
	}
	CalendarRefreshBack(tb);
	CalendarRefreshFront(tb);
	return tb;
}
function CalendarRefreshBack(tb_obj)
{
	//刪除日期rows部份
	for(var i=tb_obj.rows.length-1;i>1;--i)
		tb_obj.deleteRow(i);
	
	var year=tb_obj.ShowDate.y;
	var month=tb_obj.ShowDate.m;
	//更新顯示的X年X月
	tb_obj.rows[0].cells[1].innerHTML=year;
	tb_obj.rows[0].cells[3].innerHTML=month;
	
	//計算
	var d=new Date(year,month-1,1,0,0,0,0);
	var k=(year*12+month);
	var d2=new Date(Math.floor(k/12),k%12,1,0,0,0,0);	
	var N=28+(d2.getDay()+7-d.getDay())%7; //此月有幾天
	var first=d.getDay();	//此月的第1天是禮拜幾
	
	//產生新的日曆
	var row,cell,i,j,k,dd=null;
	for(i=0;i<N+first;i+=7)
	{
		row=tb_obj.insertRow(-1);
		for(j=0;j<7;++j)
		{
			k=(first<=i+j && i+j<first+N)?(i+j+1-first).toString():"";
			(cell=row.insertCell(-1)).innerHTML=k;
			if(k!="")
			{
				if(j==0)
					cell.setAttribute("class","sun");
				else if(j==6)
					cell.setAttribute("class","sat");
				else
					cell.setAttribute("class","other");
				if(tb_obj.cbk3)
					tb_obj.cbk3(cell,k);
				cell.setAttribute("onclick","CalendarOnSelect(this)");
			}
		}
	}
}
function CalendarRefreshFront(tb_obj)
{
	var i;
	if(tb_obj.SelectedDate.y==tb_obj.ShowDate.y 
		&& tb_obj.SelectedDate.m==tb_obj.ShowDate.m)
	{
		for(i=0;i<7 && tb_obj.rows[2].cells[i].innerHTML=="";++i);
		i=tb_obj.SelectedDate.d+i-1;
		var cell=tb_obj.rows[2+Math.floor(i/7)].cells[i%7];
		tb_obj.LastCell=cell;
		tb_obj.LastStyle=cell.className;
		cell.setAttribute("class","select");
	}
	else
	{
		tb_obj.LastCell=null;
		tb_obj.LastStyle=null;
	}
}
function CalendarOnPageChange(tb,off)
{
	var k=tb.ShowDate.y*12+tb.ShowDate.m-1+off;
	tb.ShowDate.y=Math.floor(k/12);
	tb.ShowDate.m=k%12+1;
	CalendarRefreshBack(tb);
	CalendarRefreshFront(tb);
	eval(tb.cbk2);
}
function CalendarOnSelect(cell)
{
	if(cell.innerHTML=="")
		return;
	var tb=cell.parentNode.parentNode.parentNode;
	if(tb.LastCell)
		tb.LastCell.setAttribute("class",tb.LastStyle);
	tb.LastCell=cell;
	tb.LastStyle=cell.className;
	cell.setAttribute("class","select");
	tb.SelectedDate.y=tb.ShowDate.y;
	tb.SelectedDate.m=tb.ShowDate.m;
	tb.SelectedDate.d=parseInt(cell.innerHTML);
	eval(cell.parentNode.parentNode.parentNode.cbk);
	//alert("{"+tb.SelectedDate.y+"/"+tb.SelectedDate.m+"/"+tb.SelectedDate.d+"}"+"{"+tb.ShowDate.y+"/"+tb.ShowDate.m+"/"+tb.ShowDate.d+"}");
}
