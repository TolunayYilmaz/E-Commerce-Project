import AboutMidSection from "../components/sections/aboutMidSection/AboutMidSection";
import AboutHead from "../components/sections/aboutTopSection/AboutHead";
import teamCard from "../assets/images/teamCard.jpg";
import TeamMidSection from "../components/sections/teamMidSection/TeamMidSection";
import AboutBotSection from "../components/sections/aboutBotSection/AboutBotSection";
import LogoCompaniesSection from "../components/sections/logoCompanySection/LogoCompaniesSection";


import logo1 from "../assets/logos/logo-1.png"
import logo2 from "../assets/logos/logo-2.png"
import logo3 from "../assets/logos/logo-3.png"
import logo4 from "../assets/logos/logo-4.png"
import logo5 from "../assets/logos/logo-5.png"
import logo6 from "../assets/logos/logo-6.png"
export default function AboutUsPage() {
  const cards = [teamCard, teamCard, teamCard];
 const logos=[logo1,logo2,logo3,logo4,logo5,logo6]
  return (
    <main >
      <div className="flex flex-col gap-20 items-center">
      <AboutHead />
      <AboutMidSection />
      
      <TeamMidSection cards={cards}/>
      </div>
      <AboutBotSection logos={logos}/>
    </main>
  );
}
