

export default function ShopMidPageCard({ image,goToPage }) {
  return (
    <div className="w-[328px] h-[615px]   flex justify-around flex-col items-center sm:w-[188px] lg:w-[238px] 2xl:w-[12.7vw] sm:h-[324px] sm:gap-[10px] hover:cursor-pointer" onClick={goToPage}>
      <div className=" w-[90%] text-6xl font-bold  flex flex-col justify-end  sm:w-[100%] sm:h-[54%]">
        <img
          src={image}
          className="object-fill w-full mx-auto  "
        ></img>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center  sm:h-[50%]">
        <h5 className="text-[#252B42] font-bold text-base">Grafic Design</h5>
        <h5 className="text-[#737373] text-sm">English Departmant</h5>
        <h5 className="font-bold text-[#BDBDBD] text-base">
          $16.48<span className="text-[#23856D] ml-1">$6.48</span>
        </h5>
        <div className="flex gap-1">
          <p className="w-4 h-4 bg-[#23A6F0] rounded-full"></p>
          <p className="w-4 h-4 bg-[#23856D] rounded-full"></p>
          <p className="w-4 h-4 bg-[#E77C40] rounded-full"></p>
          <p className="w-4 h-4 bg-[#252B42] rounded-full"></p>
        </div>
      </div>
    </div>
  );
}
