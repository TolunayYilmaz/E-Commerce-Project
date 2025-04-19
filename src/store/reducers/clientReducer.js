import { SET_USER,SET_ROLES,SET_THEME,SET_LOADING,SET_LANGUAGE,SET_ADDRESS_LIST,SET_CREDIT_CARDS,SET_ERROR } from "../actions/clientAction";


const clientInitialState = {
    user: {},
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "light",
    language: "en",
    loading: false,
    error: null,
  };
  
  const clientReducer = (state = clientInitialState, action) => {
    switch (action.type) {
      case SET_USER:
        return { ...state, user: action.payload };
  
      case SET_ROLES:
        return { ...state, roles: action.payload };
  
      case SET_THEME:
        return { ...state, theme: action.payload };
  
      case SET_LANGUAGE:
        return { ...state, language: action.payload };
  
      case SET_LOADING:
        return { ...state, loading: action.payload };
  
      case SET_ERROR:
        return { ...state, error: action.payload };
  
      case SET_ADDRESS_LIST:
        return { ...state, addressList: action.payload };
  
      case SET_CREDIT_CARDS:
        return { ...state, creditCards: action.payload };
  
      default:
        return state;
    }
  };
  

  export default clientReducer;
  