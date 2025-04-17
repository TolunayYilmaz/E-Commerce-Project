import TeamTopImg from "../../Image/TeamTopImg";
import team from "../../../assets/images/team1.jpg";
import team2 from "../../../assets/images/team2.jpg";
import team3 from "../../../assets/images/team3.jpg";
import team4 from "../../../assets/images/team4.jpg";
import team5 from "../../../assets/images/team5.jpg";
export default function TeamPageCardList() {
  const cards = [team2, team3, team4, team5];
  return (
    <div className="flex  flex-col gap-y-2 sm:w-full sm:flex-row sm:justify-center ">
    <div className="sm:w-[700px] h-[530px] ">
   <TeamTopImg image={team} />
    </div>
  
    <div className="flex flex-wrap gap-2 justify-center sm:w-[51%]  sm:gap-0 ">
      {cards.map((item, index) => {
        return (
          <div key={index} className="w-[48%] h-[260px]  2xl:w-[320px]">
         <TeamTopImg image={item} />
          </div>
        );
      })}
    </div>
  </div>

  );
}
