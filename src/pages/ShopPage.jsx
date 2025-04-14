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

import card from "../assets/images/card.jpg";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";

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
const cards=[card,card2,card3,card,card2]
  return (
    <main>
      <ShopHead cards={cards}/>
      <ShopMidProductsSection images={imgs} />
      <LogoCompaniesSection logos={logos} />
    </main>
  );
}
