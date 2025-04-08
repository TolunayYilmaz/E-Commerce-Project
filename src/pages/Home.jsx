import ShopCardItems from "../components/card/ShopCardItems.jsx";
import BestProductItems from "../layouts/BestProductItems.jsx";
import Header from "../layouts/Header.jsx";
import PopularProductItems from "../layouts/PopularProductItems.jsx";


export default function Home() {
  return (
    <main>
      <Header />
      <ShopCardItems />
      <BestProductItems color={"bg-yellow-500"}/>
      <PopularProductItems/>
      <BestProductItems color={"bg-blue-100"}/>
    </main>
  );
}
