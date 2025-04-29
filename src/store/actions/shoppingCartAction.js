
export const SET_CART = 'SET_CART';
export const SET_PAYMENT= 'SET_PAYMENT';
export const SET_ADDRESS = 'SET_ADDRESS';
export const DELETE_ALL = 'DELETE_ALL';

export const setCart = (cart) => ({
    type: SET_CART,
    payload: cart,
  });
  
  export const setPayment= (payment) => ({
    type: SET_PAYMENT,
    payload: payment,
  });
  
  export const setAddress= (address) => ({
    type: SET_ADDRESS,
    payload: address,
  });
  export const deleteAll= () => ({
    type: DELETE_ALL,

  });