import ImageBackground from "../../Image/ImageBackground";

export default function ContactTopSection({ image, child,header1,header2,heigthPhone,heigthLg }) {
  return (
    <section className="flex flex-col items-center  sm:w-[80%] sm:justify-between sm:flex-row sm:mx-auto">
      <div className={`text-[#252B42] flex flex-col items-center  justify-around w-[330px]  ${heigthPhone} sm:w-[600px]  sm:${heigthLg} sm:items-start `}>
        <h5 className="text-base font-bold">{header1}</h5>
        <h2 className="font-bold w-[70%] text-center sm:hidden">
          {header2}
        </h2>
        <h2 className=" hidden font-bold w-[70%]  sm:block sm:w-auto sm:text-start">
          {header2}
        </h2>
        <h4 className="font-normal text-xl text-[#737373] w-[80%] text-center sm:hidden ">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </h4>
        <h4 className="hidden sm:block font-normal text-xl text-[#737373] w-[80%] text-start ">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </h4>
        {child}
      </div>
    <ImageBackground image={image}/>
    </section>
  );
}
