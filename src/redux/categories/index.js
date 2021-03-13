import axios from 'axios';

export const getParentCats = async () => {
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

export const getChildrenCats = async (catID) => {
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

export const getParentCatsProducts = async (catID) => {
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

export const getChildrenCatsProducts = async (catID) => {
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
