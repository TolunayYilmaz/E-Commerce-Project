import axios from "axios";
import {
  setRoles,
  setUser,
  setError,
  setAddressList,
  updateAddressList,
  deleteAddressList,
  deleteCard,
  updateCard,
  setCreditCards,
  setOrder,
} from "./clientAction.js";

// Thunk: sadece roles boşsa API'den çek
export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const roles = state.client.roles;

    if (roles && roles.length > 0) {
      // zaten roles varsa, fetch etme
      return;
    }

    try {
      const response = await axios.get(
        "https://workintech-fe-ecommerce.onrender.com/roles"
      );
      dispatch(setRoles(response.data));
    } catch (err) {
      console.error("Rol verileri alınamadı:", err);
    }
  };
};

export const userLogin = (loginData, rememberMe) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/login",
        loginData
      );

      const { token } = response.data;

      axios.defaults.headers.common["Authorization"] = token;

      if (rememberMe) {
        localStorage.setItem("token", token);
      }

      dispatch(setUser(response.data));
      dispatch(setError(null));
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Bilinmeyen bir hata oluştu.";
      dispatch(setError(errorMessage));
    }
  };
};

export const verifyToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios.defaults.headers.common["Authorization"] = token;

    try {
      const response = await axios.get(
        "https://workintech-fe-ecommerce.onrender.com/verify"
      );

      dispatch(setUser(response.data));
      localStorage.setItem("token", token); // opsiyonel: token yenilemek istersen
    } catch (err) {
      dispatch(logout());
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(setUser({}));
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  };
};

export const getAddressList = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios.defaults.headers.common["Authorization"] = token;

    try {
      const response = await axios.get(
        "https://workintech-fe-ecommerce.onrender.com/user/address"
      );

      dispatch(setAddressList(response.data));
 
      console.log("çalıştı adrres" + response.data);
    } catch (err) {
      console.log("Adres listesi gelemedi.");
    }
  };
};

export const addAddress = (data) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return;

    axios.defaults.headers.common["Authorization"] = token;

    try {
      const response = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/user/address",
        data
      );

      dispatch(setAddressList(data));
    } catch (err) {
      console.log("Adres listesi eklenmedi.", err);
    }
  };
};

export const updateAddress = (data) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return;

    axios.defaults.headers.common["Authorization"] = token;

    try {
      const response = await axios.put(
        "https://workintech-fe-ecommerce.onrender.com/user/address",
        data
      );

      dispatch(updateAddressList(data));
    } catch (err) {
      console.log("listegüncel değil", err);
    }
  };
};
export const deleteAddress = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return;

    axios.defaults.headers.common["Authorization"] = token;

    try {
      const response = await axios.delete(
        `https://workintech-fe-ecommerce.onrender.com/user/address/${id}`
      );

      dispatch(deleteAddressList(id));
    } catch (err) {
      console.log("listegüncel değil", err);
    }
  };
};


export const getCardList = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios.defaults.headers.common["Authorization"] = token;

    try {
      const response = await axios.get(
        "https://workintech-fe-ecommerce.onrender.com/user/card"
      );

      dispatch(setCreditCards(response.data));
 
      console.log("çalıştı adrres" + response.data);
    } catch (err) {
      console.log("Adres listesi gelemedi.");
    }
  };
};
export const addCard = (data) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return;

    axios.defaults.headers.common["Authorization"] = token;

    try {
      const response = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/user/card",
        data
      );

      dispatch(setCreditCards(data));
    } catch (err) {
      console.log("Adres listesi eklenmedi.", err);
    }
  };
};
export const deleteCardItem = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return;

    axios.defaults.headers.common["Authorization"] = token;

    try {
      const response = await axios.delete(
        `https://workintech-fe-ecommerce.onrender.com/user/card/${id}`
      );

      dispatch(deleteCard(id));
    } catch (err) {
      console.log("listegüncel değil", err);
    }
  };
};

export const updateCardItem = (data) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return;

    axios.defaults.headers.common["Authorization"] = token;

    try {
      const response = await axios.put(
        "https://workintech-fe-ecommerce.onrender.com/user/card",
        data
      );

      dispatch(updateCard(data));
    } catch (err) {
      console.log("listegüncel değil", err);
    }
  };
};

export const getOrders = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios.defaults.headers.common["Authorization"] = token;

    try {
      const response = await axios.get(
        "https://workintech-fe-ecommerce.onrender.com/order"
      );

      dispatch(setOrder(response.data));
 
      console.log("çalıştı adrres" + response.data);
    } catch (err) {
      console.log("Adres listesi gelemedi.");
    }
  };
};
export const addOrder = (data) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return;

    axios.defaults.headers.common["Authorization"] = token;

    try {
      const response = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/order",
        data
      );

      dispatch(setOrder(data));
    } catch (err) {
      console.log("Adres listesi eklenmedi.", err);
    }
  };
};