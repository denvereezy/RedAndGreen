document.getElementById("mySquare").style.backgroundColor = "green"

//var currentColor = getComputedStyle(document.getElementById("mySquare")).backgroundColor;
//alert(currentColor);

if (document.getElementById("mySquare").style.backgroundColor === "green") {
	//setBackgroundColor("mySquare", "green");
	alert("Success!");
}
else{
	//setBackgroundColor("mySquare", "red");
	alert("Failure!");
};

setBackgroundColor("mySquare", "red");


if (document.getElementById("mySquare").style.backgroundColor === "red") {
	//setBackgroundColor("mySquare", "green");
	alert("Success!");
}
else{
	//setBackgroundColor("mySquare", "red");
	alert("Failure!");
};
