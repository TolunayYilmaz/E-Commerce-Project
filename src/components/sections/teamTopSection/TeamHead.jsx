import TeamPageCardList from "../../CardList/teamPageList/TeamPageCardList.jsx";
import HeaderContentBlock from "../headerSection/HeaderContentBlock.jsx";
export default function TeamHead() {
  return (
    <section className="pt-20  bg-[#FAFAFA] sm:bg-white">
     <div className="flex flex-col w-[316px] items-center mx-auto ">
     <h5 className="text-base font-bold text-[#737373]">WHAT WE DO</h5>
     <h2 className="text-[40px] font-bold text-[#252B42] text-center">Innovation tailored for you</h2>
     </div>
      <HeaderContentBlock pageName={"Team"} team={true}/>
      <TeamPageCardList/>
    </section>
  );
}
