import { AlertCircle } from "lucide-react";

export default function FormInput({invalid,id,type,placeholder,onInvalid=true,register}){
     

    return( <div className="w-full relative ">
         <input
        id={id}
        type={type}
        onInvalid={onInvalid}
        placeholder={placeholder}
        {...register}
        className={`h-10 w-full  rounded-md pl-2 ${
          invalid ? "border-1 border-gray-300 shadow-md" : "border-1 border-red-500 shadow-md"
        }`}
      />
      {!invalid && (
        <AlertCircle
          className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500"
          size={18}
        />
      )}
    </div>)
}