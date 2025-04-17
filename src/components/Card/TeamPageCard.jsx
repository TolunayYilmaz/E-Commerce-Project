import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useGoSite } from "../../hooks/useGoSite";
export default function TeamPageCard({ image,profileLink,userName,proffesion}) {
  const goTo=useGoSite();
  return (
    <div className="w-[329px] h-[403px] flex flex-col items-center hover:cursor-pointer transform hover:scale-105 transition-all duration-300" onClick={() => goTo(profileLink)}>
    <img className="h-[231px] w-full" src={image} />
    <div className="flex flex-col items-center justify-center gap-y-2 w-[232px] h-[172px]">
      <h5 className="text-base font-bold">{userName}</h5>
      <h6 className="text-[#737373] text-sm text-center">{proffesion}</h6>
      <div className="flex gap-x-[20px]">
        <FontAwesomeIcon
          icon={faSquareFacebook}
          className="text-[#335BF5] w-6 h-6 sm:w-6 sm:h-6"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-[#E51F5A] w-6 h-6 sm:w-6 sm:h-6"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-[#21A6DF] w-6 h-6 sm:w-6 sm:h-6"
        />
      </div>
    </div>
  </div>
  
  );
}
