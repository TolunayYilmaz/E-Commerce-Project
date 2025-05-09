import React from "react";
import SignUpTopSection from "../components/sections/signUpTopSection/SignUpTopSection";
import LogoCompaniesSection from "../components/sections/logoCompanySection/LogoCompaniesSection";
import logo1 from "../assets/logos/logo-1.png";
import logo2 from "../assets/logos/logo-2.png";
import logo3 from "../assets/logos/logo-3.png";
import logo4 from "../assets/logos/logo-4.png";
import logo5 from "../assets/logos/logo-5.png";
import logo6 from "../assets/logos/logo-6.png";
import SignUpMidSection from "../components/sections/signUpMidSection/SignUpMidSection";

import profile from "../assets/images/profile.jpg";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpg";
import TeamMidSection from "../components/sections/teamMidSection/TeamMidSection";

export default function SignUpPage() {
  const cards = [
    {
      image: profile2,
      userName: "Emre Şahiner",
      proffesion: "Software Engineer",
      profileLink: "https://www.linkedin.com/in/emresahinerjourneyapp/",
    },
    {
      image: profile3,
      userName: "Fahri Yılmaz",
      proffesion: "Senior Strategical Procurement Engineer",
      profileLink: "https://www.linkedin.com/in/fahriyilmaz/",
    },
    {
      image: profile,
      userName: "Tolunay Yılmaz",
      proffesion: "Full Stack Developer",
      profileLink: "https://www.linkedin.com/in/tolunay-y%C4%B1lmaz-197b10202/",
    },
  ];
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  return (
    <main className="w-full flex  flex-col gap-y-5">
      <SignUpTopSection />
      <SignUpMidSection />
   
      <LogoCompaniesSection logos={logos} />
    </main>
  );
}
