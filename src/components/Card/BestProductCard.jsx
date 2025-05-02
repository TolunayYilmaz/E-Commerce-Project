export default function BestProductCard({ Image, goToPage }) {
  return (
    <div
      className="w-[376px] h-[438px] flex justify-between flex-col items-center sm:w-[188px] lg:w-[188px] 2xl:w-[12.7vw] sm:h-[324px] sm:gap-[10px] hover:cursor-pointer transform hover:scale-105 transition-all duration-300"
      onClick={goToPage}
    >
      <div className="w-[90%] text-6xl font-bold h-[350px] flex flex-col justify-end sm:w-[100%] sm:h-[75%]">
        <img
          src={Image?.images?.[0]?.url || "https://via.placeholder.com/150"}
          alt={Image?.name}
          className="object-cover object-top w-full h-full mx-auto sm:h-full sm:w-[95%]"
        />
      </div>
      <div className="flex flex-col gap-2 justify-center items-center sm:h-[50%]">
        <h5 className="text-[#252B42] font-bold text-base">{Image.name}</h5>
        <h5 className="text-[#737373] text-sm">
          {Image?.description?.split(" ").slice(0, 3).join(" ")}
        </h5>
        <h5 className="font-bold text-[#BDBDBD] text-base">
          ${((Image.price * 0.2) + Image.price).toFixed(2)}
          <span className="text-[#23856D] ml-1">${Image.price}</span>
        </h5>
      </div>
    </div>
  );
}
