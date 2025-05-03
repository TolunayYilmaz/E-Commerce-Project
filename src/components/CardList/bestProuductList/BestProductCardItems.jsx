import BestProductCard from "../../Card/BestProductCard.jsx";
import { useHistoryHook } from "../../../hooks/useHistoryHook.jsx";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
export default function BestCardProductItems({ images }) {
  const products = useSelector((state) => state.product.productList);
  const goToPage = useHistoryHook();
  let isLoading = useSelector((state) => state.client.loading);
  return(
   isLoading? (
    <div className="flex items-center justify-center w-full h-[75vh]">
      <CircularProgress size="100px" sx={{ color: "#23A6F0" }} />
    </div>
  ) : (
    <div className="sm:w-[100%] ">
      <div className="hidden  sm:h-[750px] sm:overflow-x-hidden sm:justify-center sm:flex sm:gap-x-2 lg:justify-start md:gap-x-4 lg:gap-x-2 xl:gap-x-8  flex-row flex-wrap 2xl:gap-x-10 ">
        {products?.slice(0, 6).map((item) => (
          <BestProductCard
            key={item.id}
            Image={item}
            goToPage={() => goToPage("/shop/kadin/tişört/1/beyaz-percent100-pamuk/"+ item?.id || 1)}
          />
        ))}
      </div>
      <div className="pb-[200px]  sm:hidden flex flex-col gap-y-10">
        {products?.slice(0, 3).map((item) => (
          <BestProductCard
            key={item.id}
            Image={item}
            goToPage={() => goToPage("/shop/kadin/tişört/1/beyaz-percent100-pamuk/"+ item?.id || 1)}
          />
        ))}
      </div>
    </div>
  ))
}
