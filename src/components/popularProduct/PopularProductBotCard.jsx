

export default function PopularProductBotCard({number}){


    return(<div className="flex gap-3 mx-auto w-auto ">
        <h2 className="text-[40px] text-[#E74040]">{number}.</h2>
        <div>
        <h6 className="text-[#252B42] text-sm font-bold">Easy to use</h6>
        <p className="text-xs font-normal text-[#737373] w-[90%] sm:w-[85%] md:w-[70%]">Things on a very  small that you have any direct</p>
        </div>
    </div>);
}