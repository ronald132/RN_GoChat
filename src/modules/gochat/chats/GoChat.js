import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

import styles from '../styles';
import ChatCell from '../reusable/ChatCell';
import data from '../data.json';

class GoChat extends Component {
	constructor(props) {
		super(props);
		this._viewMessage = this._viewMessage.bind(this);
	}
	
	componentWillMount(){
		let list = data.chats;

		const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
        const dataSource = ds.cloneWithRows(list);
        this.setState({
          dataSource
        });
	}

	render(){
		return(
			<ListView
				enableEmptySections
				dataSource={this.state.dataSource}
				renderRow={rowData => <ChatCell chat={rowData} viewMessage={this._viewMessage}/>}
				renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.RowSeparator} />}
			/>
		);
	}

	_viewMessage(messageId){
		this.props.navigator.push({
			screen: 'screen.ChatWindow',
			passProps: {
				messageId
			}
		});
	}
}


export default GoChat;