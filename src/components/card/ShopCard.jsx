export default function ShopCard({headText,midTextFirst,midTextSec,botText,borderRight}) {
  return (
    <div className={`h-[232px] w-[332px] bg-white border-[#ECECEC] border-b border-t  pl-8 flex flex-col justify-center gap-3 ${borderRight&& "border-r"}`}>
      <h4 className="text-sm text-[#737373]">{headText}</h4>
      <div>
        <h3 className="text-2xl font-bold">{midTextFirst}</h3>
        <h3 className="text-2xl font-bold">{midTextSec}</h3>
      </div>
      <h5 className="text-xs">{botText}</h5>
    </div>
  );
}
