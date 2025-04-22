export default function ShopPageCard({ category }) {
  const imgPath = category.img.replace("undefined", "");
  const gender= category.gender === "k" ? "Kadın" : "Erkek";
  const path=`/shop/${category.gender === "k" ? "kadin" : "erkek"}/${category.title.toLowerCase()}/${category.id}`
  return (
    <a
      className="relative no-underline h-[300px] w-[332px]  text-white flex flex-col justify-center items-center gap-2 overflow-hidden sm:w-[205px] sm:h-[223px] hover:cursor-pointer transform hover:scale-105 transition-all duration-300"
       href={path}
      
    >
      <img
        src={imgPath}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-75"
      />

      <div className="relative z-20 text-center ">
        <h5 className="text-base font-bold mt-16  ">
         {gender} {category.title}
        </h5>
        <h5 className="text-sm font-bold">{category.rating}</h5>
      </div>
    </a>
  );
}
