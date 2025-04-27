import { useSelector } from "react-redux";
import OrderSummarySection from "../orderSummarySection/OrderSummarySection";
import { Plus, Smartphone, UserRound } from "lucide-react";
export default function AddressSection() {
  const addressList = useSelector((state) => state.client.addressList);
  return (
    <section className="w-full sm:w-[75%] sm:mx-auto bg-[#FAFAFA] min-h-[400px] py-3 flex justify-around  lg:flex-row flex-col rounded-md">
      <div className="flex flex-col gap-3 w-full lg:w-[820px] ">
        <div className="bg-white  w-full flex flex-col sm:flex-row  rounded-md">
          <div className="border rounded-t-md p-2 sm:rounded-l-md hover:bg-gray-100 hover:cursor-pointer">
            <h5 className="m-0 text-[#23A6F0] font-bold text-sm sm:text-xl">
              Address
            </h5>
            <p className="m-0 text-sm font-medium">Ev</p>
            <p className="m-0 text-sm ">
              Protected Routing subject on React Router 5 tutorials and docs
            </p>
          </div>
          <div className=" border rounded-b-md  p-2 sm:rounded-r-md hover:bg-gray-100 hover:cursor-pointer">
            <h5 className="m-0 text-[#23A6F0] font-bold text-lg sm:text-xl">
              Payment Options
            </h5>
            <p className="m-0 text-sm font-medium">Card</p>
            <p className="m-0 text-sm ">
              Protected Routing subject on React Router 5 tutorials and docs
            </p>
          </div>
        </div>

        <div className=" bg-white w-full flex h-auto rounded-md flex-col gap-3">
          <h6 className=" text-[rgb(35,166,240)] font-bold ml-2 mt-2">
            Teslimat Adresi
          </h6>
          <div className="flex flex-col sm:flex-row  sm:flex-wrap justify-between mx-2 gap-y-6">
            <div className="sm:w-[46%] min-h-[100px] h-auto flex flex-col justify-center items-center bg-gray-200 rounded-md hover:cursor-pointer transition-transform transform hover:scale-[103%] active:scale-[103%]">
              <Plus color="#23a6f0" strokeWidth={3} />
              <p className="text-sm font-medium">Add Address</p>
            </div>
            {addressList?.map((item) => (
              <div className="sm:w-[46%] min-h-[100px] h-auto flex-col bg-gray-200 rounded-md">
                <div className="flex w-full  items-center justify-between">
                  <h6 className="ml-2 mt-2 text-[#23A6F0] font-bold  text-sm flex gap-x-1">
                    <UserRound size={16} color="#000000" strokeWidth={2} />
                    {item.name} {item.surname}
                  </h6>
                  <h6 className="my-0 mr-2 flex gap-x-1 items-center">
                    <Smartphone  size={16}  strokeWidth={2}/> {item.phone}
                  </h6>
                </div>

                <p className="ml-2 text-sm">
                  {item.city} / {item.district} / {item.neighborhood} /{" "}
                  {item.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OrderSummarySection />
    </section>
  );
}
