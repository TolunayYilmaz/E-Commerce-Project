import Logo from "../../Image/Logo.jsx"

export default function LogoItems({logos}) {

  return (
    <div className="pb-[125px] flex flex-col gap-y-10 items-center justify-center  sm:w-[50%] md:w-[75%] md:justify-between  sm:mx-auto sm:flex-wrap sm:flex-row sm:gap-x-8 xl:justify-between sm:pb-3">
      {logos.map((item, index) => (
      <Logo key={index} logo={item} />
      ))}
    </div>
  );
}
