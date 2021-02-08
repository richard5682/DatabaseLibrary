const BANCHAR = ['!','<','>',' ','#','*','^','`','~','=']; 

function CheckInput(inputstring){
	if(inputstring.length>0){
		for(i=0;i<BANCHAR.length;i++){
			if(inputstring.includes(BANCHAR[i])){
				return false;
			}
		}
		return true;
	}else{
		return false;
	}
}
//DIALOGUE UTIL
var init_dialogue = false;
function showDialogue(header,text,csslink=null){
	if(!init_dialogue){
		init_dialogue = true;
		var link = csslink;
		if(csslink==null){
			csslink="../template/dialogbox.css";
		}
		var linkelement = document.createElement("link");
		linkelement.href = csslink;
		linkelement.rel = "stylesheet";
		linkelement.type = "text/css";
		var dialogue="<div onclick=\"javascript: hideDialogue()\" id=\"C_dialogbox\"><h1 id=\"C_dialogboxh1\">"+header+"</h1><p id=\"C_dialogboxp\">"+text+"</p></div>";
		document.head.appendChild(linkelement);
		document.body.innerHTML += dialogue;
	}else{
		document.getElementById("C_dialogboxh1").innerHTML = header;
		document.getElementById("C_dialogboxp").innerHTML = text;
		document.getElementById("C_dialogbox").style.display="block";
	}
}
function hideDialogue(){
	document.getElementById("C_dialogbox").style.display="none";
}
function initDialogue(){
	if(!init_dialogue){
		var header = "";
		var text = "";
		init_dialogue = true;
		var csslink="../template/dialogbox.css";
		var linkelement = document.createElement("link");
		linkelement.href = csslink;
		linkelement.rel = "stylesheet";
		linkelement.type = "text/css";
		var dialogue="<div onclick=\"javascript: hideDialogue()\" id=\"C_dialogbox\"><h1 id=\"C_dialogboxh1\">"+header+"</h1><p id=\"C_dialogboxp\">"+text+"</p></div>";
		document.head.appendChild(linkelement);
		document.body.innerHTML += dialogue;
		document.getElementById("C_dialogbox").style.display="none";
	}
}