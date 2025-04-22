import ShopPageCardItems from "../../CardList/shopTopList/ShopPageCardItems.jsx";
import HeaderContentBlock from "../headerSection/HeaderContentBlock.jsx";


export default function ShopHead({cards}) {


  return (
    <section>
    <HeaderContentBlock pageName={"Shop"} child={<ShopPageCardItems cards={cards}/>}/>

    
    </section>
  );
}
