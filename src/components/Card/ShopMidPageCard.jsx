export default function ShopMidPageCard({ product, goToPage }) {
  const coupon = 0.2;
  return (
    
    <div
      className="w-[328px] relative z-0 h-[615px] flex justify-around flex-col items-center sm:w-[188px] lg:w-[265px] 2xl:w-[12.7vw] sm:h-[324px] sm:gap-[10px] hover:cursor-pointer transform hover:scale-105 transition-all duration-300 origin-center"
      onClick={goToPage}
    >
  
      <div className=" w-[90%] text-6xl font-bold  flex flex-col justify-end  sm:w-[100%] sm:h-[54%]">
        {product.images?.[0]?.url && (
          <img src={product.images[0].url} alt="Product" /> //çözüldü
        )}
      </div>
      <div className="flex flex-col  justify-between items-center  sm:h-[50%]">
        <h5 className="text-[#252B42] font-bold text-base">{product.name}</h5>
        <h5 className="text-[#737373] text-sm text-center">
          {product.description}
        </h5>
        <h5 className="font-bold text-[#BDBDBD] text-base">
          ${(product.price * coupon + product.price).toFixed(2)}
          <span className="text-[#23856D] ml-1">${product.price}</span>
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
