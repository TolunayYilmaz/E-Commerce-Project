import {
  SET_CART,
  SET_ADDRESS,
  SET_PAYMENT,
  DELETE_ALL,
} from "../actions/shoppingCartAction";
const shoppingCartInitialState = {
  cart: [],
  payment: {},
  address: {},
  totalAmount: 0,
  cargoAmount: 0,
  cargoFreeAmount: 4.99,
};

const shoppingCartReducer = (state = shoppingCartInitialState, action) => {
  switch (action.type) {
    case SET_CART:
      let cargo=4.99;
      const cargoFree=4.99;
      let updatedCart = state.cart?.map((item) => {
        if (item.product.id === action.payload.product.id) {
          // Ürün varsa count'ı ve checked bilgisini güncelle
          return { ...item, checked: action.payload.checked, count: item.count + action.payload.count };
        }
        return item;
      });
    
      // Count'ı 0 veya daha az olan ürünleri sepetten çıkar
      updatedCart = updatedCart.filter(item => item.count > 0);
    
      // Eğer ürün sepette yoksa yeni ürün ekle
      const productExists = updatedCart.some(item => item.product.id === action.payload.product.id);
    
      if (!productExists && action.payload.count > 0) {
        updatedCart.push({ checked: true, count: action.payload.count, product: action.payload.product });
      }
    
      // !!! Burada toplam fiyatı hesaplıyoruz !!!
      const totalAmount = updatedCart
        .filter(item => item.checked) // sadece checked olanlar
        .reduce((sum, item) => sum + item.product.price * item.count, 0);
        cargo = totalAmount === 0 ? 0 : totalAmount >= 159 ? cargo - cargoFree : 4.99;
      return {
        ...state,
        cart: updatedCart,
        cargoAmount:cargo,
        cargoFreeAmount:cargoFree,
        totalAmount: totalAmount+cargo,
      };
    
    case SET_ADDRESS:
      return { ...state, address: action.payload };

    case SET_PAYMENT:
      return { ...state, payment: action.payload };
      case DELETE_ALL:
        return {
          ...shoppingCartInitialState,
        };

    default:
      return state;
  }
};

export default shoppingCartReducer;
