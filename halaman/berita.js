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
    WebView
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import Footer from "./footer";
import BeritaList from "./beritaList";

class Berita extends Component {

    state = {
        berita:null,
        koneksi: false,
        tampilModal: false,
        judulAktif: " ",
        kontenAktif: " ",
    }

    constructor(props) {
        super(props);
        this.statusKoneksi = this.statusKoneksi.bind(this);
        NetInfo.isConnected.fetch().then(this.statusKoneksi);
    }
    
    componentDidMount() {
        NetInfo.isConnected.addEventListener('change', this.statusKoneksi);
        fetch("http://api.sopingi.com/berita.php?token2an=42262euhfbu5y6347ygfue567eybvds87y355cf")
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
        drawerLabel: 'Berita',
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
        this.setState({judulAktif: judul, kontenAktif: konten});
        this._tampilModal(true);
    };

    _tampilModal(x) {
        this.setState({tampilModal: x});
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
                        onIconClicked= {() => navigate('Beranda') }  />
                    
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
            <Text>{this.state.judulAktif}</Text>
            <WebView originWhitelist={['*']} source={{ html: this.state.kontenAktif }} />
            <Button title="Kembali" onPress={() => { this._tampilModal(false); }} />
        </Modal>
        
    </View>
        
        );
    }
}

const styles = StyleSheet.create({   
    icon: {     
        width: 24,     
        height: 24,   
}, 
 
    toolbar: {     
        height: 56,     
        backgroundColor: '#4883da',   
}, 
   
  }); 

export default Berita;