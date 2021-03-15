import axios from 'axios';

export const types = {
  GET_ORDERS_SUCCESS: 'GET_ORDERS_SUCCESS',
  GET_ORDERS_FAILED: 'GET_ORDERS_FAILED',
};

// const data = {
//   items: [],
//   shippingAddress: null,
//   totalCost: null,
//   paymentMethod: null,
//   isCoupon: false,
//   coupon: null,
//   totalAfterCoupon: null,
//   from: null,
//   to: null,
//   day: null,
// };
export const makeOrder = (data, headers) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      'http://www.rncourseproject.com/app/order',
      data,
      headers,
    );
    console.log('responseMakeOrder==>', response);
  } catch (error) {
    console.log('err==>', error);
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const user = getState().user;
  const headers = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
  try {
    const response = await axios.get(
      'http://www.rncourseproject.com/app/order',
      headers,
    );
    console.log('resOrders==>', response.data);
    if (response) {
      dispatch({type: types.GET_ORDERS_SUCCESS, payload: response.data});
    }
  } catch (error) {
    console.log('errUserOrders==>', error);
  }
};

const initialState = {
  orders: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_ORDERS_SUCCESS:
      return {...state, payload};
    case types.GET_ORDERS_FAILED:
      return {...state};
    default:
      return state;
  }
};
