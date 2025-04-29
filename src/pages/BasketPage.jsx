import { useEffect } from "react";
import best1 from "../assets/images/best1.png";
import best2 from "../assets/images/best2.jpg";
import best3 from "../assets/images/best3.jpg";
import best4 from "../assets/images/best4.jpg";
import BasketSection from "../components/sections/basketSection/BasketSection";
import BestProductBotItems from "../components/sections/bestProductSection/BestProductBotItems";
import HeaderContentBlock from "../components/sections/headerSection/HeaderContentBlock";
import { useDispatch } from "react-redux";
import { getAddressList, getCardList } from "../store/actions/clientThunks";
export default function BasketPage() {
  const bestProductBotItems = [best1, best2, best3, best4];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAddressList());
    dispatch(getCardList());
  }, [dispatch]);
  return (
    <main>
      <HeaderContentBlock pageName={"Basket"} />
      <BasketSection />
      <BestProductBotItems color={"bg-blue-100"} images={bestProductBotItems} />
    </main>
  );
}
