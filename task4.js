
var currentColor = "#00FF00"
function myFunction(){
if(currentColor === "#00FF00"){
currentColor = "red";
document.getElementById("greensquare").style.backgroundColor = "red";
document.getElementById("button1").value = "Make green";
}
else{
currentColor = "#00FF00";
document.getElementById("greensquare").style.backgroundColor = "#00FF00";
document.getElementById("button1").value = "Make red";
}
};
