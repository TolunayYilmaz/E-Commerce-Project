import { useSelector } from "react-redux"
import ContactButton from "../../Button/ContactButton"
import { useHistoryHook } from "../../../hooks/useHistoryHook"
export default function BasketSumCard(){

  const goToPage=useHistoryHook();
  const basketProducts=useSelector((state)=>state.cart.cart)

    return(  <div className=" absolute py-3 bg-white border shadow-md rounded-md w-[350px] h-auto z-[1] top-11 right-0 ">
        <h6 className="pl-3 font-bold">Sepetim ({basketProducts?.length} ürün)</h6>
      
         {basketProducts?.slice(0,3).map((item,index)=>{
           return  <div className="w-full" key={index}>
           <div className="flex justify-around items-center py-3">
             <img
               src={item.product.images[0].url}
               alt=""
               className="h-24 w-16 rounded-md bg-red-300 object-contain"
             />
             <div className=" w-[70%] flex flex-col gap-2">
               <p className="font-bold m-0 p-0 text-sm">
                 {item.product.name}{" "}
                 <span className="font-medium">
                  {item.product.description}
                 </span>
               </p>
               <p className="text-sm m-0 text-[#6d6e6d]">Adet: {item.count}</p>
               <h6 className="m-0 text-[#23A6F0]">${item.product.price*item.count}</h6>
             </div>
           </div>
 
           <div className="w-full h-px bg-gray-200"></div>
         </div>
         })}
       

        <div className="w-full flex justify-around pt-3">
          <ContactButton
            textColor={"text-black font-normal"}
            px={"px-2"}
            py={"py-2"}
            borderColor={"border-gray-100"}
            bgColor={"bg-gray-200"}
            buttonName={"Sepete Git"}
            push={()=>goToPage("/basket")}
          />
          <ContactButton
            textColor={"text-white"}
            px={"px-2"}
            py={"py-2"}
            bgColor={"bg-[#23A6F0]"}
            buttonName={"Siparişi Tamamla"}
          />
        </div>
      </div>)
}