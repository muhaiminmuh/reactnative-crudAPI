import React, { Component } from 'react';

import {
	Text,
	View
} from 'react-native';

class Header extends Component {
	
	state = {
		judul:"Program Saya"
	}

	render() {

		return (
			<View style={{alignItems: 'center'}}>
				<Text style={{fontSize:25}}>
					TEST REACT NATIVE MUHAIMIN
				</Text>
				<Text style={{fontSize:25}}>
					{this.state.judul}
				</Text>
			</View>
			
		);
	}
}

export default Header;