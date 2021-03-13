import axios from 'axios';

export const getParentCats = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      'http://www.rncourseproject.com/app/category/get-parents',
    );
    console.log('parentCats==>', response.data);
    return response.data;
  } catch (error) {
    console.log('err==>', error);
  }
};

export const getChildrenCats = (catID) => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `http://www.rncourseproject.com/app/category/get-children/${catID}`,
    );
    console.log('childrenCats==>', response.data);
    return response.data;
  } catch (error) {
    console.log('err==>', error);
  }
};

export const getParentCatsProducts = (catID) => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `http://www.rncourseproject.com/app/product/parent-category?id=${catID}&page=1`,
    );
    console.log('parentProducts==>', response.data);
    return response.data;
  } catch (error) {
    console.log('err==>', error);
  }
};

export const getChildrenCatsProducts = (catID) => async (
  dispatch,
  getState,
) => {
  try {
    const response = await axios.get(
      `http://www.rncourseproject.com/app/product/category?id=${catID}&page=1`,
    );
    console.log('childrenProducts==>', response.data);
    return response.data;
  } catch (error) {
    console.log('err==>', error);
  }
};

export default (state, action) => {};
