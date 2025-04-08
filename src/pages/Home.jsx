import ShopCardItems from "../components/card/ShopCardItems.jsx";
import BestProductItems from "../layouts/BestProductItems.jsx";
import Header from "../layouts/Header.jsx";
import PopularProductItems from "../layouts/PopularProductItems.jsx";
import PopularProductItem from "../layouts/PopularProductItem.jsx";
import BestProductBotItems from "../layouts/BestProductBotItems.jsx";
import LogoItems from "../components/logoCompany/logoItems.jsx";


export default function Home() {
  return (
    <main>
      <Header />
      <ShopCardItems />
      <BestProductItems color={"bg-yellow-500"}/>
      <PopularProductItems color={"bg-pink-100"}/>
      <BestProductItems color={"bg-blue-100"}/>
      <PopularProductItem color={"bg-red-400"}/>
      <BestProductBotItems color={"bg-blue-100"}/>
      <LogoItems/>
    </main>
  );
}
