<?php //AJAX EXAMPLE

?>

<html>

	<head>
		<script type="text/javascript" src="../JavascriptLibrary/AJAXML.js"></script>
		
		<script type="text/javascript">
			var url = "EXAMPLE.php";
			var id = new Array('name','age','gender','key');
			var conn1 = new AJAXConnection(url,id,XMLrecieve);
			function submitform(){
				conn1.send();
			}
			function XMLrecieve(){
				if(getXML(conn1)){
					var data = getData(conn1.XML,'person');
					console.log(getValue(data,0));
				}
			}
			
		</script>
	</head>
	
	<body>
		<form action="javascript: submitform()">
			<input type="text" id="name">
			<input type="text" id="age">
			<input type="text" id="gender">
			<input type="hidden" id="key">
			<input type="submit" value="SUBMIT">
		</form>
	</body>
</html>