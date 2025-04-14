import FooterButton from "../../Button/FooterButton.jsx";

export default function FooterHeader() {
  return (
    <section className="w-[239px] h-[302px] mx-auto  flex flex-col justify-around items-start sm:flex-row sm:w-[75vw] sm:justify-between sm:h-auto sm:mt-8">
      <div className="text-white">
        <h3 className="font-bold text-2xl w-[239px] sm:w-auto">
          Consulting Agency For Your Business
        </h3>
        <p className="font-normal text-sm w-[183px] sm:w-auto">
          the quick fox jumps over the lazy dog
        </p>
      </div>
      <FooterButton buttonName={"Contact Us"} />
    </section>
  );
}
