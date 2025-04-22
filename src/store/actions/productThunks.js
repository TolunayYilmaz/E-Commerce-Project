import { setCategories } from "./productAction";
import axios from "axios";

export const getCategories = () => {
  return async (dispatch) => {
    try {
      console.log("çalıştı kategori")
      const response = await axios.get(
        "https://e-commerce-m3d4.onrender.com/categories"
      );
      console.log(response.data);
      dispatch(setCategories(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};
