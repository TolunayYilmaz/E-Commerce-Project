export default function Logo({logo}){

    return(
        <div className="w-[150px] h-[70px]">
        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
      </div>
    )
}