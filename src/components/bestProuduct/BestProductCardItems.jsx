import BestProductCard from "./BestProductCard";


export default function BestCardProductItems(){

    const images = ["images1", "images2", "images3", "images1", "images2", "images3"];

    return (
      <div className="sm:w-[100%] ">
        <div className="hidden sm:flex flex-row flex-wrap gap-x-10 ">
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