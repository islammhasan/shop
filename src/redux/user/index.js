import axios from 'axios';
export const types = {
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILED: 'USER_LOGIN_FAILED',
  USER_CONFIRMED_SUCCESS: 'USER_CONFIRMED_SUCCESS',
  USER_CONFIRMED_FAILED: 'USER_CONFIRMED_FAILED',
};

export const userLogin = () => async (dispatch, getState) => {
  const data = {phone: '01117727651'};
  try {
    const response = await axios.post(
      'http://www.rncourseproject.com/app/verify',
      data,
    );
    console.log('res1==>', response);
    if (response) {
      dispatch({type: types.USER_LOGIN_SUCCESS, payload: response.data.code});
    }
  } catch (error) {
    dispatch({type: types.USER_LOGIN_FAILED});
    console.log('error1===>', error);
  }
};

export const confirmUser = (data) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      'http://www.rncourseproject.com/app/verify/validate',
      data,
    );
    console.log('res2==>', response);
    if (response) {
      dispatch({type: types.USER_CONFIRMED_SUCCESS, payload: response.data});
    }
  } catch (error) {
    dispatch({type: types.USER_CONFIRMED_FAILED});
    console.log('error2===>', error);
  }
};

const initialState = {
  code: null,
  token: null,
  userData: {},
  address: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN_SUCCESS:
      return {...state, code: action.payload};
    case types.USER_LOGIN_FAILED:
      return {...state};
    case types.USER_CONFIRMED_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userData: action.payload.userData,
      };
    case types.USER_CONFIRMED_FAILED:
      return {...state};
    default:
      return state;
  }
};
