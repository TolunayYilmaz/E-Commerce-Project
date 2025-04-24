import ShopHead from "../components/sections/shopTopSection/ShopHead.jsx";
import LogoCompaniesSection from "../components/sections/logoCompanySection/LogoCompaniesSection.jsx";
import ShopMidProductsSection from "../components/sections/shopMidSection/ShopMidProductsSection.jsx";
import logo1 from "../assets/logos/logo-1.png";
import logo2 from "../assets/logos/logo-2.png";
import logo3 from "../assets/logos/logo-3.png";
import logo4 from "../assets/logos/logo-4.png";
import logo5 from "../assets/logos/logo-5.png";
import logo6 from "../assets/logos/logo-6.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getCategoryProducts,
  getProducts,
} from "../store/actions/productThunks.js";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export default function ShopPage() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const products = useSelector((state) => state.product.productList);
  const filter = useSelector((state) => state.product.filter);
  const categories = useSelector((state) => state.product.categories);
  let isLoading = useSelector((state) => state.client.loading);
  useEffect(() => {
    dispatch(getCategories()); //useParams ile categoryId çektim onun için rooute parametre girdim.

    categoryId > 0
      ? dispatch(getCategoryProducts(categoryId))
      : dispatch(getProducts(""));
  }, [dispatch, categoryId]);

  const top5Categories = categories
    .sort((a, b) => b.rating - a.rating) // rating değerine göre büyükten küçüğe sırala
    .slice(0, 5); // İlk 5 öğeyi al


  return (
    <main>
      {isLoading ? (
        <div className="flex items-center justify-center">
          {" "}
          <CircularProgress size="150px" sx={{ color: "#23A6F0" }} />
        </div>
      ) : (
        <>
          {" "}
          <ShopHead cards={top5Categories} />
          <ShopMidProductsSection products={products} categoryId={categoryId} />
          <LogoCompaniesSection logos={logos} />
        </>
      )}
    </main>
  );
}
