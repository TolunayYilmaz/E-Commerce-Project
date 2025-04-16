import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
export default function TeamPageCard({ image }) {
  return (
    <div className="w-[329px] h-[403px] flex flex-col items-center">
      <img className="h-[231px] w-full" src={image} />
      <div className="flex flex-col items-center justify-center gap-y-2  w-[232px] h-[172px]">
        <h5 className="text-base font-bold">Username</h5>
        <h6 className="text-[#737373] text-sm">Profession</h6>
        <div className=" flex gap-x-[20px] ">
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
            className="text-[#21A6DF] w-6 h-6 sm:w-6  sm:h-6"
          />
        </div>
      </div>
    </div>
  );
}
