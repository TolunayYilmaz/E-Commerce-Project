import axios from 'axios';

export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ADDRESS_LIST = 'SET_ADDRESS_LIST';
export const SET_CREDIT_CARDS = 'SET_CREDIT_CARDS';

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
  });
  
  export const setRoles = (roles) => ({
    type: SET_ROLES,
    payload: roles,
  });
  
  export const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme,
  });
  
  export const setLanguage = (language) => ({
    type: SET_LANGUAGE,
    payload: language,
  });
  
  export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: loading,
  });
  
  export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
  });
  
  export const setAddressList = (addressList) => ({
    type: SET_ADDRESS_LIST,
    payload: addressList,
  });
  
  export const setCreditCards = (creditCards) => ({
    type: SET_CREDIT_CARDS,
    payload: creditCards,
  });