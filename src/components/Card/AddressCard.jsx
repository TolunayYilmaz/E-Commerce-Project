import {Smartphone, Trash2, UserRound} from "lucide-react";
export default function AddressCard({onChange,onDelete,openModal,index,item,fatura}){

    return( <div
        key={index}
        className={`w-[92%] ${
          !fatura ? "w-[92%]" : "sm:w-[46%]"
        } h-auto flex flex-col gap-y-1`}
      >
        <div className="flex justify-between text-xs font-medium">
          <div className="flex gap-1">
            <input
              type="radio"
              name="example"
              value="option1"
              className="hover:cursor-pointer"
              defaultChecked={index === 0}
              onChange={onChange}
          
            />
            <p className="m-0">{item.title}</p>
          </div>

          <div className="flex">
            <Trash2
              className="text-red-400 sm:ml-2 hover:cursor-pointer hover:text-red-600"
              size={16}
              onClick={onDelete}
            />
            <a
              className="text-black hover:cursor-pointer"
              onClick={openModal}
            >
              Düzenle
            </a>
          </div>
        </div>

        <div className="flex-col min-h-[100px] bg-gray-200 rounded-md">
          <div className="flex w-full items-center justify-between">
            <h6 className="ml-2 mt-2 text-[#23A6F0] font-bold text-xs flex gap-x-1">
              <UserRound
                size={16}
                color="#23A6F0"
                strokeWidth={2.5}
              />
              {item.name} {item.surname}
            </h6>
            <h6 className="my-0 mr-2 flex gap-x-1 text-xs font-medium items-center">
              <Smartphone size={16} strokeWidth={2.5} />{" "}
              {item.phone}
            </h6>
          </div>
          <p className="ml-2 text-xs">
            {item.city} / {item.district} / {item.neighborhood} /{" "}
            {item.address}
          </p>
        </div>
      </div>)
}

