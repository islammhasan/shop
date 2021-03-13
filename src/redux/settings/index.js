export const types = {
  GET_LANG_SUCCESS: 'GET_LANG_SUCCESS',
  GET_LANG_FAILED: 'GET_LANG_FAILED',
  GET_COUNTRY_SUCCESS: 'GET_COUNTRY_SUCCESS',
  GET_COUNTRY_FAILED: 'GET_COUNTRY_FAILED',
};

export const getLanguage = (id) => (dispatch, getState) => {
  try {
    dispatch({type: types.GET_LANG_SUCCESS, payload: id});
    console.log('Langid', id);
  } catch (error) {
    dispatch({type: types.GET_LANG_FAILED});
    console.log('err==>', error);
  }
};

export const getCountry = (id) => (dispatch, getState) => {
  try {
    dispatch({type: types.GET_COUNTRY_SUCCESS, payload: id});
    console.log('countryID', id);
  } catch (error) {
    dispatch({type: types.GET_COUNTRY_FAILED});
    console.log('err==>', error);
  }
};

const initialState = {
  langID: null,
  countryID: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LANG_SUCCESS:
      return {...state, langID: action.payload};
    case types.GET_LANG_FAILED:
      return {...state};
    case types.GET_COUNTRY_SUCCESS:
      return {...state, countryID: action.payload};
    case types.GET_COUNTRY_FAILED:
      return {...state};
    default:
      return state;
  }
};
