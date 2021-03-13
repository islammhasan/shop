import {combineReducers} from 'redux';
import products from './products';
import settings from './settings';
import user from './user';

// All reducers.
export default combineReducers({
  products,
  user,
  settings,
});
