import PopularProductBotCard from "./PopularProductBotCard";

export default function PopularProductBotCards() {
  const numbers = [1, 2, 3, 4];
  return (
    <div className="flex flex-col gap-y-3 items-end pt-3 pb-20 sm:flex-row">
      {numbers.map((item, index) => (
        <PopularProductBotCard key={index} number={item} />
      ))}
    </div>
  );
}
