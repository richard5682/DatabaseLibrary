
function AJAXconnection(url,id){
	this.xmlConnection = getXMLConnection();
	this.id = id;
	this.url = url;
	this.xmlConnection.onreadystatechange = stateChange;
	this.send = processXML;
}
function processXML(){
	if(this.xmlConnection.readyState == 4 || this.xmlConnection.readyState == 0){
		console.log(constructUrl(this.url,this.id));
	}
}
function constructUrl(url,id){
	var buffer;
	for(i=0;i<count(id);i++){
		if(i!=0){
			buffer += ",";
		}
		buffer += id[i]+"="+document.getElementById[id[i]].value;
	}
	return url+"?"buffer;
}
function stateChange(){
	
}
function getXMLConnection(){
	return new XMLHttpRequest();
}