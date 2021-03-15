import { combineReducers } from 'redux';
import products from './products';
import settings from './settings';
import user from './user';
import cart from './cart';
import orders from './orders';

// All reducers.
export default combineReducers({
  products,
  user,
  settings,
  cart,
  orders,
});
