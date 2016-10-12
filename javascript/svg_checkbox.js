/*
介面：
輸入一個顏色代碼字串陣列，產生一組SVG CheckBox Array

*/
function createSvgCheckBoxBar(ColorArray,onClick)
{
	var CBA=[];
	var ns="http://www.w3.org/2000/svg";
	var div,box,tmp;
	div=document .createElement("div");
	for(var i=0;i<ColorArray.length;++i)
	{
		if(ColorArray[i]==null)
			continue;
		box=document .createElementNS(ns,"svg");
		box.setAttributeNS(null,"width","24");
		box.setAttributeNS(null,"height","24");
		box.setAttributeNS(null,"onclick","SvgCheckBoxClick(this,"+i+")"+(onClick?";"+onClick:""));
		box.checked=true;
		tmp=document .createElementNS(ns,"rect");
		tmp.setAttributeNS(null,"x","2");
		tmp.setAttributeNS(null,"y","2");
		tmp.setAttributeNS(null,"width","20");
		tmp.setAttributeNS(null,"height","20");
		tmp.setAttributeNS(null,"style","fill:"+ColorArray[i]+";stroke:black;stroke-width:1px;");
		box.appendChild(tmp);
		tmp=document .createElementNS(ns,"path");
		tmp.setAttributeNS(null,"d","M 6,12 L 12,18 18,6");
		tmp.setAttributeNS(null,"style","fill:none;stroke:black;stroke-width:2px;");
		box.appendChild(tmp);
		div.appendChild(box);
	}
	return div;
}
function SvgCheckBoxClick(SCB,k)
{
	if(SCB.checked)
	{
		SCB.checked=false;
		SCB.children[1].setAttributeNS(null,"style","fill:none;stroke:none;");
	}
	else
	{
		SCB.checked=true;
		SCB.children[1].setAttributeNS(null,"style","fill:none;stroke:black;stroke-width:2px;");
	}
}