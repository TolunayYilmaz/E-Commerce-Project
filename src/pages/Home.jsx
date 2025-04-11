import ShopCardItems from "../components/card/ShopCardItems.jsx";
import BestProductItems from "../layouts/BestProductItems.jsx";
import Header from "../layouts/Header.jsx";
import PopularProductItems from "../layouts/PopularProductItems.jsx";
import BestProductBotItems from "../layouts/BestProductBotItems.jsx";
import LogoItems from "../components/logoCompany/LogoItems.jsx";
import FeaturedProductItems from "../layouts/FeaturedProductItems.jsx";
import Footer from "../layouts/Footer.jsx";
import PopularProductBotItems from "../layouts/PopularProductsBotItems.jsx";
import et from "../assets/images/et.jpg"
import elma from "../assets/images/elma.jpg"
import dondurma from "../assets/images/dondurma.png"





export default function Home() {
   const imagesBestTop = [et,dondurma,elma,et,dondurma,elma];
   const imagesBestBot = [elma,et,dondurma,elma,et,dondurma];
  return (
    <main>
      <Header />
      <ShopCardItems />
      <BestProductItems color={"bg-yellow-500"} images={imagesBestTop}/>
      <PopularProductItems color={"bg-pink-100"}/>
      <BestProductItems color={"bg-blue-100"} position={"right"} images={imagesBestBot}/>
      <PopularProductBotItems color={"bg-pink-200"} />
      <BestProductBotItems color={"bg-blue-100"}/>
      <LogoItems/>
      <FeaturedProductItems/>
      <Footer/>
    </main>
  );
}
