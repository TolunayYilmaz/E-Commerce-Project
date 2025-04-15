import BestProductBotCard from "../../Card/BestProductBotCard.jsx";
import { useHistoryHook } from "../../../hooks/useHistoryHook.jsx";
export default function BestProductBotCardItems({images,shadow,cardbg,count}) {
  const goToPage = useHistoryHook();
  return (


    <div className="pb-[125px]  flex flex-col gap-y-10 sm:gap-y-8 sm:w-full sm:flex-row sm:flex-wrap md:grid md:grid-cols-2 md:gap-x-60  lg:gap-x-24 lg:grid-cols-3 xl:grid-cols-4 justify-between xl:gap-x-10 2xl:gap-x-40" >
      {images.slice(0,count).map((item, index) => (
        <BestProductBotCard key={index} image={item} shadow={shadow}  cardbg={cardbg} goToPage={()=>goToPage("/productDetail/"+index)}/>
      ))}
    </div>
  );
}
