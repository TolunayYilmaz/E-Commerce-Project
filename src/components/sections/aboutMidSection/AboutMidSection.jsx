import AboutCardMidList from "../../CardList/aboutCardList/AboutCardMidList";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";

export default function AboutMidSection() {
  return (
    <section className="flex flex-col gap-y-20 items-center">
      <div className="flex flex-col items-center w-[92%] mx-auto h-[340px] justify-around">
        <div className="w-[70%] text-center h-[172px] flex flex-col justify-between">
          <p className="text-sm text-[#E74040] font-normal">Problems trying</p>
          <h3 className="font-bold text-2xl">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <p className="w-[75%] text-[#737373] text-sm font-normal ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <AboutCardMidList />
      <div>
     <VideoPlayer />
      </div>
    </section>
  );
}
