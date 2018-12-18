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

	//AMBIL NILAI DARI POSTDATA
	$data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'];

	//variable perintah sql INSERT
	$sql 	= "delete from berita where id='$id' ";	

	//eksekusi query
	$query 	= $koneksi->query($sql);  

	if ($query) {
		//buat array untuk format data
		$dataArray = [
			'status' => true,
			'pesan'  => "Berhasil Hapus",
		];
		
	} else {
		//buat array untuk format data
		$dataArray = [
			'status' => true,
			'pesan'  => "Gagal Hapus",
		];
	}
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