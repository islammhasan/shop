import axios from 'axios';

export const types = {
  STARTLOADING: 'STARTLOADING',
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILED: 'GET_PRODUCTS_FAILED',
};
export const getProducts = () => async (dispatch, getState) => {
  dispatch({type: types.STARTLOADING});
  try {
    const response = await axios.get('https://fakestoreapi.com/products', {
      params: {
        limit: 5,
      },
    });
    if (response) {
      dispatch({type: types.GET_PRODUCTS_SUCCESS, response});
      return response.data;
    }
  } catch (error) {
    dispatch({type: types.GET_PRODUCTS_FAILED});
  }
};

const initialState = {
  loading: false,
};
// state - action = {type , payload}
export default (state = initialState, action) => {
  switch (action.type) {
    case types.STARTLOADING:
      return {...state, loading: true};
    case types.GET_PRODUCTS_SUCCESS || types.GET_PRODUCTS_FAILED:
      return {...state, loading: false};
    default:
      return state;
  }
};
