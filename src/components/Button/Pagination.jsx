import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOffset } from "../../store/actions/productAction";
import { getProducts } from "../../store/actions/productThunks";

export default function Pagination({ categoryId }) {
  const [que, setQue] = useState([1, 2, 3]);
  const offset = useSelector((state) => state.product.offset);
  const [selectedPage,setSelectedPage] =useState(offset / 25 + 1); 
  const filter = useSelector((state) => state.product.filter);
  const dispatch = useDispatch();


  useEffect(() => {
 

    setSelectedPage(offset / 25 + 1);
 
  }, [categoryId, filter,offset]);

  const updatePagination = (pageNumber) => {
    const newOffset = (pageNumber - 1) * 25;
    dispatch(setOffset(newOffset)); // Yeni offset'i gönderiyoruz

    // `categoryId` ve mevcut `filter` ile filterString'i oluşturuyoruz
    const filterString = `category=${categoryId > 0 ? categoryId : 1}${filter ? `&${filter}` : ""}&limit=25&offset=${newOffset}`;

    // Yeni ürünleri getirecek API çağrısını yapıyoruz
    dispatch(getProducts(filterString));
  };

  const handleClickPage = (page) => {
    updatePagination(page);
  };

  const nextPagination = () => {
    if (que[2] < 24) {
      const newQue = que.map((q) => q + 1);
      setQue(newQue);
      if (!newQue.includes(selectedPage)) {
        updatePagination(newQue[0]);
      }
    }
  };

  const firstPagination = () => {
    setQue([1, 2, 3]);
    updatePagination(1);
  };

  const getButtonClass = (page) =>
    `text-sm font-bold border-[#BDBDBD] border h-[74px] w-[46px] ${
      selectedPage === page
        ? "bg-[#23A6F0] text-white"
        : "text-[#23a5f0] hover:bg-[#23A6F0] hover:text-white hover:border-t hover:border-b"
    }`;

  return (
    <div>
      <button
        className={`font-bold text-sm border-[#BDBDBD] border rounded-s-md h-[74px] w-[83px] ${
          que[0] === 1 ? "bg-[#F3F3F3] text-[#BDBDBD]" : "bg-white text-[#23A6F0]"
        }`}
        onClick={firstPagination}
        disabled={que[0] === 1}
      >
        First
      </button>

      {que.map((page) => (
        <button
          key={page}
          className={getButtonClass(page)}
          onClick={() => handleClickPage(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={`text-sm font-bold border-[#BDBDBD] border rounded-e-md h-[74px] w-[83px] ${
          que[2] >= 24 ? "bg-[#F3F3F3] text-[#BDBDBD]" : "bg-white text-[#23A6F0]"
        }`}
        onClick={nextPagination}
        disabled={que[2] >= 24}
      >
        Next
      </button>
    </div>
  );
}
