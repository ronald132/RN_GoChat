import { Navigation } from 'react-native-navigation';
import { iconsMap, iconsLoaded } from '../utils/AppIcons';
import { View, Text, Platform } from 'react-native';

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


const showLoading = () => {
		Navigation.startSingleScreenApp({
			screen: {
				screen: 'screen.Loading',
				title: 'Loading'
			}
		});
	}

const showLogin= () => {
		Navigation.startSingleScreenApp({
			screen: {
				screen: 'screen.Login',
				title: 'Login'
			}
		});
	}

const startApp = () => {
		iconsLoaded.then(() => {
			Navigation.startTabBasedApp({
			tabs: [
				{
					label: 'GoChat',
					screen: 'screen.GoChat',
					title: 'GoChat',
					icon: iconsMap['ios-chatboxes-outline'],
					selectedIcon: iconsMap['ios-chatboxes'],
					navigatorStyle
				}
			],
			tabsStyle: {
				tabBarButtonColor: 'white',
				tabBarSelectedButtonColor: 'white',
				tabBarBackgroundColor: 'black'
			}
			});
		});
	}

export default {
	showLoading,
	showLogin,
	startApp
}