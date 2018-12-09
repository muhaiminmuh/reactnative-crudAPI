<?php
		
	$HOST="localhost";
	$USER="root";
	$PASSWORD="";
	$NAMADB="reactnativedb";

	$koneksi = new PDO("mysql:host=$HOST;dbname=$NAMADB", $USER, $PASSWORD, array( PDO::ATTR_PERSISTENT => true ));  
	$koneksi->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


	$token2an="42262euhfbu5y6347ygfue567eybvds87y355cf";

?>