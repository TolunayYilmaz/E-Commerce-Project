import ShopPageCardItems from "../../CardList/shopTopList/ShopPageCardItems.jsx";
import { ChevronRight } from "lucide-react";

export default function ShopHead({cards}) {
  return (
    <section className="bg-[#FAFAFA] flex flex-col items-center mb-10 sm:pb-16">
      <header className=" h-[202px] w-full flex justify-around py-3 flex-col items-center sm:flex-row sm:justify-between sm:w-[72.84%]">
        <h3 className="font-bold">Shop</h3>
        <div className="flex gap-2">
          <a href="" className="no-underline text-black text-sm font-bold">
            Home
          </a>
          <ChevronRight
            size={30}
            color="#bdbdbd"
            strokeWidth={0.75}
            className="pb-2"
          />
          <a href="" className="no-underline text-[#737373] text-sm font-bold">
            Shop
          </a>
        </div>
      </header>

      <ShopPageCardItems cards={cards}/>
    </section>
  );
}
