import ShopMidPageCard from "../../Card/ShopMidPageCard";
import { useHistoryHook } from "../../../hooks/useHistoryHook.jsx";
export default function ShopPageMidCardItems({ images }) {
  const goToPage = useHistoryHook();
  return (
    <div className="mx-auto">
      <div className="hidden sm:pt-40 sm:grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 sm:gap-y-36 md:w-full max-w-screen-xl sm:px-4">
        {images.map((item, index) => (
          <ShopMidPageCard key={index} image={item} goToPage={()=>goToPage("/productDetail/"+index)}/>
        ))}
      </div>
      <div className="flex flex-col gap-3  items-center sm:hidden">
        {images.slice(0, 4).map((item, index) => (
          <ShopMidPageCard key={index} image={item} goToPage={()=>goToPage("/productDetail/"+index)}/>
        ))}
      </div>
    </div>
  );
}
