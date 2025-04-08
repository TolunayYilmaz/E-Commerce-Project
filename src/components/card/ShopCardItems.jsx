import ShopCard from "./ShopCard.jsx";
export default function ShopCardItems(){
const cards=[{
    headText:"Your Space",
    midTextFirst:"Uniqie",
    midTextSec:"Life",
    botText:"Explore Items"

},{
    headText:"Ends Today",
    midTextFirst:"Elements",
    midTextSec:"Style",
    botText:"Explore Items"

}
,{
    headText:"Ends Today",
    midTextFirst:"Elements",
    midTextSec:"Style",
    botText:"Explore Items"

}]

    return(<div className="bg-[#FAFAFA] flex flex-col items-center py-20 gap-[10px]">
        
        {cards.map((item,index)=>{
            if(index===0){
                return <ShopCard borderRight={true} key={index} midTextFirst={item.midTextFirst} headText={item.headText} midTextSec={item.midTextSec} botText={item.botText}/>
            }
          return <ShopCard  key={index} midTextFirst={item.midTextFirst} headText={item.headText} midTextSec={item.midTextSec} botText={item.botText}/>
        })}
      </div>);
}