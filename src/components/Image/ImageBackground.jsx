export default function ImageBackground({image}){
    return(  <div className="relative flex justify-center items-center overflow-hidden pt-3 lg:w-[60%] xl:w-full 2xl:w-[50%]">
        <div className="bg-[#FFE9EA] rounded-full w-[290px] h-[290px] absolute sm:w-[500px] sm:h-[500px] z-0"></div>

        <img
          className="w-[94%] ml-2 h-[440px] object-cover sm:w-full sm:h-[600px] relative z-10"
          src={image}
          alt="Team"
        />

        <div className="bg-[#FFE9EA] rounded-full w-[35px] h-[35px] absolute top-[10%] right-[80%] z-0"></div>
        <div className="bg-[#977DF4] rounded-full w-[9px] h-[9px] absolute top-[70%] right-[90%] z-0"></div>
        <div className="bg-[#977DF4] rounded-full w-[9px] h-[9px] absolute top-[20%] right-[10%] z-0"></div>
        <div className="bg-[#FFE9EA] rounded-full w-[18.5px] h-[18.5px] absolute top-[45%] right-[10%] z-0"></div>
      </div>);
}