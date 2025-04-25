import ShopMidPageCard from "../../Card/ShopMidPageCard";
import { useHistoryHook } from "../../../hooks/useHistoryHook.jsx";
import { useParams } from "react-router-dom";
import slugify from "slugify";

export default function ShopPageMidCardItems({ products }) {
  const goToPage = useHistoryHook();
  const { gender, categoryName, categoryId } = useParams();
  return (
    <div className="mx-auto">
      <div className="hidden sm:pt-40 sm:grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 sm:gap-y-80 md:w-full max-w-screen-xl sm:px-4">
        {products?.slice(0, 24).map((item, index) => (
          <ShopMidPageCard
            key={`grid-${item.id}-${index}`}
            product={item}
            goToPage={() => goToPage(`/shop/${gender}/${categoryName}/${categoryId}/${slugify(item.name, { lower: true })}/` + item.id)}
          />
        ))}
      </div>
      <div className="flex flex-col gap-3  items-center sm:hidden">
        {products?.slice(0, 25).map((item, index) => (
          <ShopMidPageCard
            key={`mobile-${item.id}-${index}`}
            product={item}
            goToPage={() => goToPage(`/shop/${gender}/${categoryName}/${categoryId}/${slugify(item.name, { lower: true })}/` + item.id)}
          />
        ))}
      </div>
    </div>
  );
}
