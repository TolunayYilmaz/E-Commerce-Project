import {
  SET_CART,
  SET_ADDRESS,
  SET_PAYMENT,
} from "../actions/shoppingCartAction";
const shoppingCartInitialState = {
  catregories: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = shoppingCartInitialState, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, catregories: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };

    case SET_PAYMENT:
      return { ...state, payment: action.payload };

    default:
      return state;
  }
};

export default shoppingCartReducer;
