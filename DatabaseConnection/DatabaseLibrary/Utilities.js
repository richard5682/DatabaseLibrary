const BANCHAR = ['!','<','>',' ','#','*','^','`','~','=']; 

function CheckInput(inputstring){
	for(int i=0;i<BANCHAR.length;i++){
		if(inputstring.contains(BANCHAR[i])){
			return false;
		}
	}
	return true;
}