import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './index';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from '../config/ReactotronConfig';
let composeEnhancers;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const middlewares = [thunk];

// MiddleWare for redux
const reactotrionEnhancer = Reactotron.createEnhancer();
// middleware = ;
/* Config for Redux Presist */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'settings', 'cart', 'cartLocal'],
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares), reactotrionEnhancer),
);

export const persistor = persistStore(store);
