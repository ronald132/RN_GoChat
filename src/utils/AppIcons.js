/* eslint-disable new-cap */
import { PixelRatio, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const navIconSize = (__DEV__ === false && Platform.OS === 'android') ? PixelRatio.getPixelSizeForLayoutSize(40) : 40; // eslint-disable-line
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
	'ios-film-outline': [30, 'white'],
	'ios-film': [30, '#ff0000'],
	'ios-desktop-outline': [30, 'white'],
	'ios-desktop': [30, 'white'],
	'ios-search': [30, 'white'],
	'ios-arrow-round-down': [navIconSize],
	'ios-close': [40, 'white'],
	'ios-ionitron-outline': [40, 'white'],
	'ios-chatboxes-outline': [30, 'white'],
	'ios-chatboxes': [30, 'white'],
	'ios-contact-outline': [30, 'white'],
	'ios-contact': [30, 'white'],
	'ios-eye-outline': [30, 'white'],
	'ios-eye': [30, 'white'],
	'ios-locate-outline': [30, 'white'],
	'ios-locate': [30, 'white'],
	'ios-person-add-outline': [30, 'white'],
	'ios-person-add': [30, 'white'],
	'ios-compass-outline': [30, 'white'],
	'ios-compass': [30, 'white']
};


const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
	Promise.all(
		Object.keys(icons).map(iconName =>
		// IconName--suffix--other-suffix is just the mapping name in iconsMap
		Ionicons.getImageSource(
		iconName.replace(replaceSuffixPattern, ''),
		icons[iconName][0],
		icons[iconName][1]
		))
	).then(sources => {
		Object.keys(icons)
		.forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));

		// Call resolve (and we are done)
		resolve(true);
	});
});

export {
	iconsMap,
	iconsLoaded
};