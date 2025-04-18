import { useForm } from "react-hook-form";
import FooterButton from "../Button/FooterButton";
import FormInput from "../Input/FormInput";

const formData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
};

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setError,
  } = useForm({
    defaultValues: formData,
    mode: "all",
  });

  const roles = [
    { id: 1, name: "Customer" },
    { id: 2, name: "Admin" },
    { id: 3, name: "Store" },
  ];

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }
    console.log(data);
  };

  return (
    <form
      className="flex flex-col items-center min-h-[520px] py-4 justify-center gap-y-6 w-[90%] shadow-md rounded-xl border-1 border-[#23A6F0] mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-start flex-col justify-between h-[80px] w-[90%]">
        <label htmlFor="name" className="text-[#23A6F0] text-xl font-medium">
          Name:
        </label>
        <FormInput
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          invalid={!errors.name}
          register={register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "At least 3 characters" },
          })}
        />
        {errors.name && <p className="text-red-500 font-medium">{errors.name.message}</p>}
      </div>

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
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="text-red-500 font-medium">{errors.email.message}</p>}
      </div>

      <div className="flex items-start flex-col justify-between h-[80px] w-[90%]">
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
          register={register("password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
              message:
                "Min 8 chars, upper+lower+number+special character required",
            },
          })}
        />
        {errors.password && <p className="text-red-500 font-medium">{errors.password.message}</p>}
      </div>

      <div className="flex items-start flex-col justify-between h-[80px] w-[90%]">
        <label
          htmlFor="confirmPassword"
          className="text-[#23A6F0] text-xl font-medium"
        >
          Confirm Password:
        </label>
        <FormInput
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          invalid={!errors.confirmPassword}
          register={register("confirmPassword", {
            required: "Please confirm password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && <p className="text-red-500 font-medium">{errors.confirmPassword.message}</p>}
      </div>

      <div className="flex items-start flex-col justify-between h-[80px] w-[90%]">
        <label htmlFor="role" className="text-[#23A6F0] text-xl font-medium">
          Role:
        </label>
        <select
          defaultValue="Customer"
          className="h-10 w-full pl-2 py-2 text-sm border rounded shadow-md"
          {...register("role")}
        >
      
          <option value="" disabled selected>
            Customer
          </option>
          {roles.map((role) => (
            <option key={role.id} value={role.name}>
              {role.name}
            </option>
          ))}
        </select>
      </div>

      <button
        className={`px-6 py-3 font-bold text-white rounded-[5px] ${
          !isValid ? "bg-slate-600" : "bg-[#23A6F0]"
        }`}
        disabled={!isValid}
      >
        Sign Up
      </button>
    </form>
  );
}
