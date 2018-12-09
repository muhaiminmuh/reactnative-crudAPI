/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ToolbarAndroid,
} from 'react-native';

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Header from "./halaman/header";
import Footer from "./halaman/footer";
import Profil from "./halaman/profil";
import Berita from "./halaman/berita";
import About from "./halaman/about";
import Komponen from "./halaman/komponen";
import ManageBerita from "./halaman/manageberita";

class App extends Component {
  
  state = {
    judul: "UDB SURAKARTA"
  }

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => ( 
      <Image              
        source={require('./gambar/nav.png')}              
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
            logo={ require('./gambar/logo.png') }                       
            navIcon={ require('./gambar/nav.png') }                       
            title={this.state.judul}                       
            style={styles.toolbar}                       
            titleColor='white'                       
            onIconClicked= {() => this.props.navigation.openDrawer() }  />    
        
        </View>

      <View style={{flex: 1, backgroundColor: 'white'}}>      
          <Text>Halaman Beranda</Text>                     
          <Button title="Ke Profil" onPress={() => navigate('Profil') } />
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


const AppNavigasi = createDrawerNavigator(
  {
    Beranda: { screen: App },
    Profil: { screen: Profil },  
    Berita: { screen: Berita },  
    About: { screen: About }, 
    Komponen: { screen: Komponen }, 
    ManageBerita: { screen: ManageBerita},
  },
  {
    intialRouteName: 'Beranda',
  }
);

export default AppNavigasi;
