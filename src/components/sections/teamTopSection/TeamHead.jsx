import TeamPageCardList from "../../CardList/teamPageList/TeamPageCardList.jsx";
import HeaderContentBlock from "../headerSection/HeaderContentBlock.jsx";
export default function TeamHead() {
  return (
    <section className=" bg-[#FAFAFA] sm:bg-white w-full">
     <div className="flex flex-col w-[316px] items-center mx-auto sm:w-full">
     <h5 className="text-base font-bold text-[#737373]">WHAT WE DO</h5>
     <h2 className="text-[40px] font-bold text-[#252B42] text-center sm:w-full ">Innovation tailored for you</h2>
     </div>
      <HeaderContentBlock pageName={"Team"} team={true}/>
      <TeamPageCardList/>
    </section>
  );
}
