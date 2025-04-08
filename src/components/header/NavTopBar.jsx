
import { User,Search,ShoppingCart,AlignRight   } from 'lucide-react';
import Button from './Button.jsx';

export default function NavTopBar(){



    return(<>
   <header className='pt-6 flex flex-col gap-20 h-[532px]'>
    <div className='flex justify-around'>
    <h3 className='text-2xl font-bold text-[#252B42]'>Bandage</h3>
    <div className='flex gap-2'>
        <User className="h-6 text-[#3C403D]"/>
        <Search className="h-6 text-[#3C403D]"/>
        <ShoppingCart className="h-6 text-[#3C403D]"/>
        <AlignRight className="h-6 text-[#3C403D]"/>
    </div>
    </div>
    <div className='w-32 mx-auto flex justify-center flex-col items-center gap-[30px]'>
        <Button buttonName={"Home"}/>
        <Button buttonName={"Product"}/>
        <Button buttonName={"Pricing"}/>
        <Button buttonName={"Contact"}/>
    </div>
   
   </header>
</>);
}