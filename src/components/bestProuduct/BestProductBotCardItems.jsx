import BestProductBotCard from "./BestProductBotCard";

export default function BestProductBotCardItems() {
  const images = ["images1", "images2", "images3", "images4"];
  return (
    <div className="pb-[125px] flex flex-col gap-y-10 sm:flex-row sm:gap-x-10">
      {images.map((item, index) => (
        <BestProductBotCard key={index} ImagePath={item} />
      ))}
    </div>
  );
}
