import { ChevronDown } from 'lucide-react';
export default function OptionButton({buttonName}){

    return(<button  className="px-6 py-3 bg-[#F9F9F9] border font-normal text-[#737373] rounded-[5px] flex ">{buttonName}<ChevronDown color="#737373" strokeWidth={1.5} /></button>)
}