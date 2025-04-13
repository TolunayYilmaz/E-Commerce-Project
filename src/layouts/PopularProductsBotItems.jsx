import PopularProductImg from "../components/popularProduct/PopularProductImg";
import PopularProductCard from "../components/popularProduct/PopularProductCard";
import PopularProductCardSummary from "../components/popularProduct/PopularProductCardSummary";



export default function PopularProductBotItems({ color,image,cardImage }) {
  return (
    <div className="sm:w-[75vw] sm:mx-auto sm:flex sm:flex-row-reverse  sm:mb-20">
      
        <PopularProductImg color={color} image={image} />
        <div className="sm:hidden">
         <PopularProductCardSummary image={cardImage}/>
        </div>
        <div className="hidden sm:block">
        <PopularProductCard image={cardImage}/>
        </div>
    
    </div>
  );
}
