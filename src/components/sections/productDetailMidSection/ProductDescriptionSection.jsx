import { ChevronRight } from "lucide-react";

export default function ProductDescriptionSection({product}) {
  return (
    <section className="flex flex-col gap-y-6 ">
      <div className="text-sm font-bold  flex justify-center gap-x-2 sm:gap-x-28">
        <a href="" className="text-[#737373] no-underline">
          Description
        </a>
        <a href="" className="text-[#737373] no-underline">
          Additional Information
        </a>
        <a href="" className="text-[#737373] no-underline">
          Reviews <span className="text-[#23856D]">(0)</span>
        </a>
      </div>
      <div className="w-[90%] mx-auto h-px bg-[#BDBDBD]"></div>
      <div className="w-[80%] mx-auto flex flex-col  gap-y-16 sm:w-[90%] md:w-[85%] lg:w-[80%]  sm:flex-row sm:justify-around ">
        <img
          src={product.images[0]?.url}
          alt="image 3"
          className="h-[292px] rounded-md w-full object-cover sm:h-[342px] sm:w-[282px] lg:h-[392px] lg:w-[332px]"
        />
        <div className="w-full sm:w-[332px] sm:mx-2">
          <div>
            <h3 className="font-bold text-2xl sm:mb-10">the quick fox jumps over </h3>
            <p className="text-sm text-[#737373] font-normal">
              {product.description}
            </p>
            <p className="text-sm text-[#737373] font-normal">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-sm text-[#737373] font-normal">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-4 sm:items-center sm:w-[332px]">
          <div>
            <h3 className="font-bold text-2xl  sm:mb-10">the quick fox jumps over </h3>
           <div>
           <h6 className="text-[#737373] font-bold text-sm flex gap-x-2 items-center justify-start">
              <ChevronRight size={24} color="#737373" strokeWidth={1.25} />
              the quick fox jumps over the lazy dog
            </h6>
           </div>
            <h6 className="text-[#737373] font-bold text-sm flex gap-x-2 items-center justify-start">
              <ChevronRight size={24} color="#737373" strokeWidth={1.25} />
              the quick fox jumps over the lazy dog
            </h6>
            <h6 className="text-[#737373] font-bold text-sm flex gap-x-2 items-center justify-start">
              <ChevronRight size={24} color="#737373" strokeWidth={1.25} />
              the quick fox jumps over the lazy dog
            </h6>
            <h6 className="text-[#737373] font-bold text-sm flex gap-x-2 items-center justify-start">
              <ChevronRight size={24} color="#737373" strokeWidth={1.25} />
              the quick fox jumps over the lazy dog
            </h6>
          </div>
          <div>
            <h3 className="font-bold text-2xl  sm:mb-10">the quick fox jumps over </h3>
            <h6 className="text-[#737373] font-bold text-sm flex gap-x-2 items-center justify-start">
              <ChevronRight size={24} color="#737373" strokeWidth={1.25} />
              the quick fox jumps over the lazy dog
            </h6>
            <h6 className="text-[#737373] font-bold text-sm flex gap-x-2 items-center justify-start">
              <ChevronRight size={24} color="#737373" strokeWidth={1.25} />
              the quick fox jumps over the lazy dog
            </h6>
            <h6 className="text-[#737373] font-bold text-sm flex gap-x-2 items-center justify-start">
              <ChevronRight size={24} color="#737373" strokeWidth={1.25} />
              the quick fox jumps over the lazy dog
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
