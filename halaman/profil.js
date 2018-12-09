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

class Profil extends Component {
    
    state = {         
        judul:"Profil UDB"     
    } 
 
    static navigationOptions = {         
        drawerLabel: 'Profil',         
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
          <Text>Halaman Profil</Text>                     
          <Button title="Ke Profil" onPress={() => navigate('Beranda') } />
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

export default Profil;