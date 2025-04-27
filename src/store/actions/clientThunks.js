import axios from 'axios';
import { setRoles,setUser,setError, setAddressList } from "./clientAction.js"



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
      const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/roles");
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
      console.log("çalıştı adrres"+ response.data)
    } catch (err) {
     console.log("Adres listesi gelemedi.")
    }
  };
};