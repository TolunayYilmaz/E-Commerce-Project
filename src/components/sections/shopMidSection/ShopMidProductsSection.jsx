import { useSelector } from "react-redux";
import ShopPageMidCardItems from "../../CardList/shopMidList/ShopPageMidCardItems";
import ShopMidBot from "./ShopMidBot";
import ShopMidHead from "./ShopMidHead";

export default function ShopMidProductsSection(){

const products = useSelector((state) => state.product.productList);
 return(<section className="py-10 flex  flex-col gap-5 mb-36">
    <ShopMidHead/>
    <ShopPageMidCardItems products={products}/>
    <ShopMidBot/>
    </section>);
}