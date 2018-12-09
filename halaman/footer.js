import React, { Component } from 'react';

import {
	Text,
	View
} from 'react-native';

class Footer extends Component {
	render() {

		return (
			<View style={{alignItems: 'center'}}>
				<Text style={{color: '#ffffff'}}> {this.props.konten} </Text>
			</View>
			
		);
	}
}

export default Footer;