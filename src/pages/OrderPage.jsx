import logo1 from "../assets/logos/logo-1.png";
import logo2 from "../assets/logos/logo-2.png";
import logo3 from "../assets/logos/logo-3.png";
import logo4 from "../assets/logos/logo-4.png";
import logo5 from "../assets/logos/logo-5.png";
import logo6 from "../assets/logos/logo-6.png";
import HeaderContentBlock from "../components/sections/headerSection/HeaderContentBlock";
import LogoCompaniesSection from "../components/sections/logoCompanySection/LogoCompaniesSection";
import OrderSection from "../components/sections/orderSection/OrderSection";
export default function OrderPage() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  return (
    <main>
       <HeaderContentBlock pageName={"Order"} />
       <OrderSection/>
      <LogoCompaniesSection logos={logos} />
    </main>
  );
}
