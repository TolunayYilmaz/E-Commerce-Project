import BestCardProductItems from "../components/bestProuduct/BestProductCardItems.jsx";
import BestProductImg from "../components/bestProuduct/BestProductImg.jsx";
import BestProductTopbar from "../components/bestProuduct/BestProductTopBar.jsx";

export default function BestProductItems() {
  return (
    <div className="flex justify-center flex-col items-center">
      <BestProductImg />
      <BestProductTopbar/>
      <BestCardProductItems/>
    </div>
  );
}
