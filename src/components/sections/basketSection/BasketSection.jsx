import { Plus, Minus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../store/actions/shoppingCartAction";
import OrderSummarySection from "../orderSummarySection/OrderSummarySection";
import { useHistoryHook } from "../../../hooks/useHistoryHook";

export default function BasketSection() {
  const basket = useSelector((state) => state.cart.cart);
  const goToPage=useHistoryHook();
  const dispatch = useDispatch();


  return (
    <section className="w-full sm:w-[80%] sm:mx-auto min-h-[400px] py-3 flex flex-col px-4  rounded-md bg-[#FAFAFA] mb-10">
      <h4 className="ml-20 ">Sepetim ({basket?.length})</h4>
      <div className="flex w-full   flex-col gap-2  lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-3  ">
          {basket?.map((item) => (
            <div
              key={item.product.id}
              className="sm:mr-0   w-full  flex flex-col gap-2 md:w-full xl:w-[750px] 2xl:w-[1000px]"
            >
              <div className="ml-1  bg-green-600 w-[22px] h-[22px] font-bold text-[10px] justify-center text-white rounded-sm flex items-center ">
                {item.product.rating}
              </div>
              <div className=" sm:w-[100%] border bg-white h-[150px] flex justify-around rounded-md items-center px-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 bg-white accent-sky-500 border border-gray-300 rounded"
                    checked={item.checked}
                    onChange={(e) =>
                      dispatch(
                        setCart({
                          product: item.product,
                          count: 0,
                          checked: e.target.checked,
                        })
                      )
                    }
                  />
                  <img
                    src={item.product.images[0].url}
                    alt=""
                    className="w-20 h-20  object-cover rounded-md"
                    style={{ objectPosition: "top" }}
                  />

                  <div className="sm:w-[200px] ">
                    <p>{item.product.name}</p>
                    <div className="flex items-center">
                      <div
                        className="bg-gray-200 shadow-md border rounded-lg w-8 h-8 flex justify-center items-center hover:cursor-pointer hover:bg-gray-300"
                        onClick={() =>
                          dispatch(
                            setCart({
                              checked: true,
                              product: item.product,
                              count: -1,
                            })
                          )
                        }
                      >
                        <Minus />
                      </div>
                      <p className="w-8 h-8  text-black m-0 text-sm flex justify-center items-center leading-none rounded-lg">
                        {item.count}
                      </p>

                      <div
                        key={item.product.id}
                        className="bg-gray-200 shadow-md border rounded-lg w-8 h-8 flex justify-center items-center hover:cursor-pointer hover:bg-gray-300"
                        onClick={() =>
                          dispatch(
                            setCart({
                              checked: true,
                              product: item.product,
                              count: 1,
                            })
                          )
                        }
                      >
                        <Plus />
                      </div>

                      <Trash2
                        className="text-gray-400 sm:ml-2 hover:cursor-pointer hover:text-gray-500"
                        onClick={() =>
                          dispatch(
                            setCart({
                              checked: false,
                              product: item.product,
                              count: -item.count,
                            })
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                <p className="hidden sm:block">$149 Üstü Kargon Ücretsiz</p>

                <p>${item.product.price}</p>
              </div>
            </div>
          ))}
        </div>
            <OrderSummarySection click={() => goToPage("/basket/address")}/>
      </div>
    </section>
  );
}
