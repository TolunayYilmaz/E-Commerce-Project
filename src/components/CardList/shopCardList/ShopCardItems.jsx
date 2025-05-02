import ShopCard from "../../Card/ShopCard"
import dondurma from "../../../../public/assets/category-img/category_erkek_tişört.jpg";
import et from "../../../../public/assets/category-img/category_kadın_tişört.jpg";
import elma from "../../../../public/assets/category-img/category_kadın_elbise.jpg";

import { useHistoryHook } from "../../../hooks/useHistoryHook.jsx";

export default function ShopCardItems() {
  const goToPage = useHistoryHook();
  const cards = [
    {
      headText: "Your Space",
      midTextFirst: "Uniqie",
      midTextSec: "Life",
      botText: "Explore Items",
      img: dondurma,
    },
    {
      headText: "Ends Today",
      midTextFirst: "Elements",
      midTextSec: "Style",
      botText: "Explore Items",
      img: elma,
    },
    {
      headText: "Ends Today",
      midTextFirst: "Elements",
      midTextSec: "Style",
      botText: "Explore Items",
      img: et,
    },
  ];

  return (
    <div className="bg-[#FAFAFA] flex flex-col items-center py-20 gap-[10px]  sm:flex-wrap  sm:justify-center md:flex-row sm:gap-[5vh] 2xl:gap-[24vh]">
   {cards.map((item, index) => {
        if (index === 0) {
          return (
            <ShopCard
              borderRight={true}
              key={index}
              midTextFirst={item.midTextFirst}
              headText={item.headText}
              midTextSec={item.midTextSec}
              botText={item.botText}
              imgSrc={item.img}
              goToPage={()=>goToPage("/productDetail/"+index)}
            />
          );
        }
        return (
          <ShopCard
            key={index}
            midTextFirst={item.midTextFirst}
            headText={item.headText}
            midTextSec={item.midTextSec}
            botText={item.botText}
            imgSrc={item.img}
            goToPage={()=>goToPage("/productDetail/"+index)}
          />
        );
      })}
    </div>
  );
}
