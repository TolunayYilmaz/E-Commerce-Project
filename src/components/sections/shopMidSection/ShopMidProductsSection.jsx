import ShopPageMidCardItems from "../../CardList/shopMidList/ShopPageMidCardItems";
import ShopMidBot from "./ShopMidBot";
import ShopMidHead from "./ShopMidHead";

export default function ShopMidProductsSection({products,categoryId}){


 return(<section className="py-10 flex  flex-col gap-5 mb-36">
    <ShopMidHead categoryId={categoryId}/>
    <ShopPageMidCardItems products={products}/>
    <ShopMidBot categoryId={categoryId}/>
    </section>);
}