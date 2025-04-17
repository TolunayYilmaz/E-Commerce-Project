import AboutCardMidList from "../../CardList/aboutCardList/AboutCardMidList";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";

export default function AboutMidSection() {
  return (
    <section className="flex flex-col gap-y-20 items-center  sm:w-full">
      <div className="flex flex-col items-center w-[92%] mx-auto h-[340px] justify-around sm:flex-row xl:w-[70%] xl:justify-between">
        <div className="w-[70%] text-center h-[172px] flex flex-col justify-between sm:h-[140px] sm:w-[394px] sm:text-start sm:items-start">
          <p className="text-sm text-[#E74040] font-normal">Problems trying</p>
          <h3 className="font-bold text-2xl sm:text-start">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <p className="w-[75%] text-[#737373] text-sm font-normal sm:w-[545px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <AboutCardMidList />
      <div className="sm:w-full  xl:h-[540px] 2xl:h-[640px]">
        <VideoPlayer />
      </div>
    </section>
  );
}
