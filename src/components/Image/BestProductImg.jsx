export default function BestProductImg({ color,image }) {
  return (
    <div
      className={`w-[92%] h-[664px] ${color} xl:w-[27vw] sm:h-[88vh] flex flex-col`}
    >
      <div className="flex-1 relative">
        <div className="pl-5 py-4 z-10 relative ">
          <h6 className="text-sm font-bold">FURNITURE</h6>
          <p className="font-bold text-sm">5 Items</p>
        </div>
        <img
          src={image}
          alt="furniture"
          className="w-full h-full object-cover absolute bottom-0 left-0"
        />
      </div>
    </div>
  );
}
