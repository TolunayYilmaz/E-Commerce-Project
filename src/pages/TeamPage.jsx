import TeamBotSection from "../components/sections/teamBotSection/TeamBotSection";
import TeamMidSection from "../components/sections/teamMidSection/TeamMidSection";
import TeamHead from "../components/sections/teamTopSection/TeamHead";
import teamCard from "../assets/images/teamCard.jpg";
export default function TeamPage() {
  const cards = [
    teamCard,
    teamCard,
    teamCard,
    teamCard,
    teamCard,
    teamCard,
    teamCard,
    teamCard,
    teamCard,
  ];
  return (
    <main className="flex flex-col items-center gap-y-8 bg-[#FAFAFA] sm:bg-white py-20 ">
      <TeamHead />
      <TeamMidSection cards={cards} />
      <TeamBotSection />
    </main>
  );
}
