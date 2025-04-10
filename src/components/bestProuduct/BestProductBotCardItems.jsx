import BestProductBotCard from "./BestProductBotCard";

export default function BestProductBotCardItems() {
  const images = ["images1", "images2", "images3", "images4"];
  return (
    <div className="pb-[125px]  flex flex-col gap-y-10 sm:w-full sm:flex-row sm:flex-wrap justify-between" >
      {images.map((item, index) => (
        <BestProductBotCard key={index} ImagePath={item} />
      ))}
    </div>
  );
}
