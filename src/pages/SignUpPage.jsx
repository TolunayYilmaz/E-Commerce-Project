import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "../components/Form/Form";
import SignUpTopSection from "../components/sections/signUpTopSection/SignUpTopSection";
import LogoCompaniesSection from "../components/sections/logoCompanySection/LogoCompaniesSection";
import logo1 from "../assets/logos/logo-1.png"
import logo2 from "../assets/logos/logo-2.png"
import logo3 from "../assets/logos/logo-3.png"
import logo4 from "../assets/logos/logo-4.png"
import logo5 from "../assets/logos/logo-5.png"
import logo6 from "../assets/logos/logo-6.png"

export default function SignUpPage() {

const logos=[logo1,logo2,logo3,logo4,logo5,logo6]
  return (
    <main className="w-full flex  flex-col py-4">
   <SignUpTopSection/>
    <Form/>
    <LogoCompaniesSection logos={logos}/>
    </main>
  );
}
