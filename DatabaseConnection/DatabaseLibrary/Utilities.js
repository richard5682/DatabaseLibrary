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