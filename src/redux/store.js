import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '..';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
let composeEnhancers;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
// MiddleWare for redux
middleware = applyMiddleware(thunk);
/* Config for Redux Presist */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(middleware),
);

export const persistor = persistStore(store);
