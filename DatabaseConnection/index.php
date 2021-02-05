<?php
	include_once("DatabaseLibrary/CONNECTSERVER.inc.php");
	$SQL = Construct_SELECTSQL(
						array("username","password") // <- ARRAY OF THE SELECT COLLUMN
						,"client" // <- NAME OF THE TABLE
						,array() // <- WHERE VARIABLE NAME
						,array()); // <- WHERE VARIABLE VALUES
	if(ConnectToDefaultServer("test")){
		echo("SUCCESS CONNECTION TO DATABASE!<br>");
		echo("SQL QUERY : <strong>".$SQL."</strong><br>");
		if ($DATA = QUERY_SQL($SQL)){
			for($i=0;$i<count($DATA);$i++){
				echo($i." : ".$DATA[$i]['username']."<br>");
			}
		}else{
			echo("IM EMPTY!");
		}
	}
	
?>


<html>
	
</html>