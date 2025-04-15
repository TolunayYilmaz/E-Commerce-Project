import ProductDetailSection from "../components/sections/productDetailTopSection/ProductDetailSection";
import LogoCompaniesSection from "../components/sections/logoCompanySection/LogoCompaniesSection.jsx"

import logo1 from "../assets/logos/logo-1.png"
import logo2 from "../assets/logos/logo-2.png"
import logo3 from "../assets/logos/logo-3.png"
import logo4 from "../assets/logos/logo-4.png"
import logo5 from "../assets/logos/logo-5.png"
import logo6 from "../assets/logos/logo-6.png"
import ProductDescriptionSection from "../components/sections/productDetailMidSection/ProductDescriptionSection.jsx";

export default function ProductDetailPage() {
 const logos=[logo1,logo2,logo3,logo4,logo5,logo6]

  return (
    <main>
     <ProductDetailSection/>
     <ProductDescriptionSection/>
     <LogoCompaniesSection logos={logos}/>
    </main>
  );
}
