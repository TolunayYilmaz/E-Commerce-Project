import TeamTopImg from "../../Image/TeamTopImg";
import team from "../../../assets/images/team1.jpg";
import team2 from "../../../assets/images/team2.jpg";
export default function TeamPageCardList() {
  const cards = [team2, team, team2, team];
  return (
    <div>
      <div className="h-[530px]">
        <TeamTopImg image={team} />
      </div>
      <div className="flex flex-wrap ">
        {cards.map((item, index) => {
          return (
            <div className="w-[49%] h-[260px] mx-auto my-2">
              <TeamTopImg key={index} image={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
