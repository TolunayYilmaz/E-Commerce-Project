import FooterBot from "../components/sections/footerSection/FooterBot.jsx";
import FooterCardItems from "../components/CardList/footerList/FooterCardItems.jsx";
import FooterHeader from "../components/sections/footerSection/FooterHeader.jsx";

export default function Footer() {
  return (
    <footer className="bg-[#252B42] w-full h-auto pb-9 pt-2 sm:pb-0 sm:flex sm:flex-col sm:gap-20">
      <FooterHeader />
      <FooterCardItems />
      <FooterBot />
    </footer>
  );
}
