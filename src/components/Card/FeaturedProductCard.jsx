import FeaturedProductButton from "../Button/FeaturedProductButton.jsx";
import { AlarmClock, ChartArea, ChevronRight } from "lucide-react";



export default function FeaturedProductCard({image ,goToPage}) {
  return (
    <div className="w-[330px] h-[606px] shadow-sm hover:cursor-pointer" onClick={goToPage}>
 <div className="w-full h-[300px] bg-pink-300 relative">
  <img src={image} alt="Street" className="w-full h-full object-cover" />
  <h6 className="absolute top-3 left-3 bg-[#E74040] shadow-sm rounded-md w-14 h-6 leading-none text-center pt-1 text-white text-sm z-10">
    NEW
  </h6>
</div>
      <div className="w-[82%] h-[306px] mx-auto flex flex-col justify-center gap-2 ">
        <div className="flex gap-3">
          <FeaturedProductButton name={"Google"} />
          <FeaturedProductButton name={"Trending"} />
          <FeaturedProductButton name={"New"} />
        </div>
        <h4 className="text-xl font-normal tracking-wide leading-7">
          Loudest à la Madison #1 (L'integral)
        </h4>
        <p className=" text-sm text-[#737373] font-normal">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <AlarmClock size={16} color="#23a6f0" strokeWidth={1.5} />
            <p className="text-[#737373] text-xs font-normal mt-[1px]">
              22 April 2021
            </p>
          </div>
          <div className="flex gap-1">
            <ChartArea size={16} color="#23856d" strokeWidth={1.5} />
            <p className="text-[#737373] text-xs font-normal mt-[1px]">
              10 Comments
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          <h6 className="text-[#737373] font-bold mt-[6px]">Learn More</h6>
          <ChevronRight size={30} color="#23a6f0" strokeWidth={1} />
        </div>
      </div>
    </div>
  );
}
