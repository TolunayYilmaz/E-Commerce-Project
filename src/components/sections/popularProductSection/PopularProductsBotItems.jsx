import PopularProductImg from "../../Image/PopularProductImg.jsx";
import PopularProductCard from "../../Card/PopularProductCard.jsx";
import PopularProductCardSummary from "../../Card/PopularProductCardSummary.jsx";


import { useHistoryHook } from "../../../hooks/useHistoryHook.jsx";

export default function PopularProductBotItems({ color,image,cardImage }) {
  const goToPage = useHistoryHook();
  return (
    <section className="sm:w-[75vw] sm:mx-auto sm:flex sm:flex-row-reverse  sm:mb-20">
      
        <PopularProductImg color={color} image={image} />
        <div className="sm:hidden">
         <PopularProductCardSummary image={cardImage} goToPage={()=>goToPage("/productDetail/"+2)}/>
        </div>
        <div className="hidden sm:block">
        <PopularProductCard image={cardImage} goToPage={()=>goToPage("/productDetail/"+2)}/>
        </div>
    
    </section>
  );
}
