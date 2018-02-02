import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { registerScreens } from './screens';
import { Navigation } from 'react-native-navigation';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();


let theNavigatorStyle = {};

if (Platform.OS === 'ios') {
	theNavigatorStyle = {
		navBarTranslucent: false,
		drawUnderNavBar: true
	};
} else {
	theNavigatorStyle = {
		navBarBackgroundColor: '#0a0a0a'
	};
}

const navigatorStyle = {
	...theNavigatorStyle,
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	navBarBackgroundColor: '#087f23',
	statusBarTextColorSchema: 'light',
	drawUnderTabBar: true
};

class App extends Component {
	constructor(props) {
		super(props);
		registerScreens(store, Provider);
		this.startApp();
	}

	startApp(){
		Navigation.startTabBasedApp({
			tabs: [
				{
					label: 'GoChat',
					screen: 'screen.GoChat',
					title: 'GoChat',
					navigatorStyle
				}
			],
			tabsStyle: {
				tabBarButtonColor: 'white',
				tabBarSelectedButtonColor: 'white',
				tabBarBackgroundColor: 'black'
			}
		});
	}
}

export default App;