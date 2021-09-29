window.onload = () => {
    var liquid = document.getElementById("liquid");
liquid.onmouseover = () => {
	
		document.getElementById("per").innerHTML = "5%";
	    liquid.style.backgroundColor = "rgb(215, 23, 30)"
}
liquid.onmouseout = () => {
	document.getElementById("per").innerHTML = "88%";
	liquid.style.backgroundColor = "rgb(125, 125, 218)"
}
}