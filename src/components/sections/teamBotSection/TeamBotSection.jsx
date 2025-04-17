import ContactButton from "../../Button/ContactButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
export default function TeamBotSection() {
  return (
    <section className="flex  flex-col justify-center items-center gap-y-5 w-[332px] py-4 sm:w-[547px] bg-">
      <div className="flex flex-col items-center sm:flex-row sm:w-full sm:justify-around ">
      <h2 className="text-[38px] font-bold  text-[#252B42]">Start your </h2>
      <h2 className="text-[38px] font-bold  text-[#252B42]">14 days free trial</h2>

      </div>
      <p className="text-sm text-center text-[#737373] font-normal">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent.
      </p>
      <ContactButton
        px={"w-[186px]"}
        py={"h-[52px]"}
        buttonName={"Try it free now"}
        bgColor={"bg-[#23A6F0]"}
        textColor={"text-white"}
        textSize={"text-sm"}
      />
      <div className=" flex gap-x-[20px] ">
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-[#21A6DF] w-6 h-6 sm:w-[30px] sm:h-[30px]"
        />
        <FontAwesomeIcon
          icon={faSquareFacebook}
          className="text-[#335BF5] w-6 h-6 sm:w-[30px] sm:h-[30px]"
        />

        <FontAwesomeIcon
          icon={faInstagram}
          className="text-[#000000] w-6 h-6 sm:w-[30px] sm:h-[30px]"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-[#0A66C2] w-6 h-6 sm:w-[30px]  sm:h-[30px]"
        />
      </div>
    </section>
  );
}
