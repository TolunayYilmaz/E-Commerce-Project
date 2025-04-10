import PopularProductBotCards from "../components/popularProduct/PopularProductBotCards";
import PopularProductImg from "../components/popularProduct/PopularProductImg";
import PopularProductCard from "../components/popularProduct/PopularProductCard";
import PopularProductCardSummary from "../components/popularProduct/PopularProductCardSummary";



export default function PopularProductItems({ color }) {
  return (
    <div className="sm:w-[75vw] sm:mx-auto sm:flex sm:flex-col sm:gap-7 ">
      <div className="sm:flex sm:flex-row">
        <PopularProductImg color={color} />
        <div className="sm:hidden">
          <PopularProductCard />
        </div>
        <PopularProductCardSummary/>
      </div>
      <PopularProductBotCards />
    </div>
  );
}
