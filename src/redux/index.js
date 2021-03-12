import {combineReducers} from 'redux';
import products from './products';
import user from './user';

// All reducers.
export default combineReducers({
  products,
  user,
});
