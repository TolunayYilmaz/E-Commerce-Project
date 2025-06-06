import ShopMidPageCard from "../../Card/ShopMidPageCard";
import { useHistoryHook } from "../../../hooks/useHistoryHook.jsx";
import { useParams } from "react-router-dom";
import slugify from "slugify";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

export default function ShopPageMidCardItems({ products }) {
  const goToPage = useHistoryHook();
  const { gender, categoryName, categoryId } = useParams();
  const categories = useSelector((state) => state.product.categories);
  const path = { id: 0, gender: "", categoryName: "" };
  let isLoading = useSelector((state) => state.client.loading);
  function filterProps(item) {
    const obj = categories.find((cat) => cat.id === item.category_id);
    path.gender = obj.gender === "k" ? "kadin" : "erkek";
    path.categoryName = obj.title.toLowerCase();
    path.id = obj.id;
  }
  return (
    isLoading ? (
      <div className="flex items-center justify-center w-full h-[50vh] ">
    
        <CircularProgress size="100px" sx={{ color: "#23A6F0" }} />
      </div>
    ) : (<div className="mx-auto">
      <div className="hidden sm:pt-40 sm:grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 sm:gap-y-80 md:w-full max-w-screen-xl sm:px-4">
        {products?.slice(0, 24).map((item, index) => (
          <ShopMidPageCard
            key={`grid-${item.id}-${index}`}
            product={item}
            goToPage={() => {
              filterProps(item);
              goToPage(
                `/shop/${gender ? gender : path.gender}/${
                  categoryName ? categoryName : path.categoryName
                }/${categoryId ? categoryId : path.id}/${slugify(item.name, {
                  lower: true,
                })}/` + item.id
              );
            }}
          />
        ))}
      </div>
      <div className="flex flex-col gap-3  items-center sm:hidden">
        {products?.slice(0, 25).map((item, index) => (
          <ShopMidPageCard
            key={`mobile-${item.id}-${index}`}
            product={item}
            goToPage={() => {
              filterProps(item);
              goToPage(
                `/shop/${gender ? gender : path.gender}/${
                  categoryName ? categoryName : path.categoryName
                }/${categoryId ? categoryId : path.id}/${slugify(item.name, {
                  lower: true,
                })}/` + item.id
              );
            }}
          />
        ))}
      </div>
    </div>)
  );
}
