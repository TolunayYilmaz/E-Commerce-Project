import { setLoading } from "./clientAction";
import { setCategories, setFilter, setProductList, setTotal } from "./productAction";
import axios from "axios";

export const getCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      console.log("çalıştı kategori")
      const response = await axios.get(
        "https://e-commerce-m3d4.onrender.com/categories"
      );
      console.log(response.data);
      dispatch(setCategories(response.data));
    } catch (err) {
      console.log(err);
    }
    finally{
      dispatch(setLoading(false));
    }
  };
};

export const getProducts = (filter) => {
  return async (dispatch) => {
    try {
     
      dispatch(setLoading(true));
      const response = await axios.get(
       ` https://e-commerce-m3d4.onrender.com/products/?${filter}`
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


export const getCategoryProducts=(categoryId)=>{

  return async (dispatch) => {
    try {
      console.log("çalıştı kategoriden gelen product")
    

      const response = await axios.get(
       ` https://e-commerce-m3d4.onrender.com/products?category=${categoryId}`
      );
      console.log(response.data.products);
      dispatch(setProductList(response.data.products));
      dispatch(setTotal(response.data.total));
    } catch (err) {
      console.log(err);
    }
 
  
  };
}

export const getFilterProducts=(categoryId,filter)=>{

  return async (dispatch) => {
    try {
      console.log("filtre:"+ filter)
    
     
      const response = await axios.get(
       ` https://e-commerce-m3d4.onrender.com/products?category=${categoryId}${filter}`
      );
      console.log(response.data.products);
      dispatch(setProductList(response.data.products));
      dispatch(setTotal(response.data.total));
    } catch (err) {
      console.log(err);
    }
  
  };
}
