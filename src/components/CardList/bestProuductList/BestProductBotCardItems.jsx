import BestProductBotCard from "../../Card/BestProductBotCard.jsx";
import { useHistoryHook } from "../../../hooks/useHistoryHook.jsx";
export default function BestProductBotCardItems({products,shadow,cardbg,count}) {
  const goToPage = useHistoryHook();

  return (

  
    <div className="pb-[125px]  flex flex-col gap-y-10 sm:gap-y-8 sm:w-full sm:flex-row sm:flex-wrap md:grid md:grid-cols-2 md:gap-x-60  lg:gap-x-24 lg:grid-cols-3 xl:grid-cols-4 justify-between xl:gap-x-10 2xl:gap-x-40" >
      {products?.slice(0,count).map((item, index) => (
        <BestProductBotCard key={item.key} image={item.images[0]?.url} shadow={shadow} product={item}  cardbg={cardbg}  goToPage={() => goToPage("/shop/kadin/tişört/1/beyaz-percent100-pamuk/"+ item?.id || 1)}/>
      ))}
    </div>
  );
}
