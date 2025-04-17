import TeamPageCard from "../../Card/TeamPageCard";

export default function TeamPageMidList({ cards }) {
  return (
    <div className="flex flex-col gap-5 w-full sm:flex-row sm:justify-center sm:flex-wrap 2xl:w-[75%]">
      {cards.map((item, index) => (
        <TeamPageCard key={index} image={item.image} profileLink={item.profileLink} userName={item.userName} proffesion={item.proffesion}/>
      ))}
    </div>
  );
}
