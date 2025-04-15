import FeaturedProductCard from "../../Card/FeaturedProductCard.jsx"
import { useHistoryHook } from "../../../hooks/useHistoryHook.jsx";
export default function FeaturedProductCardItems({images}){
    const goToPage = useHistoryHook();
  
    return(<div className="flex flex-col gap-y-5 mx-auto justify-between sm:justify-center md:justify-center md:gap-x-16 lg:gap-x-0 lg:justify-between sm:flex-row sm:w-[75vw] sm:flex-wrap" >{
        images.map((item,index)=><FeaturedProductCard key={index}  image={item} goToPage={()=>goToPage("/productDetail/"+index)}/>)}</div>)
}