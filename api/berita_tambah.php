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
	$judul = $data['judul'];
	$konten = $data['konten'];
	$gambar="https://cdn-images-1.medium.com/max/1600/1*To2H39eauxaeYxYMtV1afQ.png";

	//variable perintah sql INSERT
	$sql 	= "insert into berita values(null,'$judul','$konten','$gambar')";	

	//eksekusi query
	$query 	= $koneksi->query($sql);  

	if ($query) {
		//buat array untuk format data
		$dataArray = [
			'status' => true,
			'pesan'  => "Berhasil Tambah",
		];
		
	} else {
		//buat array untuk format data
		$dataArray = [
			'status' => true,
			'pesan'  => "Gagal Tambah",
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