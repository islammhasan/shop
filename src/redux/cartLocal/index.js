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
  try {
    dispatch({type: types.ADD_ITEM_SUCCESS, payload: item});
  } catch (error) {
    console.log('err==>', error);
  }
};

export const increaseCount = (item) => (dispatch, getState) => {
  console.warn('item', item);
  try {
    dispatch({type: types.INCREASE_COUNT_SUCCESS, payload: item});
  } catch (error) {
    console.log('err==>', error);
  }
};

export const decreaseCount = (item) => (dispatch, getState) => {
  console.warn('item', item);
  try {
    dispatch({type: types.DECREASE_COUNT_SUCCESS, payload: item});
  } catch (error) {
    console.log('err==>', error);
  }
};

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
      // Check if Item is in cart already
      const inCart = state.items.find((item) => item.id == payload.id)
        ? true
        : false;
      return {
        ...state,
        items: inCart
          ? state.items.map((item) =>
              item.id == payload.id ? {...item, qty: item.qty + 1} : item,
            )
          : [...state.items, {...payload, qty: 1}],
      };

    case types.ADD_ITEM_FAILED:
      return {...state};
    case types.INCREASE_COUNT_FAILED:
      return {...state};
    case types.INCREASE_COUNT_SUCCESS:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id == payload.id ? {...item, qty: item.qty + 1} : item,
        ),
      };
    case types.DECREASE_COUNT_SUCCESS:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id == payload.id ? {...item, qty: item.qty - 1} : item,
        ),
      };
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
