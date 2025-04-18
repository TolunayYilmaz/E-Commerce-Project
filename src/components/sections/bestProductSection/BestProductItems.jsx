import BestCardProductItems from "../../CardList/bestProuductList/BestProductCardItems.jsx";
import BestProductImg from "../../Image/BestProductImg.jsx";
import BestProductTopbar from "./BestProductTopBar.jsx";


export default function BestProductItems({ color, position,images,furnitureImg }) {
  return (
    <section >
      <div className="flex justify-center flex-col items-center  sm:hidden">
        <BestProductImg color={color}  image={furnitureImg}/>
        <BestProductTopbar />
        <BestCardProductItems images={images} />
      </div>
      <div
        className={`${
          position === "right" ? "flex-row-reverse" : ""
        } hidden sm:flex sm:w-[95%] md:w-[90%] lg:w-[87%] xl:w-[80%] 2xl:w-[75%] mx-auto gap-4 pb-20`}
      >
        <BestProductImg color={color} image={furnitureImg}/>

        <div className="  sm:w-3/5 md:w-2/3 flex flex-col gap-3 ">
          <BestProductTopbar />
          <BestCardProductItems images={images}/>
        </div>
      </div>
    </section>
  );
}
