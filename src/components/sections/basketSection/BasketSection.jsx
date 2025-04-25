import { Plus, Minus, Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
export default function BasketSection() {
  const basket = useSelector((state) => state.cart.cart);
  return (
    <section className="w-full sm:w-[75%] sm:mx-auto bg-[#FAFAFA] py-5 flex flex-col gap-3">
      {basket?.map((item) => (
        <div key={item.product.id} className="mx-1 sm:w-[70%] border h-[150px] flex justify-around items-center sm:mr-0 sm:ml-5">
          <div className="flex items-center gap-2 sm:gap-3">
            <input
              type="checkbox"
              className="w-5 h-5 bg-white accent-[#23A6F0]  border border-gray-300 rounded "
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
                <div className="bg-gray-200 shadow-md border rounded-lg w-8 h-8 flex justify-center items-center hover:cursor-pointer hover:bg-gray-300">
                  <Minus />
                </div>
                <p className="w-8 h-8  text-black m-0 text-sm flex justify-center items-center leading-none rounded-lg">
                  {item.count}
                </p>

                <div className="bg-gray-200 shadow-md border rounded-lg w-8 h-8 flex justify-center items-center hover:cursor-pointer hover:bg-gray-300">
                  <Plus />
                </div>

                <Trash2 className="text-gray-400" />
              </div>
            </div>
          </div>
          <p className="hidden sm:block">Sürat Kargo: Kargon Ücretsiz</p>

          <p>${item.product.price}</p>
        </div>
      ))}
    </section>
  );
}
