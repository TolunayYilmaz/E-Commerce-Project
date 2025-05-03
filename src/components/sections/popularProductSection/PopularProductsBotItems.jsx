import PopularProductImg from "../../Image/PopularProductImg.jsx";
import PopularProductCard from "../../Card/PopularProductCard.jsx";
import PopularProductCardSummary from "../../Card/PopularProductCardSummary.jsx";


import { useHistoryHook } from "../../../hooks/useHistoryHook.jsx";

export default function PopularProductBotItems({ color,image,mostProduct }) {
  const goToPage = useHistoryHook();

  const imageUrl = mostProduct?.images?.[0]?.url;
  return (
    <section className="sm:w-[75vw] sm:mx-auto sm:flex sm:flex-row-reverse  sm:mb-20">
      
        <PopularProductImg color={color} image={image} />
        <div className="sm:hidden">
         <PopularProductCardSummary image={imageUrl} mostProduct={mostProduct} goToPage={() => goToPage("/shop/kadin/tişört/1/beyaz-percent100-pamuk/"+ mostProduct?.id || 1)}/>
        </div>
        <div className="hidden sm:block">
        <PopularProductCard image={imageUrl} mostProduct={mostProduct} goToPage={() => goToPage("/shop/kadin/tişört/1/beyaz-percent100-pamuk/"+ mostProduct?.id || 1)}/>
        </div>
    
    </section>
  );
}
