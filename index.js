import { registerRootComponent } from 'expo';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
(async()=> {
    let token =await  AsyncStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        axios.defaults.headers.common['Authorization'] = null;
          delete axios.defaults.headers.common['Authorization'];
    }
})();