import BestProductBotCardItems from "../../CardList/bestProuductList/BestProductBotCardItems.jsx";

export default function BestProductBotItems({ products,cardBg,shadow,count }) {


  return (
    <section className=" bg-[#FAFAFA] pt-10">
      <div className=" flex justify-center flex-col items-center gap-y-10 sm:w-[75vw] sm:mx-auto sm:gap-y-5">
        <h1 className="text-2xl font-bold sm:w-full">BESTSELLER PRODUCTS</h1>
        <div className="border-b border-[#ECECEC] w-[80%] sm:mb-10 sm:w-full sm:flex"></div>
        
        <BestProductBotCardItems products={products} cardbg={cardBg} shadow={shadow} count={count} />
      </div>
    </section>
  );
}
