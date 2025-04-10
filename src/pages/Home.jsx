import ShopCardItems from "../components/card/ShopCardItems.jsx";
import BestProductItems from "../layouts/BestProductItems.jsx";
import Header from "../layouts/Header.jsx";
import PopularProductItems from "../layouts/PopularProductItems.jsx";

import BestProductBotItems from "../layouts/BestProductBotItems.jsx";
import LogoItems from "../components/logoCompany/LogoItems.jsx";
import FeaturedProductItems from "../layouts/FeaturedProductItems.jsx";
import Footer from "../layouts/Footer.jsx";



export default function Home() {
  return (
    <main>
      <Header />
      <ShopCardItems />
      <BestProductItems color={"bg-yellow-500"}/>
      <PopularProductItems color={"bg-pink-100"}/>
      <BestProductItems color={"bg-blue-100"} position={"right"}/>
     
      <BestProductBotItems color={"bg-blue-100"}/>
      <LogoItems/>
      <FeaturedProductItems/>
      <Footer/>
    </main>
  );
}
