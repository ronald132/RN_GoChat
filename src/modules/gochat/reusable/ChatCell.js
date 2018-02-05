import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles.js';

class ChatCell extends Component {
	constructor(props){
		super(props);

	}
	render(){
		return(
			<TouchableOpacity activeOpacity={0.9} onPress={this.props.viewMessage.bind(this, 1)}>
			<View style={styles.ChatCellContainer}>
				<Image style={styles.ChatCellImage} source={require('../images/img_chat_sample.jpg')}/>
				<View style={styles.NotificationBubble}>
					<Text style={styles.NotificationBubbleText}>{this.props.chat.notification}</Text>
				</View>
				<View style={styles.ChatCellTextContainer}>
					<Text numberOfLines={1} style={styles.ChatCellSender}>{this.props.chat.sender}</Text>
					<Text numberOfLines={1} style={styles.ChatCellText}>{this.props.chat.message}</Text>
				</View>

				<View style={styles.ChatCellTimeContainer}>
					<Text style={styles.ChatCellTime}>10:50 AM</Text>
				</View>
			</View>
			</TouchableOpacity>
		);
	}
}

export default ChatCell;