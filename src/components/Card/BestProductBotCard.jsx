export default function BestProductBotCard({image,cardbg,shadow,goToPage}) {
    return (
      <div className={`hover:cursor-pointer transform hover:scale-105 transition-all duration-300 w-[328px] h-[589px]  flex justify-between flex-col items-center  sm:w-[238px] hover:cursor-pointer sm:h-[442px] sm:justify-around ${cardbg} ${shadow}`}onClick={goToPage}>
        <div className=" w-[90%] h-[427px] bg-yellow-500 text-6xl font-bold sm:w-[100%] sm:text-2xl sm:h-[280px]">
          <img className="h-full w-full object-cover" src={image}/>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start  w-[80%]">
          <h5 className="text-[#252B42] font-bold text-base">Grafic Design</h5>
          <h5 className="text-[#737373] text-sm">English Departmant</h5>
          <h5 className="font-bold text-[#BDBDBD] text-base">$16.48<span className="text-[#23856D] ml-1">$6.48</span></h5>
        </div>
      </div>
    );
  }
  