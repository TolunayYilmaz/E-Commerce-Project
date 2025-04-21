import FormInput from "../Input/FormInput";
import { useForm } from "react-hook-form";
const formData = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: formData,
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      className="flex flex-col items-center w-full  py-4 justify-center gap-y-6 sm:w-[90%] shadow-md rounded-xl border-1 border-[#23A6F0] mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-start flex-col justify-between h-[80px] w-[90%]">
        <label htmlFor="email" className="text-[#23A6F0] text-xl font-medium">
          Email:
        </label>
        <FormInput
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          invalid={!errors.email}
          register={register("email")}
        />
      </div>

      <div className="flex items-start flex-col justify-between h-auto sm:h-[80px] w-[90%]">
        <label
          htmlFor="password"
          className="text-[#23A6F0] text-xl font-medium"
        >
          Password:
        </label>
        <FormInput
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          invalid={!errors.password}
          register={register("password")}
        />
      </div>
      <button
        className={`px-6 py-3 font-bold text-white rounded-[5px] ${
          !isValid ? "bg-slate-600" : "bg-[#23A6F0]"
        }`}
        disabled={!isValid}
      >
        Log In
      </button>
    </form>
  );
}
