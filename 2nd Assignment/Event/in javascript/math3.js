
	document.getElementById("sidebar").onmouseover = function(){mouseOver()};
	document.getElementById("sidebar").onmouseout = function(){mouseOut()};
	
	function mouseOver(){
		document.getElementById("sidebar2").style = "newStyle";
		document.getElementById("sidebar2").style.backgroundColor = "lightyellow";
		document.getElementById("sidebar2").style.fontStyle = "italic";
		document.getElementById("sidebar2").style.textDecorationLine = "underline";
		document.getElementById("sidebar2").innerHTML = 
		"<h2>Be yourself</h2><p>Always aim for the best!</p>";
	}

	function mouseOut(){
		document.getElementById("sidebar2").style = "defaultStyle";
		document.getElementById("sidebar2").innerHTML = 
		"<h2>Be yourself</h2><p>See what can be shown here.</p>";
	}


	document.getElementById("our-button").onclick = function(){onClick()};

	function onClick(){
		document.getElementById("time").innerHTML = Date();
	}



