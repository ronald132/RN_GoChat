import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';

import GoChat from './modules/gochat/chats/GoChat';
import ChatWindow from './modules/gochat/chats/ChatWindow';
import Loading from './modules/gochat/Loading';
import Login from './modules/gochat/Login';
import {observer} from 'mobx-react/native';

// function injectStore (Component, store, provider) {
//   return (() => <Component store={store}/>);
// }

export function registerScreens(store, provider){
	Navigation.registerComponent('screen.Loading', () => Loading, store, provider);
	Navigation.registerComponent('screen.Login', () => Login, store, provider);
	Navigation.registerComponent('screen.GoChat', () => GoChat, store, provider);
	Navigation.registerComponent('screen.ChatWindow', () => ChatWindow, store, provider);
}