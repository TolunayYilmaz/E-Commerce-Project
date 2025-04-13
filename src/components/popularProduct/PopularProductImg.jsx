export default function PopularProductImg({color,image}){


    return(<div className={`w-full text-white border-2 h-[505px] text-6xl sm:w-[62.8%] sm:h-[649px] font-bold ${color} sm:border-none`}>
        <img className="w-full h-full object-cover" src={image}/>
    </div>)
}