import TeamPageCard from "../../Card/TeamPageCard";
import teamCard from "../../../assets/images/teamCard.jpg"
export default function TeamPageMidList(){

    const cards=[teamCard,teamCard,teamCard,teamCard,teamCard,teamCard,teamCard,teamCard,teamCard]
    return(<>
    {cards.map((item,index)=>
        <TeamPageCard key={index} image={item}/>
    )}</>);
}