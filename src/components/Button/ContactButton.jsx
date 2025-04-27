export default function ContactButton({
  textSize,
  buttonName,
  bgColor,
  textColor,
  px,
  py,
  borderColor,
  push
}) {
  return (
    <button
      className={` ${px}  ${py}  ${bgColor} border-[1px] ${borderColor?borderColor:"border-[#23A6F0]"} font-bold ${textColor} rounded-[5px] ${textSize} hover:shadow-md hover:bg-[#3695cc] transition-transform duration-300 hover:scale-[103%]`}
      onClick={push} >
      {buttonName}
    </button>
  );
}
