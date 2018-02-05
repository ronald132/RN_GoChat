import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';
import styles from '../styles';
import ChatMsgCell from '../reusable/ChatMsgCell';
import data from '../data.json';

class ChatWindow extends Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		let list = data.messages;

		const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
        const dataSource = ds.cloneWithRows(list);
        this.setState({
          dataSource
        });
	}

	render(){
		return(
			<ListView
				style={styles.ChatWindowContainer}
				enableEmptySections
				dataSource={this.state.dataSource}
				renderRow={rowData => <ChatMsgCell message={rowData} />}
			/>
		);
	}
}

export default ChatWindow;