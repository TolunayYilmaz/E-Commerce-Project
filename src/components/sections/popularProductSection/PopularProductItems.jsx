import PopularProductBotCards from "../../CardList/popularProductList/PopularProductBotCards.jsx";
import PopularProductImg from "../../Image/PopularProductImg.jsx";
import PopularProductCard from "../../Card/PopularProductCard.jsx";
import PopularProductCardSummary from "../../Card/PopularProductCardSummary.jsx";
import { useHistoryHook } from "../../../hooks/useHistoryHook.jsx";

export default function PopularProductItems({ color, image, mostProduct }) {
  const goToPage = useHistoryHook();

  const imageUrl = mostProduct?.images?.[0]?.url;

  return (
    <section className="sm:w-[75vw] sm:mx-auto sm:flex sm:flex-col sm:gap-7">
      <div className="sm:flex sm:flex-row">
        <PopularProductImg color={color} image={image} />

        <div className="sm:hidden">
          {imageUrl && (
            <PopularProductCard
              mostProduct={mostProduct}
              image={imageUrl}
              goToPage={() => goToPage("/shop/kadin/tişört/1/beyaz-percent100-pamuk/"+ mostProduct?.id || 1)}
            />
          )}
        </div>

        <div className="hidden sm:block">
          {imageUrl && (
           <PopularProductCardSummary
           mostProduct={mostProduct}
           image={imageUrl}
           goToPage={() => goToPage("/shop/kadin/tişört/1/beyaz-percent100-pamuk/"+ mostProduct?.id || 1)}
         />
         
          )}
        </div>
      </div>

      <PopularProductBotCards />
    </section>
  );
}
