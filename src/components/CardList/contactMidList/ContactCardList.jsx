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
  const cards2 = [
    {
      logo: <Phone size={72} color="#23A6F0" />,
      textColor: "text-black",
      backColor: "",
      width: "w-[327px]",
      height: "h-[343px]",
    },
    {
      logo: <MapPin size={72} color="#23A6F0" />,
      textColor: "text-white",
      backColor: "bg-[#252B42]",
      width: "w-[327px]",
      height: "h-[403px]",
    },
    {
      logo: <Send size={72} color="#23A6F0" />,
      textColor: "text-black",
      backColor: "",
      width: "w-[327px]",
      height: "h-[343px]",
    },
  ];

  return (
    <div className="flex flex-col gap-y-[60px] items-center py-[45px] bg-[#FAFAFA]">
      <div className="w-[300px] text-center sm:w-[44%]">
        <h6 className="text-sm font-bold ">VISIT OUR OFFICE</h6>
        <h2 className="text-[40px] font-bold  ">
          We help small businesses with big ideas
        </h2>
      </div>
    <div className="sm:hidden">
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
    <div className="hidden sm:flex sm:justify-center sm:items-center sm:flex-col lg:flex-row">
    {cards2.map((item, index) => (
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
    </div>
  );
}
