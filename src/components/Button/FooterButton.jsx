export default function FooterButton({ buttonName, textSize, onClick }) {
  return (
    <button
      className={`px-6 py-3 bg-[#23A6F0] font-bold text-white rounded-[5px] ${textSize} hover:bg-[#3695cc] hover:shadow-md transition-transform duration-300 hover:scale-[103%]`}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
}
