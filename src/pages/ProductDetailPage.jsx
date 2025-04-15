import ProductDetailSection from "../components/sections/productDetailTopSection/ProductDetailSection";
import LogoCompaniesSection from "../components/sections/logoCompanySection/LogoCompaniesSection.jsx";
import BestProductBotItems from "../components/sections/bestProductSection/BestProductBotItems.jsx";

import logo1 from "../assets/logos/logo-1.png";
import logo2 from "../assets/logos/logo-2.png";
import logo3 from "../assets/logos/logo-3.png";
import logo4 from "../assets/logos/logo-4.png";
import logo5 from "../assets/logos/logo-5.png";
import logo6 from "../assets/logos/logo-6.png";
import ProductDescriptionSection from "../components/sections/productDetailMidSection/ProductDescriptionSection.jsx";

import best1 from "../assets/images/best1.png";
import best2 from "../assets/images/best2.jpg";
import best3 from "../assets/images/best3.jpg";
import best4 from "../assets/images/best4.jpg";

export default function ProductDetailPage() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const bestProductBotItems = [
    best1,
    best2,
    best3,
    best4,
    best1,
    best2,
    best3,
    best4,
  ];

  return (
    <main>
      <ProductDetailSection />
      <ProductDescriptionSection />
      
      <div className="sm:hidden">
        <BestProductBotItems
          color={"bg-blue-100"}
          images={bestProductBotItems}
          cardBg={"bg-white"}
          shadow={"shadow-sm"}
          count={4}
        />
      </div>
      <div className="hidden sm:block">
        <BestProductBotItems
          color={"bg-blue-100"}
          images={bestProductBotItems}
          cardBg={"bg-white"}
          shadow={"shadow-sm"}
          count={8}
        />
      </div>
      <LogoCompaniesSection logos={logos} />
    </main>
  );
}
