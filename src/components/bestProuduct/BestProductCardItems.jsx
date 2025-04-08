import BestProductCard from "./BestProductCard";


export default function BestCardProductItems(){

    const images=["images1","images2","images3"]
    return(<div className="pb-[250px] flex flex-col gap-y-10">{images.map((item,index)=><BestProductCard key={index} ImagePath={item}/>)}</div>)
}