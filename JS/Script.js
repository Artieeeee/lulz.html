var word = ["Creative","Madness","<3 Loving","Monstrous","Mysterious","Deathless"];
var menubarvisibility = false;
lablecycle();
function afterload() {
	 document.getElementById("12").style.top = "0%";
	 document.getElementById("textpole").style.top = "460px";
	 document.getElementById("telegram1").style.bottom = "0%";
	 document.getElementById("asd").style.left = "0%";
}
function lablecycle() {
 var numeria = Math.round(Math.random()*(word.length - 1));
 document.getElementById("Title1").innerHTML = word[numeria];
}
function Onclick(){
	if (menubarvisibility == false) {
	menubarvisibility = !(menubarvisibility);
	document.getElementById("24").style.top = "0%";
	return;
	}
	if (menubarvisibility == true) {
	menubarvisibility = !(menubarvisibility);
	document.getElementById("24").style.top = "-140px";
	return;
	}

}
function omo(){
	document.getElementById("asd").style.backgroundColor = "RGB(50,50,50)"
}
function lul(){
	document.getElementById("asd").style.backgroundColor = "RGB(25,25,25)";
}
function linklabetext(ifa){
	if(ifa == 1){
		document.getElementById("linklabe").style.backgroundColor = "RGB(125,125,125)";
		document.getElementById("lltext").style.color = "RGB(25,25,25)";
	}
}
function linklabetextout(ifao){
	if(ifao == 1){
		document.getElementById("linklabe").style.backgroundColor = "RGB(25,25,25)";
		document.getElementById("lltext").style.color = "RGB(130,130,130)";
	}
}