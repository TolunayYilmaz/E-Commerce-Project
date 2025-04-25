import {
  SET_CART,
  SET_ADDRESS,
  SET_PAYMENT,
} from "../actions/shoppingCartAction";
const shoppingCartInitialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = shoppingCartInitialState, action) => {
  switch (action.type) {
    case SET_CART:
      const updatedCart = state.cart?.map((item) => {
        if (item.product.id === action.payload.id) {
          // Eğer ürün zaten sepette varsa, count değerini arttır
          return { ...item, count: item.count + 1 };
        }
        return item; // Diğer ürünleri olduğu gibi bırak
      });
    
      // Eğer ürün sepette yoksa, yeni bir ürün ekle
      if (!updatedCart.some(item => item.product.id === action.payload.id)) {
        updatedCart.push({ count: 1, product: action.payload }); // action.payload'ı product olarak ekle
      }
    
      return { ...state, cart: updatedCart };
    case SET_ADDRESS:
      return { ...state, address: action.payload };

    case SET_PAYMENT:
      return { ...state, payment: action.payload };

    default:
      return state;
  }
};

export default shoppingCartReducer;
