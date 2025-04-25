import { ChevronRight } from "lucide-react";
import { useHistoryHook } from "../../../hooks/useHistoryHook.jsx";
export default function HeaderContentBlock({child,pageName,categoryName,gender,categoryId}) {




 
  const goToPage = useHistoryHook();
 
  return (
    <section className="bg-[#FAFAFA] flex flex-col items-center  sm:bg-white">
      <header className=" h-[202px] w-full flex justify-around py-3 flex-col items-center sm:flex-row sm:justify-between sm:w-[72.84%]">
        <h3 className="font-bold">{pageName}</h3>
        <div className="flex gap-2">
          <a className="no-underline text-black text-sm font-bold hover:cursor-pointer" onClick={()=>goToPage(categoryName?`/shop/${gender}/${categoryName}/${categoryId}`:`/`)}>
            {categoryName?"Shop":"Home"}
          </a>
          <ChevronRight
            size={30}
            color="#bdbdbd"
            strokeWidth={0.75}
            className="pb-2"
          />
          <a href="" className="no-underline text-[#737373] text-sm font-bold">
            {pageName}
          </a>
        </div>
      </header>
     
     {child}
    </section>
  );
}
