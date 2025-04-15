import ContactTopSection from "../components/sections/conctactTopSection/ContactTopSection";
import ContactBotSection from "../components/sections/contactBotSection/ContactBotSection";
import ContactMidSection from "../components/sections/contactMidSection/ContactMidSection";

export default function ContactPage() {
  return (
    <main>
     <ContactTopSection/>
     <ContactMidSection/>
     <ContactBotSection/>
    </main>
  );
}
