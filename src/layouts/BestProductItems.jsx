import BestProductImg from "../components/bestProuduct/bestProductImg";
import BestProductTopbar from "../components/bestProuduct/bestProductTopBar";

export default function BestProductItems() {
  return (
    <div className="flex justify-center flex-col items-center">
      <BestProductImg />
      <BestProductTopbar/>
      
    </div>
  );
}
