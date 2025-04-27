import { useSelector } from "react-redux";
import ContactButton from "../../Button/ContactButton";

import { useHistoryHook } from "../../../hooks/useHistoryHook";
export default function OrderSummarySection(){
    const summary = useSelector((state) => state.cart);
    const basket = useSelector((state) => state.cart.cart);
    const goToPage=useHistoryHook();
    return( basket?.length > 0 && (
        <div className="bg-white border rounded-md shadow-md h-auto lg:max-h-[250px] lg:w-[200px] 2xl:w-[250px]">
          <div className="m-2 flex flex-col gap-2">
            <h4 className="text-base m-0">Order Summary</h4>
            <p className="text-sm m-0 flex justify-between">
              Total Orders
              <span>
                ${(summary?.totalAmount - summary?.cargoAmount).toFixed(2)}
              </span>{" "}
            </p>
            <p className="text-sm m-0 flex justify-between">
              Total Shipments{" "}
              <span>
                ${summary?.totalAmount >= 159?summary?.cargoFreeAmount.toFixed(2):summary?.cargoAmount.toFixed(2)}
              </span>
            </p>
            {summary?.totalAmount >= 159 && (
              <p className="text-sm m-0 flex justify-between">
                Shipping Discount{" "}
                <span>-${summary?.cargoFreeAmount.toFixed(2)}</span>
              </p>
            )}
            <div className="w-full h-[1px] bg-gray-200"></div>

            <p className="text-sm m-0 flex justify-between">
              Grand Total <span>${summary?.totalAmount.toFixed(2)}</span>
            </p>
            <div className="w-full h-[1px] bg-gray-200"></div>
            <div className="lg:w-full w-[50%] mx-auto flex flex-col gap-1">
              <button className="bg-white border-[#23A6F0] border-[1px] rounded-md text-[#737373] w-full font-bold py-1 text-sm">
              + Coupon
              </button>
              <ContactButton
                bgColor={"bg-[#23A6F0]"}
                px={"w-full"}
                py={"py-1"}
                textColor={"text-white"}
                buttonName={"Buy"}
                push={()=>goToPage("/basket/address")}
              />
            </div>
          </div>
        </div>
      ));
}