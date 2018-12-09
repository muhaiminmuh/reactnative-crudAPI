<?php
require  'config.php';

if (!isset($_GET['token2an'])) {	//JIKA TIDAK ADA VARIABEL GET token2an
	
	//buat array untuk format data
	$dataArray = [
		'status' => false,
		'pesan'  => "Maaf hak akses ditolak",
		'data'	 => "",
	];

	//cetak data dalam format JSON
	header('Content-Type: application/json');
    exit( json_encode($dataArray) );


} else if ( $token2an != $_GET['token2an'] ) { //JIKA VARIABEL $token2an TIDAK SAMA GET token2an
	
	//buat array untuk format data
	$dataArray = [
		'status' => false,
		'pesan'  => "Maaf hak akses ditolak",
		'data'	 => "",
	];

	//cetak data dalam format JSON
	header('Content-Type: application/json');
    exit( json_encode($dataArray) );

}

try {

	//variable perintah sql SELECT
	$sql 	= "select * from berita order by id desc";	

	//eksekusi query
	$query 	= $koneksi->query($sql);  

	//mengambil semua data dalam format object
	$data 	= $query->fetchAll(PDO::FETCH_OBJ);

	//buat text intro
	foreach ($data as $item) {
        $item->intro = substr($item->konten,0,80)."...";
    }

	//buat array untuk format data
	$dataArray = [
		'status' => true,
		'pesan'  => "Berhasil Tampil",
		'data'	 => $data,
	];

	//cetak data dalam format JSON
	header('Content-Type: application/json');
    echo json_encode($dataArray);

} catch (PDOException $salah) {

	//buat array untuk format data
	$dataArray = [
		'status' => false,
		'pesan'  => "Kesalahan: ".$salah->getMessage(),
		'data'	 => "",
	];

	//cetak data dalam format JSON
	header('Content-Type: application/json');
    echo json_encode($dataArray);
		
}

?>