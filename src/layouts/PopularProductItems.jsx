
import PopularProductBotItems from "../components/popularProduct/PopularProductBotItems";
import PopularProductItem from "./PopularProductItem";

export default function PopularProductItems({color}) {
  return (
    <div>
      <PopularProductItem color={color}/>
      <PopularProductBotItems/>
    </div>
  );
}
