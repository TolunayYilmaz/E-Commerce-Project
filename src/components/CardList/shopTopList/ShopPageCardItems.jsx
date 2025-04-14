import ShopPageCard from "../../Card/ShopPageCard.jsx"



export default function ShopPageCardItems()
{
    const cards=[1,2,3,4,5]
    return(<div className="flex flex-col gap-3">{cards.map((item)=><ShopPageCard key={item}/>)}</div>)
}