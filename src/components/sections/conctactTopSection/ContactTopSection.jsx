import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import contact from "../../../assets/images/contact.png"
export default function ContactTopSection(){
    return(<section className="flex flex-col items-center">
     <div className="text-[#252B42] flex flex-col items-center justify-around w-[330px] mx-auto h-[590px]">
        <h5 className="text-base font-bold">CONTACT US</h5>
        <h2 className="font-bold w-[70%] text-center">Get in touch today!</h2>
        <h4 className="font-normal text-xl text-[#737373] w-[80%] text-center ">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </h4>
        <div className="h-24 flex justify-between flex-col items-center">
        <h3 className="text-2xl font-bold">Phone ; +451 215 215</h3>
        <h3 className="text-2xl font-bold">Fax : +451 215 215</h3>
        </div>
        <div className=" flex gap-x-[40px] ">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-[#252B42] w-6 h-6"
          />

          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="text-[#252B42] w-6 h-6"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-[#252B42] w-6 h-6"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-[#252B42] w-6 h-6"
          />
        </div>
      </div>
      <img className="w-[94%] h-[440px] object-contain" src={contact} />
    </section>)
}