import PopularProductImg from "../components/popularProduct/PopularProductImg";
import PopularProductCard from "../components/popularProduct/PopularProductCard";
import PopularProductCardSummary from "../components/popularProduct/PopularProductCardSummary";



export default function PopularProductBotItems({ color }) {
  return (
    <div className="sm:w-[75vw] sm:mx-auto sm:flex sm:flex-row  sm:mb-20">
      
        <PopularProductImg color={color} />
        <div className="sm:hidden">
         <PopularProductCardSummary/>
        </div>
        <div className="hidden sm:block">
        <PopularProductCard />
        </div>
    
    </div>
  );
}
