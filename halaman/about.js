import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Image,
    StyleSheet,
    ToolbarAndroid
} from 'react-native';

import Header from "./header";
import Footer from "./footer";

class About extends Component {
    
    state = {         
        judul:"Biodata Mahasiawa"     
    } 
 
    static navigationOptions = {         
        drawerLabel: 'About',         
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
          <Text>Halaman About</Text>                     
          <Button title="Ke Beranda" onPress={() => navigate('Beranda') } />
        </View>
        
        <View style={styles.container}>
            <Image
                style={styles.foto}
                source={ require('../gambar/foto.png') }
            />
            <Text style={styles.about}>
            NIM : 160101264
            </Text>
            <Text style={styles.about}>
            NAMA : Muhaimin Muhammad
            </Text>
            <Text style={styles.about}>
            Program Studi : Sistem Informasi / SI-16A4
            </Text>
        </View>

        <View style={{height: 50, backgroundColor: '#c0c0c0'}}>
          <Footer konten="Universitas Duta Bangsa Surakarta @ 2018"/>
      </View>
    </View>
        
        );
    }
}

const styles = StyleSheet.create({   
    container: {
        justifyContent: 'center',
        alignItems: 'center',
},
    about: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
},
    icon: {     
        width: 24,     
        height: 24,   
}, 
    foto: {
        alignItems: 'center',
        padding: 5,
        margin: 45,
        width: 120, 
        height: 120,
},    

    toolbar: {     
        height: 56,     
        backgroundColor: '#4883da',   
}, 
   
  }); 

export default About;