import ShopCard from "../../Card/ShopCard"
import dondurma from "../../../assets/images/dondurma.png";
import et from "../../../assets/images/et.jpg";
import elma from "../../../assets/images/elma.jpg";

export default function ShopCardItems() {
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
          />
        );
      })}
    </div>
  );
}
