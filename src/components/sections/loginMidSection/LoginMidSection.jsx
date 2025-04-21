import image from "../../../assets/images/teamCard.jpg";
import LoginForm from "../../Form/LoginForm";
import RoundedImg from "../../Image/RoundedImg";
export default function LoginMidSection() {
  return (
    <section className="flex gap-5 w-[90%] sm:w-[75%] mx-auto">
     <LoginForm/>
      <div className="hidden md:block w-[100%]">
        <RoundedImg image={image} />
      </div>
    </section>
  );
}
