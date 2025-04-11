import BestProductCard from "./BestProductCard";


export default function BestCardProductItems(){

    const images = ["images1", "images2", "images3", "images1", "images2", "images3"];

    return (
      <div className="sm:w-[100%] ">
        <div className="hidden  sm:h-[700px] sm:overflow-x-hidden sm:justify-center sm:flex sm:gap-x-2 lg:justify-start md:gap-x-4 lg:gap-x-2 xl:gap-x-8  flex-row flex-wrap 2xl:gap-x-10 ">
          {images.map((item, index) => (
            <BestProductCard key={index} ImagePath={item} />
          ))}
        </div>
        <div className="pb-[250px]  sm:hidden flex flex-col gap-y-10">
          {images.slice(0, 3).map((item, index) => (
            <BestProductCard key={index} ImagePath={item} />
          ))}
        </div>
      </div>
    );
}