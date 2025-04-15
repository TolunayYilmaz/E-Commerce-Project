
export default function PopularProductCardSummary({image,goToPage}) {
    return (
      <div className="flex flex-col justify-between items-center gap-16 py-12  sm:bg-[#FAFAFA] sm:h-[649px] sm:w-[400px] hover:cursor-pointer" onClick={goToPage}>
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl font-bold">MOST POPULAR</h3>
          <p className="mx-auto w-[70%] text-center text-sm text-[#737373] font-normal">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
        <div className="w-[348px] h-[226px] bg-slate-400 sm:h-[300px]">
           <img className=" w-full h-full object-cover" src={image}/>
        </div>
        <div className="flex flex-col items-center gap-4 ">
          <p className="text-sm font-bold">English Departmant</p>
         
  
          <h5 className="font-bold text-[#BDBDBD] text-base">
            $16.48<span className="text-[#23856D] ml-1">$6.48</span>
          </h5>
  
        </div>
      </div>
    );
  }
  