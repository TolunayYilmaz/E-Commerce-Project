import TeamBotSection from "../components/sections/teamBotSection/TeamBotSection";
import TeamMidSection from "../components/sections/teamMidSection/TeamMidSection";
import TeamHead from "../components/sections/teamTopSection/TeamHead";

export default function TeamPage(){

    return(<main className="flex flex-col items-center gap-y-8 bg-[#FAFAFA] sm:bg-white py-20 ">
    <TeamHead/>
    <TeamMidSection/>
    <TeamBotSection/>
    </main>);
}