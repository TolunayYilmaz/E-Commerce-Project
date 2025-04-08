import { CircleChevronRight,CircleChevronLeft } from 'lucide-react';
import ProductButton from './ProductButton';
export default function BestProductTopbar()
{
    const buttons=["Men","Women","Accessories"]
    return(<div className='flex flex-col  py-20 gap-y-[24px]'>
        <h1 className='text-2xl font-bold '>BESTSELLER PRODUCTS</h1>
        <div>
          {buttons.map((item,index)=>  <ProductButton key={index} buttonName={item}/>)}
        </div>
        <div className="flex justify-center gap-2">
  <CircleChevronLeft 
    size={48} 
    color="currentColor" 
    strokeWidth={1} 
    className="text-[#BDBDBD] hover:text-[#737373] transition duration-300"
  />
  <CircleChevronRight 
    size={48} 
    color="currentColor" 
    strokeWidth={1} 
    className="text-[#BDBDBD] hover:text-[#737373] transition duration-300"
  />

</div>
<div className='border-b border-[#ECECEC] w-full'></div>

    </div>)
}