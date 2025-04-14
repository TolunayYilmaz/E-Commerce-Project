import ShopPageCard from "../../Card/ShopPageCard.jsx";
export default function ShopPageCardItems({ cards }) {
  return (
    <div className="flex flex-col gap-3  sm:gap-0 sm:w-[75.5%] sm:flex-row sm:justify-between ">
      {cards.map((item) => (
        <ShopPageCard key={item} image={item} />
      ))}
    </div>
  );
}
