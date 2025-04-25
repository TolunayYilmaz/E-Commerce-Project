
import ProductDetailCard from "../../Card/ProductDetailCard";
import HeaderContentBlock from "../headerSection/HeaderContentBlock";


export default function ProductDetailSection({product,categoryName,gender,categoryId}) {
  return (
   <section>
    <HeaderContentBlock categoryName={categoryName} gender={gender} categoryId={categoryId} pageName={"Product Detail"} child={<ProductDetailCard product={product}/>}/>
   </section>
  );
}
