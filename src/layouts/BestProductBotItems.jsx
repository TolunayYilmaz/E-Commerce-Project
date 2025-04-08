import BestProductBotCardItems from "../components/bestProuduct/BestProductBotCardItems";

export default function BestProductBotItems({color}) {
  return (
    <div className="flex justify-center flex-col items-center gap-y-10">
       <h1 className='text-2xl font-bold '>BESTSELLER PRODUCTS</h1>
      <BestProductBotCardItems/>
    </div>
  );
}
