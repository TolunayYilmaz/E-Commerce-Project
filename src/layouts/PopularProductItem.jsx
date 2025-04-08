
import PopularProductImg from "../components/popularProduct/PopularProductImg";
import PopularProductCard from "../components/popularProduct/PopularProductCard";

export default function PopularProductItem({color}) {
  return (
    <div>
      <PopularProductImg color={color} />
      <PopularProductCard />
    </div>
  );
}
