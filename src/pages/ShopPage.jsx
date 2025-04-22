import ShopHead from "../components/sections/shopTopSection/ShopHead.jsx";
import LogoCompaniesSection from "../components/sections/logoCompanySection/LogoCompaniesSection.jsx";
import ShopMidProductsSection from "../components/sections/shopMidSection/ShopMidProductsSection.jsx";
import logo1 from "../assets/logos/logo-1.png";
import logo2 from "../assets/logos/logo-2.png";
import logo3 from "../assets/logos/logo-3.png";
import logo4 from "../assets/logos/logo-4.png";
import logo5 from "../assets/logos/logo-5.png";
import logo6 from "../assets/logos/logo-6.png";

import clothes from "../assets/images/clothes.jpg";
import clothes2 from "../assets/images/clothes2.jpg";
import clothes3 from "../assets/images/clothes3.jpg";
import clothes4 from "../assets/images/clothes4.jpg";

import { useSelector } from "react-redux";

export default function ShopPage() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const imgs = [
    clothes,
    clothes2,
    clothes3,
    clothes4,
    clothes,
    clothes2,
    clothes3,
    clothes4,
    clothes3,
    clothes,
    clothes3,
    clothes2,
  ];

const categories = useSelector((state) => state.product.categories);
const top5Categories = categories
  .sort((a, b) => b.rating - a.rating)  // rating değerine göre büyükten küçüğe sırala
  .slice(0, 5);  // İlk 5 öğeyi al
  return (
    <main>
      <ShopHead cards={top5Categories}/>
      <ShopMidProductsSection images={imgs} />
      <LogoCompaniesSection logos={logos} />
    </main>
  );
}
