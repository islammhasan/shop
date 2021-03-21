const types = {
  ADD_ITEM_SUCCESS: 'ADD_ITEM_SUCCESS',
  ADD_ITEM_FAILED: 'ADD_ITEM_FAILED',
  INCREASE_COUNT_SUCCESS: 'INCREASE_COUNT_SUCCESS',
  INCREASE_COUNT_FAILED: 'INCREASE_COUNT_FAILED',
  DECREASE_COUNT_SUCCESS: 'DECREASE_COUNT_SUCCESS',
  DECREASE_COUNT_FAILED: 'DECREASE_COUNT_FAILED',
  DELETE_ITEM_SUCCESS: 'DELETE_ITEM_SUCCESS',
  DELETE_ITEM_FAILED: 'DELETE_ITEM_FAILED',
};

export const addToCart = (item) => (dispatch, getState) => {
  const cartArray = getState().cartLocal.items;
  const product = cartArray.find((product) => product.id == item.id);
  console.log(product);
  try {
    if (product) {
      dispatch({type: types.INCREASE_COUNT_SUCCESS});
    } else {
      dispatch({type: types.ADD_ITEM_SUCCESS, payload: item});
    }
  } catch (error) {
    console.log('err==>', error);
  }
};

export const increaseCount = () => {};

export const decreaseCount = () => {};

export const deleteItem = (itemId) => (dispatch, getState) => {
  const cartArray = getState().cartLocal.items;
  const newCartArray = cartArray.filter((item) => item.id != itemId);
  try {
    dispatch({type: types.DELETE_ITEM_SUCCESS, payload: newCartArray});
  } catch (error) {
    console.log('err delete==>', error);
  }
};

const initialState = {
  items: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.ADD_ITEM_SUCCESS:
      return {...state, items: [...state.items, payload]};
    case types.ADD_ITEM_FAILED:
      return {...state};
    case types.INCREASE_COUNT_SUCCESS:
      return {...state, payload};
    case types.INCREASE_COUNT_FAILED:
      return {...state};
    case types.DECREASE_COUNT_SUCCESS:
      return {...state, payload};
    case types.DECREASE_COUNT_FAILED:
      return {...state};
    case types.DELETE_ITEM_SUCCESS:
      return {...state, items: payload};
    case types.DELETE_ITEM_FAILED:
      return {...state};

    default:
      return state;
  }
};
