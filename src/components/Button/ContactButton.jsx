export default function ContactButton({
  textSize,
  buttonName,
  bgColor,
  textColor,
  px,
  py,
  borderColor
}) {
  return (
    <button
      className={` ${px}  ${py}  ${bgColor} border-[1px] ${borderColor?borderColor:"border-[#23A6F0]"} font-bold ${textColor} rounded-[5px] ${textSize}`}
    >
      {buttonName}
    </button>
  );
}
