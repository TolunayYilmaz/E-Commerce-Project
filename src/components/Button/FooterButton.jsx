export default function FooterButton({ buttonName, textSize, onClick }) {
  return (
    <button
      className={`px-6 py-3 bg-[#23A6F0] font-bold text-white rounded-[5px] ${textSize}`}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
}
