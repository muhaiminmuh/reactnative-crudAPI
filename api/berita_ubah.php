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
	$judul = $data['judul'];
	$konten = $data['konten'];

	//variable perintah sql INSERT
	$sql 	= "update berita set judul='$judul',konten='$konten' where id='$id' ";	

	//eksekusi query
	$query 	= $koneksi->query($sql);  

	if ($query) {
		//buat array untuk format data
		$dataArray = [
			'status' => true,
			'pesan'  => "Berhasil Ubah",
		];
		
	} else {
		//buat array untuk format data
		$dataArray = [
			'status' => true,
			'pesan'  => "Gagal Ubah",
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