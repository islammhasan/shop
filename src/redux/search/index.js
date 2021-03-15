import axios from 'axios';

export const types = {
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  SEARCH_FAILED: 'SEARCH_FAILED',
}

export const searchProducts = (term) => async (dispatch, getState) => {
  const pageNumber = 1;
  try {
    const response = await axios.get(
      `http://www.rncourseproject.com/app/product/search?query=${term}&page=${pageNumber}`,
    );
    console.log('res==>', response.data.data);
    dispatch({ type: types.SEARCH_SUCCESS, payload: response.data.data })
  } catch (error) {
    console.log('error', error);
  }
};

const initialState = {
  data: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SEARCH_SUCCESS:
      return { ...state, payload }
    case types.SEARCH_FAILED:
      return { ...state }
    default:
      return state
  }
}