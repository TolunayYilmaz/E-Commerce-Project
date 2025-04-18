import {
  User,
  Search,
  ShoppingCart,
  AlignRight,
  Heart,
  ChevronDown,
} from "lucide-react";
import Button from "../../Button/Button.jsx";
import { useState } from "react";
import { useHistoryHook } from "../../../hooks/useHistoryHook.jsx";

export default function NavTopBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const goToPage = useHistoryHook();

  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <section>
      <header className="pt-10 flex flex-col gap-20 h-auto bg-[#F6F6F6]  sm:bg-white pb-10 sm:pb-4 sm:h-24">
        <div className="flex justify-around">
          <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
          <div className="hidden sm:flex sm:gap-x-4 ">
            <Button buttonName={"Home"} push={() => goToPage("/")} />
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Button
                buttonName={"Shop"}
                push={() => goToPage("/shop")}
                logo={<ChevronDown strokeWidth={2} />}
              />
              {showDropdown && (
                <div className="absolute left-0 top-5 rounded-lg bg-white shadow-lg text-left border p-4 grid grid-cols-2 gap-4 w-[280px] z-50">
                  <div>
                    <h4 className="font-bold ">Meyve</h4>
                    <div className="text-sm w-full  flex flex-col">
                      <p>Elma</p>
                      <p>Çilek</p>
                      <p>Kivi</p>
                      <p>Erik</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Gıda</h4>
                    <div className="text-sm w-full  flex flex-col">
                      <p>Et</p>
                      <p>Tatlı</p>
                      <p>Çerez</p>
                      <p>Sebze</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Button buttonName={"About"} push={() => goToPage("/about")} />
            <Button buttonName={"Contact"} push={() => goToPage("/contact")} />
            <Button buttonName={"Team"} push={() => goToPage("/team")} />
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 ">
              <div className=" flex justify-center hover:cursor-pointer hover:scale-105 transition-all duration-300 " onClick={() => goToPage("/signup")}>
                <User className="h-6 text-[#3C403D] sm:text-[#23A6F0] hover:text-[#23A6F0]" />
                <button className="hidden h-[20px] sm:block sm:text-[#23A6F0] ">
                  Login
                </button>
              </div>
              <p className="hidden sm:block sm:text-[#23A6F0]">/</p>
              <button className="hidden h-[20px] sm:block sm:text-[#23A6F0] hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#23A6F0]" onClick={() => goToPage("/signup")}>
                Register
              </button>
            </div>

            <Search className="h-6 text-[#3C403D] sm:text-[#23A6F0]" />
            <div className="flex gap-2 ">
              <ShoppingCart className="h-6 text-[#3C403D] sm:text-[#23A6F0]" />
              <p className="sm:text-[#23A6F0] hidden sm:block">1</p>
            </div>
            <AlignRight
              className="h-6 text-[#3C403D] hover:text-[#23A6F0] sm:hidden hover:cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => toggleVisible()}
            />
            <div className=" gap-2 hidden sm:flex">
              <Heart className="h-6 text-[#3C403D]  sm:text-[#23A6F0]" />
              <p className="sm:text-[#23A6F0] k">1</p>
            </div>
          </div>
        </div>
        {visible && (
          <div className="w-32 mx-auto flex justify-center flex-col items-center gap-[30px] sm:hidden">
            <Button buttonName={"Home"} push={() => goToPage("/")} />
            <Button buttonName={"Shop"} push={() => goToPage("/shop")} />
            <Button buttonName={"About"} push={() => goToPage("/about")} />
            <Button buttonName={"Contact"} push={() => goToPage("/contact")} />
            <Button buttonName={"Team"} push={() => goToPage("/Team")} />
          </div>
        )}
      </header>
    </section>
  );
}
