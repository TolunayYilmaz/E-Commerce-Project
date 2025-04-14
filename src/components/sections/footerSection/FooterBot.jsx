import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faTwitter,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
export default function FooterBot() {
  return (
    <section className="text-white w-[232px] h-[172px] mx-auto flex flex-col justify-around sm:pb-8 sm:flex-row sm:w-[75vw] sm:h-auto sm:justify-between">
      <h6>Made With Love By Finland All Right Reserved </h6>
      <div className=" flex gap-[22px]">
        <FontAwesomeIcon
          icon={faSquareFacebook}
          className="text-blue-600 w-6 h-6"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-[#E51F5A] w-6 h-6"
        />
        <FontAwesomeIcon icon={faTwitter} className="text-[#21A6DF] w-6 h-6" />
        <FontAwesomeIcon icon={faYoutube} className="text-[#E42F08] w-6 h-6" />
      </div>
    </section>
  );
}
