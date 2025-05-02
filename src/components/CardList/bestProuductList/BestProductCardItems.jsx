import BestProductCard from "../../Card/BestProductCard.jsx";

import { useHistoryHook } from "../../../hooks/useHistoryHook.jsx";
import { useSelector } from "react-redux";
export default function BestCardProductItems({ images }) {
  const products = useSelector((state) => state.product.productList);
  const goToPage = useHistoryHook();

  return (
    <div className="sm:w-[100%] ">
      <div className="hidden  sm:h-[750px] sm:overflow-x-hidden sm:justify-center sm:flex sm:gap-x-2 lg:justify-start md:gap-x-4 lg:gap-x-2 xl:gap-x-8  flex-row flex-wrap 2xl:gap-x-10 ">
        {products?.slice(0, 6).map((item) => (
          <BestProductCard
            key={item.id}
            Image={item}
            goToPage={() => goToPage("/productDetail/" + item.id)}
          />
        ))}
      </div>
      <div className="pb-[200px]  sm:hidden flex flex-col gap-y-10">
        {products?.slice(0, 3).map((item) => (
          <BestProductCard
            key={item.id}
            Image={item}
            goToPage={() => goToPage("/productDetail/" + item.id)}
          />
        ))}
      </div>
    </div>
  );
}
