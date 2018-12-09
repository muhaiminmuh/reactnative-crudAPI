import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

class BeritaList extends Component {   
    _ditekan = () => {      
        this.props.saatDitekan(this.props.id, this.props.judul, this.props.konten);   
    };

    render() {
        return (
            <TouchableOpacity onPress={this._ditekan}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    
                        <View style={styles.tempatGambar}>
                            <Image
                            style={styles.gambar}
                            source={{ uri: this.props.gambar }}
                            />
                        </View>

                        <View>
                            <Text style={styles.judul}> {this.props.judul}</Text>
                            <Text style={styles.intro}> {this.props.intro}</Text>
                        </View>

                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    tempatGambar:{
        width: 85, 
        height: 85,
        padding: 5,
    },
    
    gambar: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 5,
        width: 80, 
        height: 80,
    },
    
    judul:{
        padding:5,
        color: '#000000'
    },
    
    intro:{
        padding:5,
        color: '#AAAAAA'
    }

});

export default BeritaList;

