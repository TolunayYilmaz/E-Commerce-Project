import { setLoading } from "./clientAction";
import { setCategories, setProductList, setTotal } from "./productAction";
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

export const getProducts = () => {
  return async (dispatch) => {
    try {
      console.log("çalıştı kategori")
      dispatch(setLoading(true));
      const response = await axios.get(
        "https://e-commerce-m3d4.onrender.com/products"
      );
      console.log(response.data.products);
      dispatch(setProductList(response.data.products));
      dispatch(setTotal(response.data.total));
    } catch (err) {
      console.log(err);
    }
    finally{
      dispatch(setLoading(false));
    }
  };
};

