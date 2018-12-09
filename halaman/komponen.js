import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Image,
    StyleSheet,
    ToolbarAndroid,
    TextInput,
    ActivityIndicator,
    ImageBackground,
    Picker
} from 'react-native';

import Header from "./header";
import Footer from "./footer";

class Komponen extends Component {
    
    state = {         
        judul:"Komponen React Native",
        nama:"Masukkan Nama Gaes !!",
        alamat:"Alamat"    
    } 
 
    static navigationOptions = {         
        drawerLabel: 'Komponen',         
        drawerIcon: ({ tintColor }) => (           
            <Image             
                source={require('../gambar/nav.png')}             
                style={[styles.icon, {tintColor: tintColor}]}           
            />         
        ),     
    };
    
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
          <ImageBackground
                source = {require('../gambar/background.png')}
                style = {{width: '100%', height: '100%'}}>
                
            <Text>Halaman Komponen</Text>                     
            <Button title="Ke Beranda" onPress={() => navigate('Beranda') } />
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 3}}
                onChangeText={(nama) => this.setState({nama})}
                value={this.state.nama}
            />

            <TextInput
                style={{height: 40, borderColor: 'gray' }}
                onChangeText={(judul) => this.setState({judul})}
                value={this.state.judul}
            />

            <TextInput
                multiline = {true}
                numberOfLines = {3}
                onChangeText = {(alamat) => this.setState({alamat})}
                value = {this.state.alamat}
            />

            <ActivityIndicator
                size = "large"
                color = "#882211"
            />

            <Picker
                selectedValue={this.state.gender}
                onValueChange={(itemValue, itemIndex) => 
                    this.setState({gender: itemValue})}>
                <Picker.Item label="Laki-Laki" value="L" />
                <Picker.Item label="Perempuan" value="P" />
            </Picker>

          </ImageBackground>
            </View>

        <View style={{height: 50, backgroundColor: '#c0c0c0'}}>
          <Footer konten="Universitas Duta Bangsa Surakarta @ 2018"/>
      </View>
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

export default Komponen;