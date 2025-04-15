import { Phone, MapPin, Mail } from "lucide-react";
import ContactButton from "../Button/ContactButton";

export default function ContactCard({
  logo,
  backColor,
  width,
  height,
  textColor,
}) {
  return (
    <div
      className={`flex flex-col items-center ${width} ${height} justify-center gap-y-2 ${backColor}`}
    >
      {logo}
      <div className={`text-center ${textColor}`}>
        <h6 className="text-sm font-bold">georgia.young@example.com</h6>
        <h6 className="text-sm font-bold">georgia.young@ple.com</h6>
      </div>
      <h5 className={`text-base font-bold ${textColor}`}>Get Support</h5>
      <ContactButton
        px={"w-[161px]"}
        py={"h-[44px]"}
        buttonName={"Submit Request"}
        textSize={"text-sm"}
        textColor={"text-[#23A6F0]"}
      />
    </div>
  );
}

{

}
