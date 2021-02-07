<?php
//MUST HAVE WRITE DATA IN THE PHP
	header("Content-type: text/xml");
	echo("<?xml version=\"1.0\" encoding=\"utf-8\"?>");
	echo("<xml>");
	echo("<content>");
	
	writeData();
	
	echo("</content>");
	echo("</xml>");
?>