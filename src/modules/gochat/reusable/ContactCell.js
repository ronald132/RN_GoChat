import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles.js';

class ContactCell extends Component {
	constructor(props){
		super(props);

	}
	render(){
		return(
			<TouchableOpacity>
			<View style={styles.ChatCellContainer}>
				<Image style={styles.ChatCellImage} source={require('../images/img_chat_sample.jpg')}/>
				
				<View style={styles.ChatCellTextContainer}>
					<Text numberOfLines={1} style={styles.ContactCellName}>{this.props.contact.name}</Text>
				</View>
			</View>
			</TouchableOpacity>
		);
	}
}

export default ContactCell;