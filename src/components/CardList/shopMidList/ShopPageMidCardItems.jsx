import ShopMidPageCard from "../../Card/ShopMidPageCard";

export default function ShopPageMidCardItems({ images }) {
  return (
<div className="flex flex-col gap-5">
<div className="flex flex-col gap-3  items-center sm:pt-36  sm:flex-row sm:justify-between sm:w-[78%]  sm:mx-auto">
{images.slice(0,4).map((item,index) => (
        <ShopMidPageCard key={index} image={item} />
      ))}
    </div>
    <div className="hidden sm:flex flex-col gap-3  items-center sm:pt-36 sm:flex-row sm:justify-between sm:w-[78%]  sm:mx-auto">
    {images.slice(4,8).map((item,index) => (
        <ShopMidPageCard key={index} image={item} />
      ))}
    </div>
    <div className="hidden sm:flex flex-col gap-3  items-center sm:pt-36 sm:flex-row sm:justify-between sm:w-[78%]  sm:mx-auto">
      {images.slice(8,12).map((item,index) => (
        <ShopMidPageCard key={index} image={item} />
      ))}
    </div>
</div>

  );
}
