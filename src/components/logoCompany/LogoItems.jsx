import Logo from "./Logo.jsx"

export default function LogoItems(){

    const logos=["logo1","logo2","logo3","logo4","logo5","logo6"]
    return(<div className="pb-[125px] flex flex-col gap-y-10 items-center">{logos.map((item,index)=><Logo key={index} logo={item}/>)}</div>)
}