export default function Pagination() {
  return (
    <div>
      <button className="bg-[#F3F3F3] text-[#BDBDBD] font-bold text-sm border-[#BDBDBD] border rounded-s-md h-[74px] w-[83px]">
        First
      </button>
      <button className="bg-white text-[#23A6F0] text-sm font-bold border-[#BDBDBD] border h-[74px] w-[46px]">
        1
      </button>
      <button
        className="bg-[#23A6F0] text-white text-sm font-bold border-[#BDBDBD] border-t border-b
         h-[74px] w-[46px]"
      >
        2
      </button>
      <button className="bg-white text-[#23A6F0] text-sm font-bold border-[#BDBDBD] border h-[74px] w-[46px]">
        3
      </button>
      <button className="bg-white text-[#23A6F0] text-sm font-bold border-[#BDBDBD] border rounded-e-md h-[74px] w-[83px]">
        Next
      </button>
    </div>
  );
}
