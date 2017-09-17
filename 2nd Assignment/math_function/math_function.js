	var x1 = prompt("Enter x1 value =", "")
	var x2 = prompt("Enter x2 value =", "")
	var x3 = prompt("Enter x3 value =", "")
	var y = (parseInt(x1)+parseInt(x2))/x3;
	document.getElementById("local").innerHTML = "x1="+x1+ ",x2="+x2+ ",x3="+x3+ ",y=(x1+x2)/x3="+y;
