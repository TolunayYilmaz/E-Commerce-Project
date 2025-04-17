import ContactTopSection from "../conctactTopSection/ContactTopSection";
import about from "../../../assets/images/about.png";
import ContactButton from "../../Button/ContactButton";

export default function AboutHead() {
  return (
    <section className=" bg-[#FAFAFA] sm:bg-white w-full">
      <ContactTopSection
        image={about}
        header1={"ABOUT COMPANY"}
        header2={"ABOUT US"}
        heigthPhone={"h-[500px]"}
        heigthLg={"h-[321px]"}
        child={
          <ContactButton
            px={"w-[186px]"}
            py={"h-[52px]"}
            buttonName={"Get Quote Now"}
            bgColor={"bg-[#23A6F0]"}
            textColor={"text-white"}
            textSize={"text-sm"}
          />
        }
      />
    </section>
  );
}
