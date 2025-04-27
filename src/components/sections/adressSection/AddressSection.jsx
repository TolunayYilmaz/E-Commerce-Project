import OrderSummarySection from "../orderSummarySection/OrderSummarySection";

export default function AddressSection() {
  return (
    <section className="w-full sm:w-[75%] sm:mx-auto bg-[#f0efef] min-h-[400px] py-3 flex justify-around gap-3  lg:flex-row flex-col rounded-md">
      <div className="flex flex-col gap-3 w-full lg:w-[500px] ">
        <div className="bg-white  w-full flex flex-col sm:flex-row  rounded-md">
          <div className="  border rounded-t-md sm:rounded-l-md hover:bg-gray-100 hover:cursor-pointer">
            <h5 className="m-0 text-[#23A6F0] font-bold text-lg sm:text-xl">
              Address
            </h5>
            <p className="m-0 text-sm font-bold">Ev</p>
            <p className="m-0 text-sm ">
              Protected Routing subject on React Router 5 tutorials and docs
            </p>
          </div>
          <div className=" border rounded-b-md sm:rounded-r-md hover:bg-gray-100 hover:cursor-pointer">
            <h5 className="m-0 text-[#23A6F0] font-bold text-lg sm:text-xl">
              Payment Options
            </h5>
            <p className="m-0 text-sm font-bold">Card</p>
            <p className="m-0 text-sm ">
              Protected Routing subject on React Router 5 tutorials and docs
            </p>
          </div>
        </div>

        <div className=" bg-white w-full flex h-auto rounded-md flex-col gap-3">
          <h6 className=" text-[#23A6F0] font-bold ml-2 mt-2">Teslimat Adresi</h6>
          <div className="w-[390px] h-auto flex-col bg-gray-200 rounded-md">
            <h6 className="ml-2 mt-2 text-[#23A6F0] font-bold  text-sm ">
              Tolunay Yılmaz
            </h6>
            <p className="ml-2 text-sm">
             Backend api successfully, you need to add token to request
              headers In this task you will handle address information of client
            </p>
          </div>
          <div className="w-[390px] h-auto flex-col bg-gray-200 rounded-md">
            <h6 className="ml-2 mt-2 text-[#23A6F0] font-bold  text-sm ">
              Tolunay Yılmaz
            </h6>
            <p className="ml-2 text-sm">
             Backend api successfully, you need to add token to request
              headers In this task you will handle address information of client
            </p>
          </div>
          <div className="w-[390px] h-auto flex-col bg-gray-200 rounded-md">
            <h6 className="ml-2 mt-2 text-[#23A6F0] font-bold  text-sm ">
              Tolunay Yılmaz
            </h6>
            <p className="ml-2 text-sm">
             Backend api successfully, you need to add token to request
              headers In this task you will handle address information of client
            </p>
          </div>
        </div>
      </div>

      <OrderSummarySection />
    </section>
  );
}
