import FeaturedProductCard from "./FeaturedProductCard"

export default function FeaturedProductCardItems(){

    const cards=["card1","card2","card3"]
    return(<div className="flex flex-col gap-5 pb-20">{
        cards.map((item,index)=><FeaturedProductCard key={index} card={item}/>)}</div>)
}