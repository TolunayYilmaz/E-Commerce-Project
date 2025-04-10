import { User, Search, ShoppingCart, AlignRight, Heart,ChevronDown } from "lucide-react";
import Button from "./Button.jsx";

export default function NavTopBar() {
  return (
    <>
 <header className="pt-10 flex flex-col gap-20 h-[532px] sm:h-24">
        <div className="flex justify-around">
          <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
          <div className="hidden sm:flex sm:gap-x-4 ">
          <Button buttonName={"Home"} />
          <Button buttonName={"Shop"} logo={<ChevronDown strokeWidth={2}/>}/> 
          <Button buttonName={"About"} />
          <Button buttonName={"Blog"} />
          <Button buttonName={"Contact"} />
          <Button buttonName={"Pages"} />
            </div>
          <div className="flex gap-2">
  
            <div className="flex gap-2">
              <User className="h-6 text-[#3C403D] sm:text-[#23A6F0]" />
              <p className="hidden sm:block sm:text-[#23A6F0]">
                Login/Register
              </p>
            </div>
      
            <Search className="h-6 text-[#3C403D] sm:text-[#23A6F0]" />
            <div className="flex gap-2 ">
              <ShoppingCart className="h-6 text-[#3C403D] sm:text-[#23A6F0]" />
              <p className="sm:text-[#23A6F0] hidden sm:block">1</p>
            </div>
            <AlignRight className="h-6 text-[#3C403D] sm:hidden" />
            <div className="flex gap-2 ">
              <Heart className="h-6 text-[#3C403D] sm:text-[#23A6F0]" />
              <p className="sm:text-[#23A6F0] hidden sm:block">1</p>
            </div>
          </div>
        </div>
        <div className="w-32 mx-auto flex justify-center flex-col items-center gap-[30px] sm:hidden">
          <Button buttonName={"Home"} />
          <Button buttonName={"Product"} />
          <Button buttonName={"Pricing"} />
          <Button buttonName={"Contact"} />
        </div>
      </header>
    </>
  );
}
