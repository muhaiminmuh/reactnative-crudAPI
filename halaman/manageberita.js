import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Image,
    StyleSheet,
    ToolbarAndroid,
    NetInfo,
    ToastAndroid,
    FlatList,
    Modal,
    WebView,
    TextInput,
    Alert
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import Footer from "./footer";
import BeritaList from "./beritaList";


var toolbarActions = [
    { title: 'Tambah', show: 'always' },
    { title: 'Edit', show: 'always' }
];

var actiontoolbarActions = [

];

class ManageBerita extends Component {

    state = {
        berita:null,
        koneksi: false,
        tampilModal: false,
        idAktif: " ",
        judulAktif: " ",
        kontenAktif: " ",

        tambahModal: false,
        tambahJudul: "",
        tambahKonten: "",

    }

    constructor(props) {
        super(props);
        this.statusKoneksi = this.statusKoneksi.bind(this);
        NetInfo.isConnected.fetch().then(this.statusKoneksi);
    }

    _tambahBerita = () => {
        const {tambahJudul} = this.state;
        const {tambahKonten} = this.state;

        fetch("BASEURL/berita_tambah.php?token2an=42262euhfbu5y6347ygfue567eybvds87y355cf",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                judul : tambahJudul,
                konten : tambahKonten,
            })    
        })
        .then((response) => response.json())
            .then((responseJson) => {
                Alert.alert('Data Berhasil Ditambahkan');
            })
        .catch((error) => {
            console.error(error);
        })
    } 
    

    _editBerita = () => {
        // Alert.alert('TEST');
        const {editJudul} = this.state;
        const {editKonten} = this.state;

        fetch("BASEURL/berita_ubah.php?token2an=42262euhfbu5y6347ygfue567eybvds87y355cf",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.idAktif,
                judul : editJudul,
                konten : editKonten,
            })    
        })
        .then((response) => response.json())
            .then((responseJson) => {
                Alert.alert('Data Berhasil DiUbah');
            })
        .catch((error) => {
            console.error(error);
        })
    }


    _hapusBerita = () => {
        fetch("BASEURL/berita_hapus.php?token2an=42262euhfbu5y6347ygfue567eybvds87y355cf",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.idAktif
            })    
        })
        .then((response) => response.json())
            .then((responseJson) => {
                Alert.alert('Hapus Sukses');

            })
        .catch((error) => {
            console.error(error);
        })
    }
    componentDidMount() {
        NetInfo.isConnected.addEventListener('change', this.statusKoneksi);
        fetch("BASEURL/berita.php?token2an=42262euhfbu5y6347ygfue567eybvds87y355cf")
            .then(response => response.json())
            .then(hasil => {

                if (hasil.status) {
                    this.setState({
                        berita : hasil.data,
                    });
                } else {
                    ToastAndroid.show(hasil.pesan, ToastAndroid.SHORT);
                }
            })
        
            .catch(salahe => {
                console.log(salahe);
                ToastAndroid.show('Gagal akses API', ToastAndroid.SHORT);
            });
    }

    componentWillUnmount() {
        NetInfo.isConnected. removeEventListener('change', this.statusKoneksi);
    }

    statusKoneksi(isConnected) {
        this.setState({koneksi: isConnected});
        if (!isConnected) {
            ToastAndroid.show('Tidak ada koneksi', ToastAndroid.SHORT);
        }
    }

    static navigationOptions = {
        drawerLabel: 'Manage Berita',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../gambar/nav.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    _renderBeritaItem = ({item}) => (
        <BeritaList
            id={item.id}
            judul={item.judul}
            intro={item.intro}
            konten={item.konten}
            gambar={item.gambar}
            saatDitekan={this._saatDitekan}
        />
    );

    _saatDitekan = (id, judul, konten) => {
        ToastAndroid.show('Berita ID = ' + id, ToastAndroid.SHORT);
        //alert(konten);
        this.setState({idAktif: id, judulAktif: judul, kontenAktif: konten});
        this._tampilModal(true);

    };

    _tampilModal(x) {
        this.setState({tampilModal: x});
    }

    _tambahModal(x) {
        this.setState({tambahModal: x});
    }




    render() {
        
        const { navigate } = this.props.navigation;
        return (

            <View style={{flex: 1, flexDirection: 'column'}}>
      
                <View style={{height: 70, backgroundColor: 'yellow'}}>
                            
                    <ToolbarAndroid                       
                        logo={ require('../gambar/logo.png') }                       
                        navIcon={ require('../gambar/left-arrow.png') }                       
                        title={this.state.judul}                       
                        style={styles.toolbar}                       
                        titleColor='white'                       
                        onIconClicked= {() => navigate('Beranda') } 
                        actions={[{title: 'Tambah', show: 'always'}]}
                        onActionSelected={() => { this._tambahModal(true) }}
                        />
                    
                    </View>

        <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList
                data={this.state.berita}
                renderItem={this._renderBeritaItem}
            />
        </View>

        <View style={{height: 50, backgroundColor: '#c0c0c0'}}>
          <Footer isi="Universitas Duta Bangsa Surakarta @ 2018"/>
        </View>

        <Modal animationType="slide" transparent={false} visible={this.state.tampilModal} >
                <ToolbarAndroid                       
                    logo={ require('../gambar/logo.png') }                       
                    navIcon={ require('../gambar/left-arrow.png') }                       
                    title={'Edit & Hapus'}                       
                    style={styles.toolbar}                       
                    titleColor='white'
                    onIconClicked= {() => navigate('ManageBerita') }                       
                />
            
            <Text style={styles.editTitle}>HAPUS DATA</Text>
            <TextInput>ID   = {this.state.idAktif}</TextInput>
            <TextInput>Judul    = {this.state.judulAktif}</TextInput>
            <TextInput>Konten   = {this.state.kontenAktif}</TextInput>
            <Button title="Hapus" onPress={() => { this._hapusBerita(); }} />

            <View>
                <View style={styles.container}>
                    <Text style={styles.editTitle}>EDIT DATA</Text>

                    <Text style={styles.editInput}>ID</Text>
                    <TextInput editable={false} style={styles.editId}>ID   = {this.state.idAktif}</TextInput>

                    <Text style={styles.editInput}>Judul</Text>
                    <TextInput style={styles.editInput}
                        onChangeText = {(text) => this.setState({editJudul:text})}
                        value = {this.state.editJudul}
                    />
                    
                    <Text style={styles.editInput}>Konten Berita</Text>
                    <TextInput style={styles.editInput}
                        multiline = {true}
                        numberOfLines = {4}
                        onChangeText = {(text) => this.setState({editKonten:text})}
                        value={this.state.editKonten}
                    />

                </View>
                
                <Button title="Simpan Edit" onPress={() => { this._editBerita(); }} />
                <Button title="Kembali" onPress={() => { this._tampilModal(true); }} />
            </View>
        </Modal>
        
        <Modal animationType="slide" transparent={false} visible={this.state.tambahModal} >
            
            <Text>Judul</Text>
            <TextInput
                onChangeText = {(text) => this.setState({tambahJudul:text})}
                value = {this.state.tambahJudul}
            />
            
            <Text>Konten Berita</Text>
            <TextInput
                multiline = {true}
                numberOfLines = {4}
                onChangeText = {(text) => this.setState({tambahKonten:text})}
                value={this.state.tambahKonten}
            />

            <Button title="Simpan" onPress={() => { this._tambahBerita(); }} />
            <Button title="Kembali" onPress={() => { this._tampilModal(false); }} />
        </Modal>

    </View>
        
        );
    }
}


const styles = StyleSheet.create({   

    container: {
        justifyContent: 'center',
        alignItems: 'center',
},

    editTitle: {
        fontSize: 16,
        textAlign: 'center',
        margin: 8,
        width:'100%',
        fontWeight: 'bold',
        color: 'red',
},

    editId: {
        fontSize: 13,
        textAlign: 'center',
        margin: 2,
        width:'100%',
        fontWeight: 'bold',
        color: 'red',
},

    editInput: {
        fontSize: 13,
        textAlign: 'center',
        margin: 2,
        width:'100%',
        fontWeight: 'bold',
},

    icon: {     
        width: 24,     
        height: 24,   
}, 

    toolbar: {     
        height: 56,     
        backgroundColor: '#4883da',   
}, 

   
  }); 

export default ManageBerita;