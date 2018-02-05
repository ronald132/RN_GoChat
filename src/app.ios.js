import React, { Component } from 'react';
import { registerScreens } from './screens';
import { Navigation } from 'react-native-navigation';

import { iconsMap, iconsLoaded } from './utils/AppIcons';
import store from './store/store';
import Provider from './utils/MobxRnnProvider';
import NavGlobal from './constants/navglobal';


class App extends Component {
	constructor(props) {
		super(props);
		registerScreens(store, Provider);

		iconsLoaded.then(() => {
			NavGlobal.showLoading();
		});
	}
}

export default App;