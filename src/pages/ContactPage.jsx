import ContactTopSection from "../components/sections/conctactTopSection/ContactTopSection";
import ContactBotSection from "../components/sections/contactBotSection/ContactBotSection";
import ContactMidSection from "../components/sections/contactMidSection/ContactMidSection";
import contact from "../assets/images/contact.png"
import ContactInfo from "../components/sections/conctactTopSection/ContactInfoc";
export default function ContactPage() {
  return (
    <main>
     <ContactTopSection image={contact} child={<ContactInfo/>} header1={"CONTACT US"} header2={"Get in touch today!"} heigthPhone={"h-[590px]"} heigthLg={"h-[518px]"}/>
     <ContactMidSection/>
     <ContactBotSection/>
    </main>
  );
}
