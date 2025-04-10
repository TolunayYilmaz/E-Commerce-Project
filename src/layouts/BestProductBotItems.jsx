import BestProductBotCardItems from "../components/bestProuduct/BestProductBotCardItems";

export default function BestProductBotItems({color}) {
  return (
    <div className="flex justify-center flex-col items-center gap-y-10 sm:w-[75vw] sm:mx-auto sm:gap-y-5">
     
       <h1 className='text-2xl font-bold mr-[625px]'>BESTSELLER PRODUCTS</h1>
       <div className="hidden border-b border-[#ECECEC] w-full sm:flex"></div>
      <BestProductBotCardItems />
    </div>
  );
}
