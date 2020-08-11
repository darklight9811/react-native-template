// Packages
import {AppRegistry} from 'react-native';

// App modules
import App from './src/js/modules/App';
import {name as appName} from './app.json';

import getModel from './src/js/models';

const user = getModel('user');

// Start app
AppRegistry.registerComponent(appName, () => App);
