import FeaturedProductCard from "./FeaturedProductCard"

export default function FeaturedProductCardItems(){

    const cards=["card1","card2","card3"]
    return(<div className="flex flex-col gap-y-5 sm:flex-row sm:w-[75vw] sm:mx-auto" >{
        cards.map((item,index)=><FeaturedProductCard key={index} card={item}/>)}</div>)
}