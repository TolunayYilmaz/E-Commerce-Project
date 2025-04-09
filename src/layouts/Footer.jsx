import FooterBot from "../components/footer/FooterBot";
import FooterCardItems from "../components/footer/FooterCardItems";
import FooterHeader from "../components/footer/FooterHeader";

export default function Footer() {
  return (
    <footer className="bg-[#252B42] w-full h-auto pb-9 pt-2">
      <FooterHeader />
      <FooterCardItems />
      <FooterBot />
    </footer>
  );
}
