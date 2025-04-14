import ShopPageMidCardItems from "../../CardList/shopMidList/ShopPageMidCardItems";
import ShopMidBot from "./ShopMidBot";
import ShopMidHead from "./ShopMidHead";

export default function ShopMidProductsSection({images}){


 return(<section className="py-10 flex  flex-col gap-5 mb-36">
    <ShopMidHead/>
    <ShopPageMidCardItems images={images}/>
    <ShopMidBot/>
    </section>);
}