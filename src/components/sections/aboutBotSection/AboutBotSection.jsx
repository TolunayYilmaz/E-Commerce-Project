import ContactButton from "../../Button/ContactButton";
import LogoCompaniesSection from "../logoCompanySection/LogoCompaniesSection";

export default function AboutBotSection({ logos }) {
  return (
    <section className="bg-[#FAFAFA] pt-20">
    <div className="w-[318px] h-[240px] flex flex-col justify-between mx-auto text-center items-center">
    <h2 className="text-[#252B42] font-bold text-[40px] w-[287px] ">Big Companies Are Here</h2>
     <p className="text-sm text-[#737373]">
     Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
     </p>
    </div>
      <LogoCompaniesSection logos={logos} />

      <div className="w-full h-[520px] bg-[#2A7CC7] text-white text-center flex flex-col items-center justify-center gap-3">
        <h5 className="font-bold text-base ">WORK WITH US</h5>
        <h2 className="text-[40px] font-bold w-[274px]">Now Let’s grow Yours</h2>
        <p className="text-sm w-[274px]">The gradual accumulation of information about atomic and 
        small-scale behavior during the first quarter of the 20th </p>
         <ContactButton
                px={"w-[130px]"}
                py={"h-[52px]"}
                buttonName={"Button"}
                bgColor={""}
                textColor={"text-white"}
                textSize={"text-sm"}
                borderColor={"border-white"}
              />

      </div>
    </section>
  );
}
