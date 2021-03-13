import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
const types = {
  GET_CART_ITEMS_SUCCESS: 'GET_CART_ITEMS_SUCCESS',
  GET_CART_ITEMS_FAILED: 'GET_CART_ITEMS_FAILED',
};
export const useCart = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const headers = {
    headers: {
      Authorization: user?.token ? `Bearer ${user.token}` : null,
    },
  };
  const getCartItems = async () => {
    try {
      const response = await axios.get(
        'http://www.rncourseproject.com/app/cart',
        headers,
      );
      const items = response?.data?.items;
      console.log('getCartItems==>', response.data);
      if (items) {
        dispatch({type: types.GET_CART_ITEMS_SUCCESS, payload: items});
      }
    } catch (error) {
      console.log('err==>', error);
    }
  };
  const addProductToCart = async (data) => {
    try {
      const response = await axios.post(
        'http://www.rncourseproject.com/app/cart',
        data,
        headers,
      );
      console.log('addProductToCart==>', response.data);
      if (response) {
        getCartItems();
      }
    } catch (error) {
      console.log('err==>', error);
    }
  };

  const increaseProduct = async (data) => {
    try {
      const response = await axios.put(
        'http://www.rncourseproject.com/app/cart',
        {...data, action: 'increase'},
        headers,
      );
      console.log('increaseProduct==>', response.data);
      if (response) {
        getCartItems();
      }
    } catch (error) {
      console.log('err==>', error);
    }
  };

  const decreaseProduct = async (data) => {
    try {
      const response = await axios.put(
        'http://www.rncourseproject.com/app/cart',
        {...data, action: 'decrease'},
        headers,
      );
      console.log('decreaseProduct==>', response.data);
      if (response) {
        getCartItems();
      }
    } catch (error) {
      console.log('err==>', error);
    }
  };

  const deleteProduct = async (data) => {
    try {
      const response = await axios.put(
        'http://www.rncourseproject.com/app/cart',
        {...data, action: 'delete'},
        headers,
      );
      console.log('deleteProduct==>', response.data);
      if (response) {
        getCartItems();
      }
    } catch (error) {
      console.log('err==>', error);
    }
  };

  return {
    getCartItems,
    addProductToCart,
    increaseProduct,
    decreaseProduct,
    deleteProduct,
  };
};

const initialState = {
  items: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_CART_ITEMS_SUCCESS:
      return {...state, items: payload};
    case types.GET_CART_ITEMS_FAILED:
      return {...state};
    default:
      return state;
  }
};
