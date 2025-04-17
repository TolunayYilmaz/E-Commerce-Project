import AboutCard from "../../Card/AboutCard";

export default function AboutCardMidList(){

    const cards=[{
        tag1:"15K",
        tag2:"Happy Customers"
    },
    {
        tag1:"150K",
        tag2:"Monthly Visitors"
    },
    {
        tag1:"15",
        tag2:"Countries Worldwide"
    },
    {
        tag1:"100+",
        tag2:"Top Partners"
    }]
    return(<div className="flex flex-col items-center gap-y-16 md:grid md:grid-cols-2 lg:grid-flow-col lg:flex-row">
    {cards.map((item,index)=><AboutCard key={index} tag1={item.tag1} tag2={item.tag2}/>)}
    </div>);
}