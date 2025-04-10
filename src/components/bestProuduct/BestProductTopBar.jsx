import { CircleChevronRight, CircleChevronLeft } from "lucide-react";
import ProductButton from "./ProductButton";
export default function BestProductTopbar() {
  const buttons = ["Men", "Women", "Accessories"];
  return (
 <>
    <div className="flex flex-col  py-20 gap-y-[24px] sm:h-[50px] sm:py-0 sm:flex-row sm:justify-between sm:mt-5">
      <h1 className="text-2xl font-bold  sm:w-[210px] sm:text-base sm:mt-4 ">BESTSELLER PRODUCTS</h1>
      <div className="sm:flex ">
        {buttons.map((item, index) => (
          <ProductButton key={index} buttonName={item} />
        ))}
      </div>
      <div className="flex justify-center gap-2">
        <CircleChevronLeft
          size={48}
          color="currentColor"
          strokeWidth={1}
          className="text-[#BDBDBD] hover:text-[#737373] transition duration-300"
        />
        <CircleChevronRight
          size={48}
          color="currentColor"
          strokeWidth={1}
          className="text-[#BDBDBD] hover:text-[#737373] transition duration-300"
        />
      </div>
      <div className="border-b border-[#ECECEC] w-full sm:hidden"></div>
    </div>
    <div className="hidden border-b border-[#ECECEC] w-full sm:flex"></div>
    </>
  );
}
