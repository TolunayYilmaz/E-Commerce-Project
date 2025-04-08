export default function BestProductCard({ImagePath}) {
  return (
    <div className="w-[376px] h-[589px]  flex justify-between flex-col items-center">
      <div className=" w-full h-[427px] bg-yellow-500 text-6xl font-bold">{ImagePath}</div>
      <div className="flex flex-col gap-2 justify-center">
        <h5 className="text-[#252B42] font-bold text-base">Grafic Design</h5>
        <h5 className="text-[#737373] text-sm">English Departmant</h5>
        <h5 className="font-bold text-[#BDBDBD] text-base">$16.48<span className="text-[#23856D] ml-1">$6.48</span></h5>
      </div>
    </div>
  );
}
