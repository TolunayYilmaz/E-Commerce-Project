import TeamPageCard from "../../Card/TeamPageCard";
import teamCard from "../../../assets/images/teamCard.jpg"
export default function TeamPageMidList(){

    const cards=[teamCard,teamCard,teamCard,teamCard,teamCard,teamCard,teamCard,teamCard,teamCard]
    return(<div className="flex flex-col gap-5 w-full sm:flex-row sm:justify-center sm:flex-wrap 2xl:w-[75%]">
    {cards.map((item,index)=>
      <TeamPageCard key={index} image={item}/>
    )}</div>);
}