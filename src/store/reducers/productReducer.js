import {
  SET_CATEGORIES,
  SET_FETCHSTATE,
  SET_PRODUCTLIST,
  SET_TOTAL,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER

} from "../actions/productAction";

const productInitialState = {
  categories: [],
  productList: [{}],
  total: 0,
  limit: 25,
  offset: 0,
  filter: "",
  fetchState: "NOT_FETCHED",
};

const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };

    case SET_PRODUCTLIST:
      return { ...state, productList: action.payload };

    case SET_TOTAL:
      return { ...state, total: action.payload };

    case SET_LIMIT:
      return { ...state, limit: action.payload };

    case SET_OFFSET:
      return { ...state, offset: action.payload };

    case SET_FILTER:
      return { ...state, filter: action.payload };

    case SET_FETCHSTATE:
      return { ...state, fetchState: action.payload };

    default:
      return state;
  }
};

export default productReducer;
