import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../store/actions/clientThunks";

export default function OrderSection() {
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.client.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const toggleExpand = (orderId) => {
    setExpandedOrderId((prev) => (prev === orderId ? null : orderId));
  };

  // Dışarı tıklanınca kapanması için useEffect
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setExpandedOrderId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-[#FAFAFA] min-h-[200px] py-4">
      <div className="w-[75%] mx-auto space-y-2">
        <div className="hidden sm:grid grid-cols-5 bg-[#e4e3e3] rounded-md font-semibold text-center py-2">
          <div className="px-2">Order Number</div>
          <div className="px-2">Card Name</div>
          <div className="px-2">Total Price</div>
          <div className="px-2">Date</div>
          <div className="px-2">Order Count</div>
        </div>

        {orders?.map((item) => (
          <div key={item.id}>
            <div className="hidden sm:grid grid-cols-5 bg-[#e4e3e3] rounded-md text-center py-2 font-medium relative">
              <div className="px-2">{item.id}</div>
              <div className="px-2">
                {item.card_name ? item.card_name : "null"}
              </div>
              <div className="px-2">${item.price.toFixed(2)}</div>
              <div className="px-2">{item.order_date.split("T")[0]}</div>
              <div
                className="px-2 active:text-cyan-500 hover:cursor-pointer"
                onClick={() => toggleExpand(item.id)}
              >
                {item.products.length}
                {expandedOrderId === item.id && (
                  <div
                    ref={dropdownRef}
                    className="absolute bg-white top-6 right-5 rounded-md z-[50] hover:text-black shadow-md"
                  >
                    {item.products.map((product, index) => (
                      <div key={index} className="text-xs flex gap-2 px-2 py-1">
                        <p className="m-0">{product.name}</p>
                        <p className="m-0">{product.count}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div
              key={item.id + "mobile"}
              className="bg-[#e4e3e3] rounded-md text-center py-2 px-3 font-medium sm:hidden"
            >
              <div className="flex flex-col md:hidden space-y-1 text-left">
                <div>
                  <span className="font-semibold">Order Number:</span> {item.id}
                </div>
                <div>
                  <span className="font-semibold">Card Name:</span>{" "}
                  {item.card_name || "null"}
                </div>
                <div>
                  <span className="font-semibold">Total Price:</span>{" "}
                  ${item.price.toFixed(2)}
                </div>
                <div>
                  <span className="font-semibold">Date:</span>{" "}
                  {item.order_date.split("T")[0]}
                </div>
                <div className="relative">
                  <span className="font-semibold">Order Count: </span>
                  <span
                    className="hover:cursor-pointer active:text-cyan-500"
                    onClick={() => toggleExpand(item.id)}
                  >
                    {item.products.length}
                  </span>
                  {expandedOrderId === item.id && (
                    <div
                      ref={dropdownRef}
                      className="absolute bg-white left-0 top-6 z-[50] rounded-md shadow-md w-full"
                    >
                      {item.products.map((product, index) => (
                        <div
                          key={index}
                          className="text-xs flex gap-2 px-2 py-1"
                        >
                          <p className="m-0">{product.name}</p>
                          <p className="m-0">{product.count}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
