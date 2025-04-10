
export default function Button({buttonName,logo}){


    return(
        <button className='text-[#737373] text-3xl font-normal flex hover:text-[#23A6F0] sm:text-sm sm:font-bold'>
          {buttonName}
         {logo&&<span className="inline-block translate-y-[-3px]">{logo}</span>} 
        </button>
      )
}