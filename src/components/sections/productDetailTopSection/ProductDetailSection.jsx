
import ProductDetailCard from "../../Card/ProductDetailCard";
import HeaderContentBlock from "../headerSection/HeaderContentBlock";


export default function ProductDetailSection() {
  return (
   <section>
    <HeaderContentBlock pageName={"Product Detail"} child={<ProductDetailCard/>}/>
   </section>
  );
}
