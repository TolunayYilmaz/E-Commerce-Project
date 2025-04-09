import FooterButton from "./FooterButton";

export default function FooterHeader() {
  return (
    <div className="w-[239px] h-[302px] mx-auto  flex flex-col justify-around items-start">
     
     <div className="text-white">
        <h3 className="font-bold text-2xl w-[239px]" >Consulting Agency For Your Business</h3>
        <p className="font-normal text-sm w-[183px]">the quick fox jumps over the lazy dog</p>
      </div>
     <FooterButton buttonName={"Contact Us"}/>
    </div>
  );
}
