import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, NativeModules } from 'react-native';
import styles from './styles';

// import XMPP from '../../utils/XMPP';
// const { ImageLibraryManager, RNXMPP } = NativeModules;

import { inject, observer } from 'mobx-react/native';
import NavGlobal from '../../constants/navglobal';

import { create } from 'mobx-persist'
const hydrate = create({ storage: AsyncStorage })


@inject('xmppStore') @observer
class Login extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		if(this.props.xmppStore.logged){
			NavGlobal.startApp();
			hydrate('loginUser', this.props.xmppStore);
			return(<View/>);
		}

		return(
			<View style={styles.loginContainer}>
				<View>
					<Text>Username</Text>
					<TextInput style={styles.loginTextInput}
						autoCorrect={false}
						autoCapitalize="none"
						autoFocus={true}
						placeholder="user@gmail.com"
						value={this.state.username}
						onChangeText={(username) => this.setState({username})}
					/>
				</View>

				<View>
					<Text>Password</Text>
					<TextInput style={styles.loginTextInput}
						autoCorrect={false}
						autoCapitalize="none"
						placeholder="password"
						value={this.state.password}
						secureTextEntry={true}
						onChangeText={(password) => this.setState({password})}
					/>
				</View>
				<TouchableOpacity onPress={this._loginClicked.bind(this)}>
					<View style={styles.loginButton}>
						<Text style={styles.loginText}>Login</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}

	_loginClicked(){
		this.props.xmppStore.login(this.state);
	}

}

export default Login;