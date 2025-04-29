import AddressSection from "../components/sections/adressSection/AddressSection";
import best1 from "../assets/images/best1.png";
import best2 from "../assets/images/best2.jpg";
import best3 from "../assets/images/best3.jpg";
import best4 from "../assets/images/best4.jpg";

import BestProductBotItems from "../components/sections/bestProductSection/BestProductBotItems";
import HeaderContentBlock from "../components/sections/headerSection/HeaderContentBlock";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPayment } from "../store/actions/shoppingCartAction";

export default function AddressPage() {
  const bestProductBotItems = [best1, best2, best3, best4];
  const creditCardList = useSelector((state) => state.client.creditCards);
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(setPayment(creditCardList[0]));
  }, []);
  return (
    <main className="relative">
      <HeaderContentBlock pageName={"Address"} />
      <AddressSection />
      <BestProductBotItems color={"bg-blue-100"} images={bestProductBotItems} />
    </main>
  );
}
