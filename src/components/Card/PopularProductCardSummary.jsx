
export default function PopularProductCardSummary({image,goToPage,mostProduct}) {
    return (
      <div className="flex flex-col justify-between items-center gap-16 py-12  sm:bg-[#FAFAFA] sm:h-[649px] sm:w-[400px] hover:cursor-pointer transform hover:scale-105 transition-all duration-300" onClick={goToPage}>
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl font-bold">MOST POPULAR</h3>
          <p className="mx-auto w-[70%] text-center text-sm text-[#737373] font-normal">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.s
          </p>
        </div>
        <div className="w-[348px] h-[226px] bg-slate-400 sm:h-[260px]">
           <img className=" w-full h-full object-cover  object-[center_5%]" src={image}/>
        </div>
        <div className="flex flex-col items-center ">
          <p className="text-sm font-bold">{mostProduct?.name}</p>
         
  
          <h5 className="font-bold text-[#BDBDBD] text-base">
            ${((mostProduct?.price*0.2)+mostProduct?.price).toFixed(2)}<span className="text-[#23856D] ml-1">${mostProduct?.price}</span>
          </h5>
  
        </div>
      </div>
    );
  }
  