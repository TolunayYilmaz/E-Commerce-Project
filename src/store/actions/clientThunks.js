import axios from 'axios';
import { setRoles } from "./clientAction.js"

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
