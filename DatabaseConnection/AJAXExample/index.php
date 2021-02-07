<?php //AJAX EXAMPLE

?>

<html>

	<head>
		<script type="text/javascript" src="../DatabaseLibrary/AJAXML.js"></script>
		
		<script>
			var url = "XMLRETRIEVER.php";
			var id = new Array('name','age','gender','key');
			var conn1 = new AJAXConnection(url,id);
			function submitform(){
				conn1.send();
			}
		</script>
	</head>
	
	<body>
		<form onSubmit="javascript: submitform">
			<input type="text" id="name">
			<input type="text" id="age">
			<input type="text" id="gender">
			<input type="hidden" id="key">
			<input type="submit" value="SUBMIT">
		</form>
	</body>

</html>