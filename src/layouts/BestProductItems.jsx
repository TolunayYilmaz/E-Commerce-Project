import BestCardProductItems from "../components/bestProuduct/BestProductCardItems.jsx";
import BestProductImg from "../components/bestProuduct/BestProductImg.jsx";
import BestProductTopbar from "../components/bestProuduct/BestProductTopBar.jsx";

export default function BestProductItems({color,position}) {
  return (<>
  <div className="flex justify-center flex-col items-center  sm:hidden">
      <BestProductImg color={color}/>
      <BestProductTopbar/>
      <BestCardProductItems/>
    </div>
    <div className={`${position==="right"?"flex-row-reverse":""} hidden sm:flex w-[75%] mx-auto gap-4 pb-20`}>
      <BestProductImg color={color}/>
      <div className="w-[70%] flex flex-col gap-3">
      <BestProductTopbar/>
      <BestCardProductItems/>
      </div>
    </div>
  </>
    
  );
}
