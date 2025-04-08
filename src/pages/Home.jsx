import ShopCardItems from "../components/card/ShopCardItems.jsx";
import BestProductItems from "../layouts/BestProductItems.jsx";
import Header from "../layouts/Header.jsx";

export default function Home() {
  return (
    <main>
      <Header />
      <ShopCardItems />
      <BestProductItems/>
    </main>
  );
}
