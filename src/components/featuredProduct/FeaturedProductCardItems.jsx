import FeaturedProductCard from "./FeaturedProductCard"

export default function FeaturedProductCardItems(){

    const cards=["card1","card2","card3"]
    return(<div className="flex flex-col gap-y-5 mx-auto justify-between sm:justify-center md:justify-center md:gap-x-16 lg:gap-x-0 lg:justify-between sm:flex-row sm:w-[75vw] sm:flex-wrap" >{
        cards.map((item,index)=><FeaturedProductCard key={index} card={item}/>)}</div>)
}