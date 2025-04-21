import FormInput from "../Input/FormInput";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin } from "../../store/actions/clientThunks";
import { ToastContainer, toast } from "react-toastify";

import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const formData = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector((state) => state.client.error);
  const user = useSelector((state) => state.client.user);

  useEffect(() => {
    if (error) {
      notify(error); // Hata varsa toastla göster
    } else if (Object.keys(user).length !== 0) {
      history.goBack(); // Kullanıcı varsa yönlendir
    }
  }, [error, user]);

  const notify = (data) => {
    return new Promise((resolve) => {
      toast(data, {
        onClose: resolve,
      });
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues: formData,
    mode: "all",
  });

  const onSubmit = async (data) => {
    const agree = data.agree;

    const user = { email: data.email, password: data.password };

    dispatch(userLogin(user, agree));
  };
  return (
    <form
      className="flex flex-col items-center w-full  py-4 justify-center gap-y-6 sm:w-[500px] shadow-md rounded-xl border-1 border-[#23A6F0] mx-auto"
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
      <label className="inline-flex items-center mt-3">
        <input
          type="checkbox"
          {...register("agree")}
          className="form-checkbox h-5 w-5 transition duration-150 ease-in-out  "
        />
        <span className="ml-2 text-gray-700">Beni hatırla</span>
      </label>
      <button
        className={`px-6 py-3 font-bold text-white rounded-[5px] ${
          !isValid ? "bg-slate-600" : "bg-[#23A6F0]"
        }`}
        disabled={isSubmitting}
      >
        Log In
      </button>
      <ToastContainer />
    </form>
  );
}
