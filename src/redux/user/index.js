import axios from 'axios';
export const types = {
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILED: 'USER_LOGIN_FAILED',
  USER_CONFIRMED_SUCCESS: 'USER_CONFIRMED_SUCCESS',
  USER_CONFIRMED_FAILED: 'USER_CONFIRMED_FAILED',
  FETCH_USERDATA_SUCCESS: 'FETCH_USERDATA_SUCCESS',
  // GET_ADDRESS_SUCCESS: 'GET_ADDRESS_SUCCESS',
  // GET_ADDRESS_FAILED: 'GET_ADDRESS_FAILED',
};

export const userLogin = (phoneNumber) => async (dispatch, getState) => {
  const data = {phone: phoneNumber};
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

export const confirmUser = (phoneNumber, validation) => async (
  dispatch,
  getState,
) => {
  const data = {phone: phoneNumber, code: validation};
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

export const addAddress = (data) => async (dispatch, getState) => {
  const user = getState().user;
  console.warn('user', user);
  const headers = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
  try {
    const response = await axios.post(
      'http://www.rncourseproject.com/app/address',
      data,
      headers,
    );
    console.log('adds==>', response);
    if (response) {
      // dispatch({type: types.ADD_ADDRESS_SUCCESS, payload: response.data});
    }
  } catch (error) {
    // dispatch({type: types.ADD_ADDRESS_FAILED});
    console.log('error3==>', error);
  }
};

export const getAddresses = () => async (dispatch, getState) => {
  const user = getState().user;
  console.warn('user', user);
  const headers = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
  try {
    const response = await axios.get(
      'http://www.rncourseproject.com/app/address',
      headers,
    );
    console.log('adds==>', response);
    return response.data.adds
    if (response) {
      // dispatch({type: types.GET_ADDRESS_SUCCESS, payload: response.data});
    }
  } catch (error) {
    // dispatch({type: types.GET_ADDRESS_FAILED});
    console.log('error3==>', error);
  }
};

export const updateUsername = (data) => async (dispatch, getState) => {
  const user = getState().user;
  console.warn('user', user);
  const headers = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
  try {
    const response = await axios.put(
      'http://www.rncourseproject.com/app/user/change-name',
      data,
      headers,
    );
    console.log('userUpdate ==>', response);
  } catch (error) {
    console.log('errUsername', error);
  }
};

export const fetchUserDate = () => async (dispatch, getState) => {
  const user = getState().user;
  console.warn('user', user);
  const headers = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
  try {
    const response = await axios.get(
      'http://www.rncourseproject.com/app/user/get-data',
      headers,
    );
    dispatch({
      type: types.FETCH_USERDATA_SUCCESS,
      payload: response.data.userData,
    });
    console.log('userDataLog', response);
  } catch (error) {
    console.log('userDataError==>', error);
  }
};

const initialState = {
  code: null,
  token: null,
  userData: {},
  // addresses: [],
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
    case types.FETCH_USERDATA_SUCCESS:
      return {...state, userData: action.payload};
    // case types.GET_ADDRESS_SUCCESS:
    //   return {...state, addresses: action.payload.adds};
    // case types.GET_ADDRESS_FAILED:
    //   return {...state};
    default:
      return state;
  }
};
