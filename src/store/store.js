import { create } from 'mobx-persist';
import { AsyncStorage } from 'react-native';

import xmppStore from './xmppStore';

const hydrate = create({ storage: AsyncStorage });

const stores = {
	xmppStore
}

// you can hydrate stores here with mobx-persist
// hydrate('xmppStore', stores.xmppStore);

export default {
  ...stores
};