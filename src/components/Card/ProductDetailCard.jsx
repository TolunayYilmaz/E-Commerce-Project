import { Star,Heart,ShoppingCart,Eye} from "lucide-react";
import FooterButton from "../Button/FooterButton"
import ProductCarousel from "../Carousel/ProductCarousel";
export default function ProductDetailCard() {
  const starCount = 4;
  const stars = [];

  for (let i = 0; i < starCount; i++) {
    stars.push(
      <Star key={i} strokeWidth={1} size={18} fill="#F3CD03" color="#F3CD03" />
    );
  }

  for (let i = 0; i < 5 - starCount; i++) {
    stars.push(
      <Star key={i + starCount} size={18} strokeWidth={1} color="#F3CD03" />
    );
  }
  return (
    <div className="w-[348px] mx-auto flex flex-col gap-10">
      <ProductCarousel/>
      <div className="flex h-[75px] gap-3">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-[100px] object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-[100px] object-cover"
        />
      </div>
      <div className=" flex flex-col gap-y-2 w-[90%] mx-auto">
        <h4 className="text-xl">Floating Phone</h4>
        <div className="flex ">
          <div className="flex gap-1">{stars}</div>
          <h6 className="text-[#737373] font-bold text-sm">10 Reviews</h6>
        </div>
        <div>
          <h3 className="text-2xl font-bold">$1,139.33</h3>
          <h6 className="text-sm font-bold text-[#737373]">
            Availability : <span className="text-[#23A6F0]">In Stock</span>
          </h6>
        </div>
        <p className="text-sm font-normal text-[#858585] w-[90%] ">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <div className="w-[90%] mx-auto h-px bg-[#BDBDBD]"></div>
        <div className="flex gap-2 w-[90%] my-2">
          <div className="w-[30px] h-[30px] rounded-full bg-[#23A6F0]"></div>
          <div className="w-[30px] h-[30px] rounded-full bg-[#2DC071]"></div>
          <div className="w-[30px] h-[30px] rounded-full bg-[#E77C40]"></div>
          <div className="w-[30px] h-[30px] rounded-full bg-[#252B42]"></div>
        </div>
        <div className=" flex items-center justify-start gap-3 my-4">
          <FooterButton buttonName={"Select Options"} textSize={"text-sm"} />
          <div className="w-[30px] h-[30px] rounded-full bg-white border flex items-center justify-center">
          <Heart size={16} strokeWidth={1.5} />
          </div>
          <div className="w-[30px] h-[30px] rounded-full bg-white border flex items-center justify-center">
          <ShoppingCart size={16} strokeWidth={1.5} />
          </div>
          <div className="w-[30px] h-[30px] rounded-full bg-white border flex items-center justify-center">
          <Eye size={16} strokeWidth={1.5} fill="black" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
