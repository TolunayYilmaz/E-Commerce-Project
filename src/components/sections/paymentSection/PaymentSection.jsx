import { ShieldCheck, X } from "lucide-react";
import CreditCardList from "../../CardList/creditCardList/CreditCardList";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { useForm } from "react-hook-form"; // react-hook-form import
import { addCard } from "../../../store/actions/clientThunks";


export default function PaymentSection() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formHead, setFormHead] = useState("");


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLinkClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setFormHead("Add a new Card");
    if (formHead === "Add a new Card") {
      reset();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data); // Form verilerini işleme
    dispatch(addCard(data));
    setIsModalOpen(false); // Modal'ı kapatıyoruz
  };

  return (
    <div className="bg-white w-full flex h-auto rounded-md flex-col gap-3 ">
      <div className="w-full flex flex-col justify-between py-1">
        <h6 className="text-[rgb(35,166,240)] font-bold ml-2 mt-2">
          Pay to Card
        </h6>
        <div className="min-h-[300px] flex flex-col sm:flex-row">
          <div className="h-auto flex-1 flex flex-col gap-y-2">
            <div className="flex justify-between">
              <h6>Card Information</h6>
              <a
                className="text-black text-sm hover:cursor-pointer"
                onClick={handleLinkClick}
              >
                Pay with another card
              </a>
            </div>

            <CreditCardList />

            <div className="flex">
              <input type="checkbox" />
              <ShieldCheck color="#ffffff" style={{ fill: "black" }} />
              <p className="m-0">
                <span className="font-bold">3D Secure</span> ile ödemek
                istiyorum
              </p>
            </div>
          </div>
          <div className="h-auto flex-1 flex flex-col gap-y-2 ">
            <div className="flex justify-between flex-col w-[350px] mx-auto">
              <h6 className="m-0 text-md">Installment Options</h6>
              <p className="m-0 text-xs font-medium">
                Select the installment option suitable for your card.
              </p>
            </div>
            <div className="text-sm font-semibold bg-white w-[350px]  h-[70px] mx-auto rounded-md border grid grid-cols-2 grid-rows-2">
              <div className="border-b-[1px] pl-2 pt-2 bg-[#FAFAFA] rounded-t-md">
                Taksit Sayısı
              </div>
              <div className="border-l-[1px] pl-2 pt-2  border-b-[1px] bg-[#FAFAFA]  rounded-t-md">
                Aylık Ödeme
              </div>
              <div className="flex my-auto pl-2 gap-2">
                <input type="radio" checked={true}/>
                <p className="m-0 text-xs">Tek Çekim</p>
              </div>
              <div className="border-l-[1px] pl-2 pt-2 text-xs">
                ${totalAmount}
              </div>
            </div>
          </div>
        </div>
      </div>

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
              {formHead}
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <input
                type="text"
                placeholder="Name on Card"
                className="border p-2 rounded-md"
                {...register("name_on_card", {
                  required: "Name on Card is required",
                })}
              />
              <input
                type="text"
                placeholder="Card Number"
                className="border p-2 rounded-md"
                {...register("card_no", {
                  required: "Card Number is required",
                })}
              />
              <input
                type="text"
                placeholder="Month"
                className="border p-2 rounded-md"
                {...register("expire_month", { required: "Month is required" })}
              />
              <input
                type="text"
                placeholder="Year"
                className="border p-2 rounded-md"
                {...register("expire_year", { required: "Year is required" })}
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
    </div>
  );
}
