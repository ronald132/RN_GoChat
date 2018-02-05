import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../styles.js';

class ChatMsgCell extends Component {
	constructor(props){
		super(props);

	}
	render(){
		var textWidth = Dimensions.get('window').width - 80;

		return(
			<TouchableOpacity>
				{
					this.props.message.from !=='Me' && 
					<View style={styles.ChatCellMsgContainer}>
						<Image style={styles.ChatCellImage} source={require('../images/img_chat_sample.jpg')}/>
						<View style={styles.ChatCellMsgTextContainer}>
							<Text style={styles.ChatCellMsgText}>{this.props.message.content}</Text>
						</View>
					</View>

				}
				{
					this.props.message.from ==='Me' && 
					<View style={styles.ChatCellMsgRightContainer}>
						<View style={styles.ChatCellMsgTextRightContainer}>
							<Text style={styles.ChatCellMsgTextRight}>{this.props.message.content}</Text>
						</View>
						<Image style={styles.ChatCellImage} source={require('../images/img_chat_sample.jpg')}/>
					</View>

				}
			</TouchableOpacity>
		);
	}
}

export default ChatMsgCell;