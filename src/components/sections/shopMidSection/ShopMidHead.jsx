import FooterButton from "../../Button/FooterButton";
import OptionButton from "../../Button/OptionButton";
import { Grid2x2,ListChecks  } from "lucide-react";

export default function ShopMidHead() {
  return (
    <div className="w-[252px]  h-[168px] mx-auto flex flex-col justify-around gap-3  sm:flex-row sm:justify-between sm:w-[72.84%] sm:items-center sm:gap-0">
      <h6 className="flex justify-center text-[#737373] text-sm font-bold">
        Showing all 12 results
      </h6>
      <div className="flex justify-around text-[#737373] items-center sm:gap-3">
        <h6 className="font-bold text-sm">Views:</h6>
        <div className="border w-11 h-11 flex justify-center items-center rounded-md">
          <Grid2x2 color="#000000" strokeWidth={1.5} size={18} />
        </div>
        <div className="border w-11 h-11 flex justify-center items-center rounded-md">
          <ListChecks  strokeWidth={1.5} size={18} />
        </div>
      </div>
      <div className="flex justify-between sm:w-[252px] sm:flex-row sm:gap-3">
        <OptionButton buttonName={"Popularity"} />
        <FooterButton buttonName={"Filter"} />
      </div>
    </div>
  );
}
