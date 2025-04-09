import { Phone,MapPin ,Send  } from 'lucide-react';

export default function FooterCard({card}){
    return(<div className="text-white flex flex-col gap-3 font-bold w-[239px]">
        <h5 className="text-base font-bold">{card?.head}</h5>
        {card.icon?<>{card.links?.map((item,index)=><div className='flex gap-2' key={index}>
        {
      (() => {
        switch (index) {
          case 0:
            return <Phone color="#8ec2f2" strokeWidth={1.5} />;
          case 1:
            return <MapPin  color="#8ec2f2" strokeWidth={1.5} />;
          case 2:
            return <Send  color="#8ec2f2" strokeWidth={1.5} />;
          default:
            return null;
        }
      })()
    }
    <a className="text-white no-underline text-sm hover:cursor-pointer">
      {item}
    </a>
        </div>)}</>:<>{card.links?.map((item,index)=><a className="text-white no-underline text-sm hover:cursor-pointer" key={index}>{item}</a>)}</>}
    </div>);
}

