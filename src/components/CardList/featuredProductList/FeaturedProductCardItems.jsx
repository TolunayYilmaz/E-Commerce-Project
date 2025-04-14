import FeaturedProductCard from "../../Card/FeaturedProductCard.jsx"

export default function FeaturedProductCardItems({images}){

  
    return(<div className="flex flex-col gap-y-5 mx-auto justify-between sm:justify-center md:justify-center md:gap-x-16 lg:gap-x-0 lg:justify-between sm:flex-row sm:w-[75vw] sm:flex-wrap" >{
        images.map((item,index)=><FeaturedProductCard key={index}  image={item}/>)}</div>)
}