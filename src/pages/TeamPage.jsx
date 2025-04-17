import TeamBotSection from "../components/sections/teamBotSection/TeamBotSection";
import TeamMidSection from "../components/sections/teamMidSection/TeamMidSection";
import TeamHead from "../components/sections/teamTopSection/TeamHead";
import teamCard from "../assets/images/teamCard.jpg";
import profile from "../assets/images/profile.jpg";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpg";
export default function TeamPage() {
  const cards = [
 {
   image:profile2,
   userName:"Emre Şahiner",
   proffesion:"Software Engineer",
   profileLink:"https://www.linkedin.com/in/emresahinerjourneyapp/"
 },
 {
   image:profile3,
   userName:"Fahri Yılmaz",
   proffesion:"Senior Strategical Procurement Engineer",
   profileLink:"https://www.linkedin.com/in/fahriyilmaz/"
 },
 {
   image:profile,
   userName:"Tolunay Yılmaz",
   proffesion:"Full Stack Developer",
   profileLink:"https://www.linkedin.com/in/tolunay-y%C4%B1lmaz-197b10202/"
 },
{
  image:teamCard,
  userName:"None",
  proffesion:"None",
  profileLink:"https://www.linkedin.com/in/tolunay-y%C4%B1lmaz-197b10202/"
},
{
  image:teamCard,
  userName:"None",
  proffesion:"None",
  profileLink:"https://www.linkedin.com/in/tolunay-y%C4%B1lmaz-197b10202/"
},
{
  image:teamCard,
  userName:"None",
  proffesion:"None",
  profileLink:"https://www.linkedin.com/in/tolunay-y%C4%B1lmaz-197b10202/"
},
{
  image:teamCard,
  userName:"None",
  proffesion:"None",
  profileLink:"https://www.linkedin.com/in/tolunay-y%C4%B1lmaz-197b10202/"
},
{
  image:teamCard,
  userName:"None",
  proffesion:"None",
  profileLink:"https://www.linkedin.com/in/tolunay-y%C4%B1lmaz-197b10202/"
},
{
  image:teamCard,
  userName:"None",
  proffesion:"None",
  profileLink:"https://www.linkedin.com/in/tolunay-y%C4%B1lmaz-197b10202/"
}
  ];
  return (
    <main className="flex flex-col items-center gap-y-8 bg-[#FAFAFA] sm:bg-white py-20 ">
      <TeamHead />
      <TeamMidSection cards={cards} />
      <TeamBotSection />
    </main>
  );
}
