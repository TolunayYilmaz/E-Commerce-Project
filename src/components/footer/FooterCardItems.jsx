import FooterCard from "./FooterCard";

export default function FooterCardItems(){

    const cards=[{
        head:"Company Info",
        links:["About Us","Carrier","We are hiring","Blog"]
      },{
        head:"Legal",
        links:["About Us","Carrier","We are hiring","Blog"]
      },
      {
        head:"Features",
        links:["Buiseness Marketing","User Analytic","Live Chat","Unlimited Support"]
      },
      {
        head:"Resources",
        links:["IOS & Android","Watch a Demo","Customers","API"]
      },
      {
        head:"Get In Touch",
        links:["(480) 555-0103","4517 Washington Ave.","debra.holt@example.com"],
        icon:true
      },]
  

    return(<div className="flex justify-center flex-col items-center gap-5 py-[50px]">{cards.map((item,index)=><FooterCard key={index} card={item} />)}</div>);
}