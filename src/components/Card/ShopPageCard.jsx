export default function ShopPageCard({image}) {
  return (
    <div className="relative h-[300px] w-[332px]  text-white flex flex-col justify-center items-center gap-2 overflow-hidden sm:w-[205px] sm:h-[223px]">
      <img
        src={image}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-75"
      />
  
      <div className="relative z-20 text-center">
        <h5 className="text-base font-bold mt-16">CLOTHS</h5>
        <h5 className="text-sm font-bold">5 Items</h5>
      </div>
    </div>
  );
}
