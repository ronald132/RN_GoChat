import { Navigation } from 'react-native-navigation';

import GoChat from './modules/gochat/GoChat';

export function registerScreens(store, provider){
	Navigation.registerComponent('screen.GoChat', () => GoChat, store, provider);	
}