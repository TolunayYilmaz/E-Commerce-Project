import {
  User,
  Search,
  ShoppingCart,
  AlignRight,
  Heart,
  ChevronDown,
} from "lucide-react";
import Button from "../../Button/Button.jsx";
import { useState, useEffect, useRef } from "react";
import { useHistoryHook } from "../../../hooks/useHistoryHook.jsx";
import Gravatar from "react-gravatar";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../store/actions/clientThunks.js";

import BasketSumCard from "../../CardList/basketCardList/BasketSumCard.jsx";

export default function NavTopBar() {

  const cart=useSelector((state)=>state.cart.cart)
  const goToPage = useHistoryHook();
  const [showDropdown, setShowDropdown] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);
  const [basketDropDown, setBasketDropDown] = useState(false);

  const shopDropdownRef = useRef(null);
  const loginDropdownRef = useRef(null);
  const basketDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        shopDropdownRef.current &&
        !shopDropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
      if (
        loginDropdownRef.current &&
        !loginDropdownRef.current.contains(event.target)
      ) {
        setLoginDropdown(false);
      }
      if (
        basketDropdownRef.current &&
        !basketDropdownRef.current.contains(event.target)
      ) {
        setBasketDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user); //thunk ile çekildi redux** globalden çekti
  const categories = useSelector((state) => state.product.categories);

  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  function userLogout() {
    dispatch(logout());
    goToPage("/");
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".login-dropdown-area")) {
        setLoginDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section>
      <header className="pt-10 flex flex-col gap-20 h-auto bg-[#F6F6F6] sm:bg-white pb-10 sm:pb-4 sm:h-24 relative">
        <div className="flex justify-around items-center">
        
          <img src="./logo2.png" alt="logo" className="w-[220px] object-cover h-[50px] " />

          <div className="hidden sm:flex sm:gap-x-4">
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
                <div className="absolute left-0 top-5 rounded-lg bg-white shadow-lg  border   w-[280px] z-[100] flex justify-around py-3">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-lg text-[#3C403D] ">Kadın</h2>
                    {categories.map((item) =>
                      item.id <= 8 ? (
                        <a
                          key={item.id}
                          onClick={() =>
                            goToPage(
                              `/shop/kadin/${item.title.toLowerCase()}/${
                                item.id
                              }` // link kullanınca sayfayı yeniliyor sayfayı hafızadan almalı
                            )
                          }
                          className="text-sm no-underline  text-[#3C403D] font-bold hover:cursor-pointer hover:underline"
                        >
                          {item.title}
                        </a>
                      ) : null
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-lg text-[#3C403D]">Erkek</h2>
                    {categories.map((item) =>
                      item.id > 8 ? (
                        <a
                          key={item.id}
                          onClick={() =>
                            goToPage(
                              `/shop/erkek/${item.title.toLowerCase()}/${
                                item.id
                              }`
                            )
                          }
                          className="text-sm no-underline  text-[#3C403D] font-bold hover:cursor-pointer hover:underline"
                        >
                          {item.title}
                        </a>
                      ) : null
                    )}
                  </div>
                </div>
              )}
            </div>
            <Button buttonName={"About"} push={() => goToPage("/about")} />
            <Button buttonName={"Contact"} push={() => goToPage("/contact")} />
            <Button buttonName={"Team"} push={() => goToPage("/team")} />
          </div>

          <div className="flex gap-2 items-end">
            {Object.keys(user).length > 0 ? (
              <div
                className="login-dropdown-area relative font-bold text-[#3C403D] sm:text-[#23A6F0]"
                onMouseLeave={() => setLoginDropdown(false)}
              >
                <div
                  className="flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:cursor-pointer"
                  onClick={() => setLoginDropdown((prev) => !prev)}
                >
                  <Gravatar
                    email={user.email}
                    size={100}
                    style={{
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                    }}
                  />
                  {user.name}
                </div>

                {loginDropdown && (
                  <div className="absolute left-0 top-[52px] rounded-lg bg-white shadow-lg text-left border p-4 grid grid-cols-2 gap-4 w-[150px] z-[100]">
                    <div className="col-span-2 pt-2">
                      <button
                        className="w-full text-sm text-white bg-red-500 hover:bg-red-600 rounded px-2 py-1 mb-2"
                        onClick={() => {
                          setLoginDropdown(false);
                          userLogout();
                        }}
                      >
                        Logout
                      </button>
                      <button
                        className="w-full text-sm text-white bg-[#23A6F0] hover:bg-[#3e9fd8] rounded px-2 py-1 mb-2"
                        onClick={() => {
                          setLoginDropdown(false);
                          goToPage("/order")
                        }}
                      >
                        Orders
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div
                className="flex gap-2"
                onMouseLeave={() => setLoginDropdown(false)}
              >
                <div className="hidden sm:flex hover:cursor-pointer transform hover:scale-105 transition-all duration-300">
                  <User className="h-6 text-[#3C403D] sm:text-[#23A6F0]" />
                  <button
                    className="hidden h-[20px] sm:block sm:text-[#23A6F0]"
                    onClick={() => {
                      setLoginDropdown(false);
                      goToPage("/login");
                    }}
                  >
                    Login
                  </button>
                </div>

                <p className="hidden sm:block sm:text-[#23A6F0]">/</p>
                <button
                  className="hidden h-[20px] sm:block sm:text-[#23A6F0] hover:cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={() => goToPage("/signup")}
                >
                  Register
                </button>

                <div className="sm:hidden relative login-dropdown-area">
                  <User
                    className="h-6 text-[#3C403D] mb-3 sm:text-[#23A6F0] hover:text-[#23A6F0] hover:cursor-pointer transform hover:scale-105 transition-all duration-300"
                    onClick={() => setLoginDropdown((prev) => !prev)}
                  />

                  {loginDropdown && (
                    <div className="absolute left-0 top-6 rounded-lg bg-white shadow-lg text-left border p-4 grid grid-cols-2 gap-4 w-[150px] z-[100]">
                      <div className="col-span-2 pt-2">
                        <button
                          className="w-full text-sm text-white bg-[#23A6F0] hover:bg-[#1e90e0] rounded px-2 py-1 mb-2"
                          onClick={() => {
                            setLoginDropdown(false);
                            goToPage("/login");
                          }}
                        
                        
                        >
                          Login
                        </button>
                        <button
                          className="w-full text-sm text-[#23A6F0] border border-[#23A6F0] hover:bg-[#f0faff] rounded px-2 py-1"
                          onClick={() => {
                            setLoginDropdown(false);
                            goToPage("/signup");
                          }}
                   
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <Search className="h-6 mb-3 text-[#3C403D] sm:text-[#23A6F0]" />
            <div
              className="flex relative gap-2 hover:cursor-pointer"
              onClick={() => setBasketDropDown(true)}
              ref={basketDropdownRef}
            >
              <ShoppingCart className="h-6 mb-3 text-[#3C403D] sm:text-[#23A6F0]" />
              <p className="sm:text-[#23A6F0] hidden sm:block">{cart?.length}</p>
              {basketDropDown && (
              <BasketSumCard/>
              )}
            </div>
            <AlignRight
              className="h-6 text-[#3C403D] mb-3 sm:mb-0 hover:text-[#23A6F0] sm:hidden hover:cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => toggleVisible()}
            />
            <div className="gap-2 hidden relative sm:flex">
              <Heart className="h-6 text-[#3C403D] sm:text-[#23A6F0]" />
              <p className="sm:text-[#23A6F0]">1</p>
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
