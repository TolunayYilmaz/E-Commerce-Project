export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCTLIST = 'SET_PRODUCTLIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_FETCHSTATE = 'SET_FETCHSTATE';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTER= 'SET_FILTER';

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories,
  });
  
  export const setProductList = (productList) => ({
    type: SET_PRODUCTLIST,
    payload: productList,
  });
  
  export const setTotal = (total) => ({
    type: SET_TOTAL,
    payload: total,
  });
  
  export const setFetchState = (state) => ({
    type: SET_FETCHSTATE,
    payload: state,
  });
  
  export const setLimit = (limit) => ({
    type: SET_LIMIT,
    payload: limit,
  });
  
  export const setOffset = (offset) => ({
    type: SET_OFFSET,
    payload: offset,
  });
  
  export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
  });