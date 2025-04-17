export default function AboutCard({tag1,tag2}) {
  return (
    <div className=" h-[104px] w-[238px] flex flex-col items-center">
      <h1 className="font-bold text-[58px]  tracking-normal ">
        {tag1}
      </h1>
      <h5 className="text-[#737373] leading-none tracking-normal text-base font-bold">
       {tag2}
      </h5>
    </div>
  );
}
