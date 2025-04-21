import { useForm } from "react-hook-form";
import FormInput from "../Input/FormInput";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import { useDispatch,useSelector } from 'react-redux';
import { fetchRolesIfNeeded } from "../../store/actions/clientThunks";


const formData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  roleId: 1,
  storeName: "",
  phone: 0,
  taxNo: "",
  bankAccount: "",
};

export default function Form() {

  const dispatch = useDispatch();
  const history = useHistory();
  const roles = useSelector((state) => state.client.roles);//thun ile çekildi redux** globalden çekti
  const notify = (data) => {
    return new Promise((resolve) => {
      toast(data, {
        onClose: resolve,
      });
    });
  };

  const exception = () =>
    toast("Kayıtlı email lütfen başka bir email deneyin :D");


  useEffect(() => {
    dispatch(fetchRolesIfNeeded());//thunk verisi getirdi.
  }, [dispatch]);
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
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.roleId,
      ...(data.roleId === 2 && {
        store: {
          name: data.storeName,
          phone: data.storePhone,
          tax_no: data.storeTaxNo,
          bank_account: data.storeBankAccount,
        },
      }),
    };
    console.log(payload);
    axiosInstance
      .post("/signup", payload)
      .then(async (response) => {
        console.log("Signup successful:", response.data);
        await notify("Kayıt Başarılı"); //go back toast mesajını bekliyor
        history.goBack();
      })
      .catch((error) => {
        exception();
        console.error("Signup error:", error.response?.data || error.message);
      })
      .finally(() => {});
  };

  return (
    <form
      className="flex flex-col items-center w-full min-h-[520px] py-4 justify-center gap-y-6 sm:w-[90%] shadow-md rounded-xl border-1 border-[#23A6F0] mx-auto"
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
        {errors.name && (
          <p className="text-red-500 font-medium">{errors.name.message}</p>
        )}
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
        {errors.email && (
          <p className="text-red-500 font-medium h-auto">
            {errors.email.message}
          </p>
        )}
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
          register={register("password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
              message:
                "Min 8 chars, upper+lower+number+special character required",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 font-medium h-auto ">
            {errors.password.message}
          </p>
        )}
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
        {errors.confirmPassword && (
          <p className="text-red-500 font-medium">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className="flex items-start flex-col justify-between h-[80px] w-[90%]">
        <label htmlFor="role" className="text-[#23A6F0] text-xl font-medium">
          Role:
        </label>
       {
        roles.length!==0&& <select
        defaultValue="Customer"
        className="h-10 w-full pl-2 py-2 text-sm border rounded shadow-md"
        {...register("roleId", { valueAsNumber: true })}
      >
        <option value={roles[0]?.id} disabled selected>
          {roles[0]?.name}
        </option>
        {roles.map((role) => (
          <option key={role.id} value={role.id}>
            {role.name}
          </option>
        ))}
      </select>
       }
        {roles.length === 0 && (
        
            <CircularProgress  sx={{ color: '#23A6F0' }}/>
          
        )}
      </div>
      {watch("roleId") === 2 && (
        <>
          <div className="flex items-start flex-col justify-between h-auto sm:h-[80px] w-[90%]">
            <label
              htmlFor="storeName"
              className="text-[#23A6F0] text-xl font-medium"
            >
              Store Name:
            </label>
            <FormInput
              id="storeName"
              type="text"
              placeholder="Enter your store name"
              invalid={!errors.password}
              register={register("storeName", {
                required: "Store Name is required",
                minLength: { value: 3, message: "At least 3 characters" },
              })}
            />
            {errors.storeName && (
              <p className="text-red-500 font-medium h-auto ">
                {errors.storeName.message}
              </p>
            )}
          </div>
          <div className="flex items-start flex-col justify-between h-auto sm:h-[80px] w-[90%]">
            <label
              htmlFor="taxNo"
              className="text-[#23A6F0] text-xl font-medium"
            >
              Tax Number:
            </label>
            <FormInput
              id="taxNo"
              type="text"
              placeholder="TXXXXVXXXXXX"
              invalid={!errors.password}
              register={register("taxNo", {
                required: "Tax No is required",
                minLength: {
                  value: 12,
                  message: "Please enter valid tax number",
                },
                pattern: /^T\d{4}V\d{6}$/,
              })}
            />
            {errors.taxNo && (
              <p className="text-red-500 font-medium h-auto ">
                {errors.taxNo.message}
              </p>
            )}
          </div>
          <div className="flex items-start flex-col justify-between h-auto sm:h-[80px] w-[90%]">
            <label
              htmlFor="iban"
              className="text-[#23A6F0] text-xl font-medium"
            >
              Bank Account:
            </label>
            <FormInput
              id="iban"
              type="text"
              placeholder="Enter your iban"
              invalid={!errors.bankAccount}
              register={register("bankAccount", {
                required: "Iban is required",
                pattern: /^TR\d{2}\d{5}\d{16}$/,
              })}
            />
            {errors.bankAccount && (
              <p className="text-red-500 font-medium h-auto ">
                {errors.bankAccount.message}
              </p>
            )}
          </div>
          <div className="flex items-start flex-col justify-between h-auto sm:h-[80px] w-[90%]">
            <label
              htmlFor="phone"
              className="text-[#23A6F0] text-xl font-medium"
            >
              Phone:
            </label>
            <FormInput
              id="phone"
              type="text"
              placeholder="Enter your phone number"
              invalid={!errors.phone}
              register={register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 digits",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 font-medium h-auto ">
                {errors.phone.message}
              </p>
            )}
          </div>
        </>
      )}
      <button
        className={`px-6 py-3 font-bold text-white rounded-[5px] ${
          !isValid ? "bg-slate-600" : "bg-[#23A6F0]"
        }`}
        disabled={!isValid}
      >
        Sign Up
      </button>
      <ToastContainer />
    </form>
  );
}
