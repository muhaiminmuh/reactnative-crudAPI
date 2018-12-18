<?php
	error_reporting(0);
	
	$HOST="localhost";
	$USER="sopingi3_usr";
	$PASSWORD="dbNya89!";
	$NAMADB="sopingi3_api";

	$koneksi = new PDO("mysql:host=$HOST;dbname=$NAMADB", $USER, $PASSWORD, array( PDO::ATTR_PERSISTENT => true ));  
	$koneksi->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


	$token2an="42262euhfbu5y6347ygfue567eybvds87y355cf";

?>