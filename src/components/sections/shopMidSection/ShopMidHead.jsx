import { useState } from "react";
import FooterButton from "../../Button/FooterButton";
import { Grid2x2, ListChecks } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  getFilterProducts,
  getProducts,
} from "../../../store/actions/productThunks";
import { setFilter, setOffset } from "../../../store/actions/productAction";

export default function ShopMidHead({ categoryId }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const [sort, setSort] = useState("price:asc");
  const [input, setInput] = useState("");

  // Güncel filtre stringini her yerde doğru oluştur
  const buildFilterString = (sortValue = sort, inputValue = input) => {
    return `&filter=${inputValue}&sort=${sortValue}`;
  };
  let category = categoryId > 0 ? categoryId : 1;
  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSort(selectedSort); // state'i güncelle
    dispatch(setOffset(0));
    const currentFilter = buildFilterString(selectedSort); // güncel filtre oluştur
    dispatch(setFilter(currentFilter));
    dispatch(getFilterProducts(category, currentFilter));
    console.log("Kategorii" + category);
  };

  const handleFilterClick = () => {
    const currentFilter = buildFilterString();
    dispatch(setFilter(currentFilter));
    categoryId > 0
      ? dispatch(getFilterProducts(category, currentFilter))
      : dispatch(getProducts(currentFilter));
    dispatch(setOffset(0));
  };

  return (
    <div className="w-[252px] h-[168px] mx-auto flex flex-col justify-around gap-3 sm:flex-row sm:justify-between sm:w-[72.84%] sm:items-center sm:gap-0">
      <h6 className="flex justify-center text-[#737373] text-sm font-bold">
        Showing all 12 results
      </h6>

      <div className="flex justify-around text-[#737373] items-center sm:gap-3">
        <h6 className="font-bold text-sm">Views:</h6>
        <div className="border w-11 h-11 flex justify-center items-center rounded-md">
          <Grid2x2 color="#000000" strokeWidth={1.5} size={18} />
        </div>
        <div className="border w-11 h-11 flex justify-center items-center rounded-md">
          <ListChecks strokeWidth={1.5} size={18} />
        </div>
      </div>

      <div className="flex justify-between sm:w-[252px] sm:flex-row sm:gap-3">
        <div className="relative">
          <select
            className="appearance-none bg-[#F9F9F9] border font-normal text-gray-700 py-3 px-7 rounded-[5px] leading-tight focus:outline-none focus:border-red-500"
            onChange={handleSortChange}
            value={sort}
          >
            <option value="id:asc">Popularity</option>
            <option value="price:asc">Price: Low to High</option>
            <option value="price:desc">Price: High to Low</option>
            <option value="rating:asc">Rating: Low to High</option>
            <option value="rating:desc">Rating: High to Low</option>
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

        <div
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <FooterButton buttonName={"Filter"} onClick={handleFilterClick} />
          {isOpen && (
            <div className="mt-2 px-3 py-3 w-[200%] z-10 bg-gray-300 rounded absolute top-[48px] right-0">
              <input
                type="text"
                className="w-full"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
