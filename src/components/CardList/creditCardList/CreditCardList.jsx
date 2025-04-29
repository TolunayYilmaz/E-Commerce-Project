import { useSelector } from "react-redux";
import CreditCard from "../../Card/CreditCard";



export default function CreditCardList() {
 const creditCardList =useSelector((state)=>state.client.creditCards)
  return (
    <div className="flex gap-y-2 items-start justify-between  flex-wrap  ">
     {creditCardList.map((item)=><CreditCard key={item.id} item={item}/>)}
    </div>
  );
}
