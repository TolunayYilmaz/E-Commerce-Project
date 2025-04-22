import ShopHead from "../components/sections/shopTopSection/ShopHead.jsx";
import LogoCompaniesSection from "../components/sections/logoCompanySection/LogoCompaniesSection.jsx";
import ShopMidProductsSection from "../components/sections/shopMidSection/ShopMidProductsSection.jsx";
import logo1 from "../assets/logos/logo-1.png";
import logo2 from "../assets/logos/logo-2.png";
import logo3 from "../assets/logos/logo-3.png";
import logo4 from "../assets/logos/logo-4.png";
import logo5 from "../assets/logos/logo-5.png";
import logo6 from "../assets/logos/logo-6.png";
import {  useSelector } from "react-redux";


export default function ShopPage() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const products = useSelector((state) => state.product.productList);
 
  const categories = useSelector((state) => state.product.categories);

  const top5Categories = categories
    .sort((a, b) => b.rating - a.rating) // rating değerine göre büyükten küçüğe sırala
    .slice(0, 5); // İlk 5 öğeyi al
  return (
    <main>
      <ShopHead cards={top5Categories} />
      <ShopMidProductsSection products={products} />
      <LogoCompaniesSection logos={logos} />
    </main>
  );
}
