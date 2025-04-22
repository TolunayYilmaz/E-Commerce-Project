
export default function OptionButton({ buttonName }) {


    
  return (
    <div className="relative">
      <select className="appearance-none bg-[#F9F9F9] border font-normal text-gray-700 py-3 px-7  rounded-[5px] leading-tight focus:outline-none focus:border-red-500">
        <option>Popularity</option>
        <option>Newest</option>
        <option>Oldest</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
