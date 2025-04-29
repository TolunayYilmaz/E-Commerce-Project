import { Plus } from "lucide-react";

export default function AddAddressCard({onClick,fatura,cardName}) {
  return (
    <div
      onClick={onClick}
      className={` w-[92%] ${
        fatura ? "sm:w-[46%]" : "w-[92%]"
      } min-h-[100px] h-[100px] mt-[20px] flex flex-col justify-center items-center bg-gray-200 rounded-md hover:cursor-pointer transition-transform transform hover:scale-[103%] active:scale-[103%]`}
    >
      <Plus color="#23a6f0" strokeWidth={3} />
      <p className="text-sm font-medium">{cardName}</p>
    </div>
  );
}
