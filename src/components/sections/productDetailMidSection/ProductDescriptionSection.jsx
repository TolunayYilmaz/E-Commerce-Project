import { ChevronRight } from "lucide-react";

export default function ProductDescriptionSection() {
  return (
    <section className="flex flex-col gap-y-6">
      <div className="text-sm font-bold  flex justify-center gap-x-2">
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
      <div className="w-[80%] mx-auto flex flex-col gap-y-16">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-[292px] rounded-md w-full object-cover"
        />
        <div className="w-full">
          <div>
            <h3 className="font-bold text-2xl">the quick fox jumps over </h3>
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
            <p className="text-sm text-[#737373] font-normal">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <div>
            <h3 className="font-bold text-2xl ">the quick fox jumps over </h3>
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
            <h6 className="text-[#737373] font-bold text-sm flex gap-x-2 items-center justify-start">
              <ChevronRight size={24} color="#737373" strokeWidth={1.25} />
              the quick fox jumps over the lazy dog
            </h6>
          </div>
          <div>
            <h3 className="font-bold text-2xl ">the quick fox jumps over </h3>
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
