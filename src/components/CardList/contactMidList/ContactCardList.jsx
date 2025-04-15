import ContactCard from "../../Card/ContactCard";
import { Phone, MapPin, Send } from "lucide-react";
export default function ContactCardList() {
  const cards = [
    {
      logo: <Phone size={72} color="#23A6F0" />,
      textColor: "text-black",
      backColor: "bg-white",
      width: "w-[327px]",
      height: "h-[333px]",
    },
    {
      logo: <MapPin size={72} color="#23A6F0" />,
      textColor: "text-white",
      backColor: "bg-[#252B42]",
      width: "w-[327px]",
      height: "h-[393px]",
    },
    {
      logo: <Send size={72} color="#23A6F0" />,
      textColor: "text-black",
      backColor: "bg-white",
      width: "w-[327px]",
      height: "h-[333px]",
    },
  ];

  return (
    <div className="flex flex-col gap-y-[60px] items-center py-[45px] bg-[#FAFAFA]">
      <div className="w-[300px] text-center">
        <h6 className="text-sm font-bold">VISIT OUR OFFICE</h6>
        <h2 className="text-[40px] font-bold">
          We help small businesses with big ideas
        </h2>
      </div>
      {cards.map((item, index) => (
        <ContactCard
          key={index}
          logo={item.logo}
          width={item.width}
          textColor={item.textColor}
          backColor={item.backColor}
          height={item.height}
        />
      ))}
    </div>
  );
}
