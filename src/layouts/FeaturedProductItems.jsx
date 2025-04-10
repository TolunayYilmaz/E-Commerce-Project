import FeaturedProductCardItems from "../components/featuredProduct/FeaturedProductCardItems";

export default function FeaturedProductItems() {
  return (
    <div className="flex flex-col gap-20 py-20">
      <div className="flex flex-col items-center gap-1">
        <h6 className="font-bold text-[#23A6F0]">Practica Advice</h6> 
        <h2 className="w-[240px] text-center text-[40px] font-bold text-[#252B42] sm:w-[400px]">Featured Products</h2>
      </div>
      <FeaturedProductCardItems />
    </div>
  );
}
