//OBJECT FOR CONNECTION ON PHP
//url - url for the PHP
//id - array of string of elements id
//XMLrecieve - function that will be call when a connection is recieving data
function AJAXConnection(url,id,XMLRecieve){
	this.xmlConnection = getXMLConnection();
	//ELEMENT ID THAT WILL GET THE VALUE
	this.id = id;
	//URL OF THE PHP
	this.url = url;
	this.XML;
	this.xmlConnection.onreadystatechange = XMLRecieve;
	this.send = processXML;
}

//GET TABLE OF THE XMLDATA
//data - data bundle that you want the extraction to happen
//index - the index where the data is
//return a data
function getData(data,index){
	return data.getElementsByTagName(index);
}

//GET VALUE OF THE TABLE OF XMLDATA
//data - data where you want the extraction to happen
//index - the index where that data is
//return a value
function getValue(data, index){
	return data[index].childNodes[0].nodeValue;
}

//SEND FUNCTION
//WILL SEND A REQUEST TO THE PHP IN GET FORMAT
function processXML(){
	if(this.xmlConnection.readyState == 4 || this.xmlConnection.readyState == 0){
		this.xmlConnection.open('GET',constructUrl(this.url,this.id),true);
		this.xmlConnection.send();
	}
}

//CONSTRUCT THE URL IN GET METHOD FORM
function constructUrl(url,id){
	var buffer="";
	for(i=0;i<(id.length);i++){
		if(i!=0){
			buffer += "&";
		}
		buffer += id[i]+"="+document.getElementById(id[i]).value;
	}
	return url+"?"+buffer;
}

//GET THE XMLDATA FROM THE RECIEVER PART OF CONNECTION
//MUST BE CALLED INSIDE XMLRecieve function this will get the XML response of the PHP
function getXML(connection){
	if(connection.xmlConnection.readyState == 4 || connection.xmlConnection.readyState == 200){
		connection.XML = connection.xmlConnection.responseXML;
		return true;
	}
	return false;
}

//OBJECT FUNCTION TO GET THE XMLCONNECTION REQUEST
function getXMLConnection(){
	return new XMLHttpRequest();
}