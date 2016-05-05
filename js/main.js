function getRandomImage()
{
	var Image = Math.floor(Math.random() * (7 - 1) + 1);
	return 'https://terraria-z.ru/img/jpg/' + Image.toString() + '.jpg';
}

function makevisible(cur,which)
{
	strength=(which==0)? 1 : 0.7
	if (cur.style.MozOpacity)
		cur.style.MozOpacity=strength
	else if (cur.filters)
		cur.filters.alpha.opacity=strength*600
}

function disableselect(e){
	return false
}

function reEnable(){
	return true
}

//if IE4+
document.onselectstart=new Function ("return false")

//if NS6
if (window.sidebar){
	document.onmousedown=disableselect
	document.onclick=reEnable
}

function ejs_nodroit()
{
	return(false)
}

document.oncontextmenu = ejs_nodroit;
	
	function setOpacity(obj, opacity)
{
 	opacity = (opacity == 100)?99.999:opacity;
	
	obj.style.filter = "alpha(opacity:"+opacity+")";
	obj.style.KHTMLOpacity = opacity/100;
	obj.style.MozOpacity = opacity/100;
	obj.style.opacity = opacity/100;
}

function fadePicture(imgID)
{
	fadeIn(imgID,0);

	$(imgID).style.visibility = 'visible';
}

function fadeIn(objID,opacity) 
{
	obj = $(objID);
	if (obj) 
	{
		if (opacity <= 100) 
		{
			setOpacity(obj, opacity);
			opacity += 1;
			window.setTimeout("fadeIn('"+objID+"',"+opacity+")", 17);
		}
	}
}
