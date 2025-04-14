
import BestProductItems from "../components/sections/bestProductSection/BestProductItems.jsx"
import PopularProductItems from "../components/sections/popularProductSection/PopularProductItems.jsx"
import BestProductBotItems from "../components/sections/bestProductSection/BestProductBotItems.jsx"
import LogoCompaniesSection from "../components/sections/logoCompanySection/LogoCompaniesSection.jsx"
import FeaturedProductItems from "../components/sections/featuredProductSection/FeaturedProductItems.jsx";
import PopularProductBotItems from "../components/sections/popularProductSection/PopularProductsBotItems.jsx";
import CarouselsTop from "../components/sections/CarouselSection/CaroulselsTop.jsx"

import et from "../assets/images/et.jpg"
import elma from "../assets/images/elma.jpg"
import dondurma from "../assets/images/dondurma.png"
import best from "../assets/images/best.jpg"
import bestBot from "../assets/images/bestBot.jpg"
import street from "../assets/images/street.jpg"
import umbrella from "../assets/images/umbrella.jpg"
import car from "../assets/images/car.jpg"
import logo1 from "../assets/logos/logo-1.png"
import logo2 from "../assets/logos/logo-2.png"
import logo3 from "../assets/logos/logo-3.png"
import logo4 from "../assets/logos/logo-4.png"
import logo5 from "../assets/logos/logo-5.png"
import logo6 from "../assets/logos/logo-6.png"
import popular from "../assets/images/popular.jpg"
import popular2 from "../assets/images/popular-2.jpg"
import meat from "../assets/images/mostPopularMeat.jpg"
import casheaw from "../assets/images/mostPopularCashew.jpg"
import best1 from "../assets/images/best1.png"
import best2 from "../assets/images/best2.jpg"
import best3 from "../assets/images/best3.jpg"
import best4 from "../assets/images/best4.jpg"



export default function Home() {
   const imagesBestTop = [et,dondurma,elma,et,dondurma,elma];
   const imagesBestBot = [elma,et,dondurma,elma,et,dondurma];
   const featureItems=[street,umbrella,car]
   const logos=[logo1,logo2,logo3,logo4,logo5,logo6]
   const bestProductBotItems=[best1,best2,best3,best4]
  return (
    <main>
      <CarouselsTop/>
  
      <BestProductItems color={"bg-yellow-500"} images={imagesBestTop} furnitureImg={best}/>
      <PopularProductItems color={"bg-pink-100"} image={popular} cardImage={meat}/>
      <BestProductItems color={"bg-blue-100"} position={"right"} images={imagesBestBot} furnitureImg={bestBot}/>
      <PopularProductBotItems color={"bg-pink-200"} image={popular2}  cardImage={casheaw}/>
      <BestProductBotItems color={"bg-blue-100"} images={bestProductBotItems}/>
      <LogoCompaniesSection logos={logos}/>
      <FeaturedProductItems images={featureItems}/>
    </main>
  );
}
