import FooterBot from "../components/footer/FooterBot";
import FooterCardItems from "../components/footer/FooterCardItems";
import FooterHeader from "../components/footer/FooterHeader";

export default function Footer() {
  return (
    <footer className="bg-[#252B42] w-full h-auto pb-9 pt-2 sm:pb-0 sm:flex sm:flex-col sm:gap-20">
      <FooterHeader />
      <FooterCardItems />
      <FooterBot />
    </footer>
  );
}
