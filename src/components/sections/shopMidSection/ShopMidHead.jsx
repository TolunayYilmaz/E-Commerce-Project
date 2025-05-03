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

  const buildFilterString = (sortValue = sort, inputValue = input) => {
    return `&filter=${inputValue}&sort=${sortValue}`;
  };

  let category = categoryId > 0 ? categoryId : 1;

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSort(selectedSort);
    dispatch(setOffset(0));
    const currentFilter = buildFilterString(selectedSort);
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
    <div className="w-full px-4 py-4 flex flex-col items-center mb-4 gap-4 sm:flex-row sm:justify-between xl:w-[80%] xl:mx-auto ">
      {/* Üst Bilgi */}
      <div className="text-center sm:text-left">
        <h6 className="text-[#737373] text-sm font-bold">
          Showing all 12 results
        </h6>
      </div>

      {/* Görünüm Seçimi */}
      <div className="flex items-center justify-center gap-3">
        <h6 className="font-bold text-sm text-[#737373]">Views:</h6>
        <div className="border w-11 h-11 flex justify-center items-center rounded-md cursor-pointer">
          <Grid2x2 color="#000000" strokeWidth={1.5} size={18} />
        </div>
        <div className="border w-11 h-11 flex justify-center items-center rounded-md cursor-pointer">
          <ListChecks strokeWidth={1.5} size={18} />
        </div>
      </div>

      {/* Arama ve Filtre Bölümü */}
      <div className="flex flex-col w-[70%] gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-end">
        <input
          type="text"
          className="w-full sm:w-[100px] md:w-[150px]  bg-[#F9F9F9] rounded-md border px-2 py-2 text-sm"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {/* Sıralama Seçimi */}
        <div className="relative w-full sm:w-auto">
          <select
            className="w-full appearance-none bg-[#F9F9F9] border font-normal text-gray-700 py-2 px-4 rounded-[5px] leading-tight focus:outline-none focus:border-red-500"
            onChange={handleSortChange}
            value={sort}
          >
            <option value="id:asc">Popularity</option>
            <option value="price:asc">Price: Low to High</option>
            <option value="price:desc">Price: High to Low</option>
            <option value="rating:asc">Rating: Low to High</option>
            <option value="rating:desc">Rating: High to Low</option>
          </select>
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
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

        {/* Filtre Butonu */}
        <FooterButton buttonName={"Filter"} onClick={handleFilterClick} />
      </div>
    </div>
  );
}
