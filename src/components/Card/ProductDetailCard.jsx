import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import FooterButton from "../Button/FooterButton";
import ProductCarousel from "../Carousel/ProductCarousel";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/actions/shoppingCartAction";

export default function ProductDetailCard({ product }) {
  const stars = [];
  const starCount = Math.round(product.rating);
  const count = 1;

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

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  function AddedProduct() {
    dispatch(setCart({ checked: true, product: product, count: count }));
  }
  return (
    <div className="flex flex-col w-full  justify-center items-center  sm:items-start sm:flex-row sm:justify-around sm:w-full lg:w-[85%] xl:w-[75%]">
      {/* w-[348px] mx-auto flex flex-col gap-10 xl:w-full xl:flex-row xl:gap-0  xl:justify-between  */}
      <div className="flex flex-col gap-y-3 w-[348px]  xl:mx-0 lg:w-[490px]  xl:w-[506px] xl:h-[546px]">
        <ProductCarousel productImages={product.images} />

        <div className="flex h-[75px] gap-3">
          <img
            src={product.images[0].url}
            alt="image 1"
            className="h-full w-[100px] object-cover"
          />
          <img
            src={product.images[0].url}
            alt="image 3"
            className="h-full w-[100px] object-cover"
          />
        </div>
      </div>

      <div className=" flex flex-col gap-y-2 w-[75%]  my-4 sm:w-[300px] md:w-[380px] lg:w-[500px] sm:mx-2 xl:w-[510px] xl:h-[440px] xl:justify-between">
        <h4 className="text-xl">{product.name}</h4>
        <div className="flex gap-2">
          <div className="flex gap-1">{stars}</div>
          <h6 className="text-[#737373] font-bold text-sm">10 Reviews</h6>
        </div>
        <div>
          <h3 className="text-2xl font-bold">${product.price}</h3>
          <h6 className="text-sm font-bold text-[#737373]">
            Availability :{" "}
            <span className="text-[#23A6F0]">In Stock:{product.stock}</span>
          </h6>
        </div>
        <p className="text-sm font-normal text-[#858585] w-[90%] ">
          {product.description}
        </p>
        <div className="w-[90%] mx-auto h-px bg-[#BDBDBD]"></div>
        <div className="flex gap-2 w-[90%] my-2">
          <div className="w-[30px] h-[30px] rounded-full bg-[#23A6F0]"></div>
          <div className="w-[30px] h-[30px] rounded-full bg-[#2DC071]"></div>
          <div className="w-[30px] h-[30px] rounded-full bg-[#E77C40]"></div>
          <div className="w-[30px] h-[30px] rounded-full bg-[#252B42]"></div>
        </div>
        <div className=" flex items-center justify-start gap-3 my-4">
          <FooterButton
            buttonName={"Sepete Ekle"}
            textSize={"text-sm"}
            onClick={() => AddedProduct()}
          />
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
