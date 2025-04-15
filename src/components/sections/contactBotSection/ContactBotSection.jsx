import ContactButton from "../../Button/ContactButton";
import { Redo } from "lucide-react";
export default function ContactBotSection() {
  return (
    <section className="flex flex-col items-center h-[440px] justify-around mb-20">
      <div className="flex flex-col items-center">
        <Redo
          size={80}
          strokeWidth={1}
          color="#23A6F0"
          className="rotate-[60deg]"
        />
        <h5 className="text-base font-bold text-[#252B42]">WE Can't WAIT TO MEET YOU</h5>
      </div>
      <h1 className="font-bold text-[58px] text-[#252B42]">Let’s Talk</h1>
      <ContactButton
        px={"w-[186px]"}
        py={"h-[52px]"}
        buttonName={"Try it free now"}
        bgColor={"bg-[#23A6F0]"}
        textColor={"text-white"}
        textSize={"text-sm"}
      />
    </section>
  );
}
