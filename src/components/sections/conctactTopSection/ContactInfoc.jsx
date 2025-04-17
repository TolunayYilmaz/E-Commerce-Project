import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
export default function ContactInfo() {
  return (
    <>
 
      <div className="h-24 flex justify-between flex-col items-center sm:items-start">
        <h3 className="text-2xl font-bold">Phone ; +451 215 215</h3>
        <h3 className="text-2xl font-bold">Fax : +451 215 215</h3>
      </div>
      <div className=" flex gap-x-[40px] ">
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-[#252B42] w-6 h-6 sm:w-8 sm:h-8"
        />

        <FontAwesomeIcon
          icon={faSquareFacebook}
          className="text-[#252B42] w-6 h-6 sm:w-8 sm:h-8"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-[#252B42] w-6 h-6 sm:w-8 sm:h-8"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-[#252B42] w-6 h-6 sm:w-8 sm:h-8"
        />
      </div>
    </>
  );
}
