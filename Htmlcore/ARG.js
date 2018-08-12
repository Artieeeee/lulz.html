var arrayOfSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var randomARG;
var keyofvalue = "";
var modeOf;
var mode1;
var schet = 0;
var char1 = "-";
var endkey;
var RadioCheckGo=1;
function OutputMode(Mode){
	keyofvalue = "";
	if(Mode == 1){
		char1 = '-';
		modeOf = 15;
		mode1 = 15;
	}
	if(Mode == 2){
		char1 = '-';
		modeOf = 25;
		mode1 = 25;
	}
	if(Mode == 3){
		char1 = '';
		modeOf = 19;
		mode1 = 19;
	}
	while(0<modeOf){
		modeOf--;

		randomARG = Math.floor(Math.random()*36);
		if(randomARG>10){
			randomARG = arrayOfSymbols[randomARG-10];
		}
		if(schet ==5){
			keyofvalue = keyofvalue+char1;
			schet = 0;	
		}
		keyofvalue = keyofvalue+randomARG;

		schet++;
	}
	modeOf = 0;
	mode1 = 0;
	schet = 0;
	randomARG = 0;
	document.getElementById("Output").value = keyofvalue;

}