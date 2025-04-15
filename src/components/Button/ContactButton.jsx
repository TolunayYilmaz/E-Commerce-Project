export default function ContactButton({
  textSize,
  buttonName,
  bgColor,
  textColor,
  px,
  py,
}) {
  return (
    <button
      className={` ${px}  ${py}  ${bgColor} border-[1px] border-[#23A6F0] font-bold ${textColor} rounded-[5px] ${textSize}`}
    >
      {buttonName}
    </button>
  );
}
