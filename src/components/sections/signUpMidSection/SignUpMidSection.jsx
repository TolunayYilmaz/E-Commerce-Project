import Form from "../../Form/Form";

import image from "../../../assets/images/teamCard.jpg"
import RoundedImg from "../../Image/RoundedImg";
export default function SignUpMidSection() {
  return (
    <section className="flex gap-5 w-[75%] mx-auto">
      <Form />
     <div className="hidden md:block w-[100%]">
 <RoundedImg image={image}/>
     </div>
    </section>
  );
}
