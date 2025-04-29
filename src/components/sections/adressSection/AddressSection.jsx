import { useDispatch, useSelector } from "react-redux";
import OrderSummarySection from "../orderSummarySection/OrderSummarySection";
import { X,

} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  addAddress,
  deleteAddress,
  updateAddress,
} from "../../../store/actions/clientThunks";
import React from "react";
import { setAddress } from "../../../store/actions/shoppingCartAction";
import AddAddressCard from "../../Card/AddAddressCard";
import AddressCard from "../../Card/AddressCard";
import PaymentSection from "../paymentSection/PaymentSection";

export default function AddressSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formHead, setFormHead] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null); // Seçili adresin index'i
  const [fatura, setFatura] = useState(true); // Fatura adresi kontrolü
  const [paymentOpen, setPaymentOpen] = useState(false);

  const addressList = useSelector((state) => state.client.addressList);
  const receiptAddressList = useSelector(
    (state) => state.client.receiptAddresses
  );
  const basket = useSelector((state) => state.cart.cart);
  const address = useSelector((state) => state.cart.address);
  const { register, handleSubmit, reset, setValue } = useForm();

  const dispatch = useDispatch();

  const openModal = (mode, index = null) => {
    setFormHead(mode);
    setSelectedIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";

    if (mode.toLowerCase() === "update" && index !== null) {
      const fields = [
        "title",
        "name",
        "surname",
        "phone",
        "city",
        "district",
        "neighborhood",
        "address",
      ];
      fields.forEach((field) => {
        setValue(field, addressList[index][field]);
      });
    } else {
      reset(); // 'Add' modunda formu temizle
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    setSelectedIndex(null);
    reset();
  };

  useEffect(() => {
    if (addressList.length > 0) {
      dispatch(setAddress(addressList[0]));
    }
  }, [addressList, dispatch]);

  const onSubmit = (data) => {
    if (formHead.toLowerCase() === "add") {
      dispatch(addAddress(data));
    } else if (formHead.toLowerCase() === "update" && selectedIndex !== null) {
      dispatch(updateAddress({ ...data, id: addressList[selectedIndex].id })); // Güncellenecek adresin id'sini gönder
    }

    closeModal();
  };

  const onDelete = (id) => {
    dispatch(deleteAddress(id));
  };

  return (
    <section className="w-full sm:w-[80%] sm:mx-auto min-h-[400px] py-3 flex flex-col px-4  rounded-md bg-[#FAFAFA] mb-10">
      <h4 className="ml-20 ">Sepetim ({basket?.length})</h4>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-[90%] sm:w-[400px] relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 className="text-xl font-bold text-[#23A6F0] mb-4 text-center">
              {formHead} Address
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="Title"
                className="border p-2 rounded-md"
              />
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
                className="border p-2 rounded-md"
              />
              <input
                {...register("surname", { required: true })}
                type="text"
                placeholder="Surname"
                className="border p-2 rounded-md"
              />
              <input
                {...register("phone", { required: true })}
                type="text"
                placeholder="Phone"
                className="border p-2 rounded-md"
              />
              <input
                {...register("city", { required: true })}
                type="text"
                placeholder="City"
                className="border p-2 rounded-md"
              />
              <input
                {...register("district", { required: true })}
                type="text"
                placeholder="District"
                className="border p-2 rounded-md"
              />
              <input
                {...register("neighborhood", { required: true })}
                type="text"
                placeholder="Neighborhood"
                className="border p-2 rounded-md"
              />
              <textarea
                {...register("address", { required: true })}
                placeholder="Address"
                className="border p-2 rounded-md"
                rows="3"
              />
              <button
                type="submit"
                className="bg-[#23A6F0] text-white py-2 rounded-md hover:bg-[#1e90ff]"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="flex w-full flex-col gap-2 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 w-full lg:w-[820px]">
            <div className="bg-white w-full flex flex-col sm:flex-row rounded-md">
              <div
                className="border rounded-t-md p-2 flex-1 sm:rounded-l-md hover:bg-gray-100 hover:cursor-pointer"
                onClick={() => setPaymentOpen(false)}
              >
                <h5 className="m-0 text-[#23A6F0] font-bold text-sm sm:text-xl">
                  Address
                </h5>
                <p className="m-0 text-sm font-medium">{address?.title}</p>
                <p className="m-0 text-xs">
                  {address?.name} {address?.surname}
                </p>
                <p className="m-0 text-xs">
                  {address?.city} / {address?.district} /{" "}
                  {address?.neighborhood} / {address?.address}
                </p>
              </div>

              <div
                className="border rounded-b-md p-2 flex-1  sm:rounded-r-md hover:bg-gray-100 hover:cursor-pointer"
                onClick={() => setPaymentOpen(true)}
              >
                <h5 className="m-0 text-[#23A6F0] font-bold text-lg sm:text-xl">
                  Payment Options
                </h5>
                <p className="m-0 text-sm font-medium">Card</p>
                <p className="m-0 text-xs">
                  You have selected to pay by card. You can securely complete
                  your payment using a <span className="font-bold">debit</span>{" "}
                  or <span className="font-bold"> credit card</span>.
                </p>
              </div>
            </div>

            {!paymentOpen && (
              <div className="bg-white w-full flex h-auto rounded-md flex-col gap-3 ">
                <div className="w-full  flex justify-between py-1">
                  <h6 className="text-[rgb(35,166,240)] font-bold ml-2 mt-2">
                    Teslimat Adresi
                  </h6>
                  <div className="flex">
                    <input
                      type="checkbox"
                      checked={fatura}
                      onChange={() => setFatura(!fatura)} // Fatura adresi checkbox'ı
                    />
                    <h6 className="text-[rgb(35,166,240)] font-bold ml-2 mt-2 ">
                      Fatura Adresi
                    </h6>
                  </div>
                </div>
                <div className="w-full flex flex-wrap flex-col sm:flex-row pb-2 ">
                  <div
                    className={`h-auto  gap-2 ${
                      fatura ? "sm:w-full" : "sm:w-[50%]"
                    } flex flex-col sm:flex-row flex-wrap justify-between  items-center sm:items-start`}
                  >
                    <AddAddressCard
                      onClick={() => openModal("Add")}
                      fatura={fatura}
                      cardName={"Add Address"}
                    />
                    {addressList?.map((item, index) => (
                      <AddressCard
                        onChange={() => dispatch(setAddress(item))}
                        onDelete={() => onDelete(item.id)}
                        openModal={() => openModal("Update", index)}
                        item={item}
                        index={index}
                        fatura={fatura}
                      />
                    ))}
                  </div>
                  {!fatura && (
                    <div
                      className={`h-auto  ${
                        fatura ? "sm:w-full" : "sm:w-[50%]"
                      } flex flex-col sm:flex-row flex-wrap justify-around items-center sm:items-start`}
                    >
                      <AddAddressCard
                        onClick={() => openModal("Add")}
                        fatura={fatura}
                        cardName={"Add Receipt Address"}
                      />
                      {receiptAddressList?.map((item, index) => (
                        <AddressCard
                          onChange={() => dispatch(setAddress(item))}
                          onDelete={() => onDelete(item.id)}
                          openModal={() => openModal("Update", index)}
                          item={item}
                          index={index}
                          fatura={fatura}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
            {paymentOpen && (
           <PaymentSection/>
            )}
          </div>
        </div>
        <OrderSummarySection />
      </div>
    </section>
  );
}
