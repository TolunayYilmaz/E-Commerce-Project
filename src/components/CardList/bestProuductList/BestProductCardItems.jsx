import BestProductCard from "../../Card/BestProductCard.jsx";


import { useHistoryHook } from "../../../hooks/useHistoryHook.jsx";
export default function BestCardProductItems({images}){
const goToPage = useHistoryHook();

    return (
      <div className="sm:w-[100%] ">
        <div className="hidden  sm:h-[700px] sm:overflow-x-hidden sm:justify-center sm:flex sm:gap-x-2 lg:justify-start md:gap-x-4 lg:gap-x-2 xl:gap-x-8  flex-row flex-wrap 2xl:gap-x-10 ">
          {images.map((item, index) => (
            <BestProductCard key={index} Image={item}  goToPage={()=>goToPage("/productDetail/"+index)}
/>
          ))}
        </div>
        <div className="pb-[200px]  sm:hidden flex flex-col gap-y-10">
          {images.slice(0, 3).map((item, index) => (
            <BestProductCard key={index} Image={item} goToPage={()=>goToPage("/productDetail/"+index)} />
          ))}
        </div>
      </div>
    );
}