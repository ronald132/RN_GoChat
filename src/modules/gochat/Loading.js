import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, NativeModules } from 'react-native';
import styles from './styles';

import { inject, observer } from 'mobx-react/native';
import NavGlobal from '../../constants/navglobal';
import { create } from 'mobx-persist'
const hydrate = create({ storage: AsyncStorage })


@inject('xmppStore') @observer
class Loading extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	componentWillMount(){
		
		hydrate('loginUser', this.props.xmppStore);

		if(this.props.xmppStore.logged) {
			NavGlobal.startApp();
		}else{
			NavGlobal.showLogin();
		}
	}

	render(){
		return(
			<View />
		);
	}
}

export default Loading;