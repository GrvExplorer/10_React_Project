import { ErrorMessage } from "@hookform/error-message";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";
import { useSignup } from "../../../react query/mutations";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')

  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    getValues,
    formState: { errors },
    watch,
  } = useForm();

  const [passVis, setPassVis] = useState(false);
  const [termsConditions, setTermsConditions] = useState(false);
  const handleVisibility = () => {
    setPassVis(!passVis);
  };
  
  const { isError , mutate , isSuccess, isPending} = useSignup();


  const onSubmit = (data) => {
    mutate(data);
    setEmail(data.email)
  };
  
  if (isSuccess) {
    navigate(`/auth/email`, { state: email });
  }
  
  return (                   
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-lg bg-White p-6 shadow-lg">
        <div className="mb-10 flex flex-col gap-4">
          <p className="text-4xl font-medium">Welcome to Crypto App</p>
          <p className="font-normal text-Gray">
            Create a free account by filling data below.
          </p>
        </div>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Name</label>
                <input
                  className="rounded-lg border px-3 py-2"
                  type="text"
                  placeholder="Jane"
                  {...register("firstName", { required: true, maxLength: 20 })}
                />
                {/* TODO: Error Message */}
                {errors.root?.message}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Surname</label>
                <input
                  className="rounded-lg border px-3 py-2"
                  type="text"
                  placeholder="Don"
                  {...register("lastName", { required: true, maxLength: 20 })}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="">Email</label>
              <input
                className="rounded-lg border px-3 py-2"
                type="email"
                autoComplete=""
                placeholder="name@email.com"
                {...register("email", { required: true })}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label htmlFor="">Password</label>
              <input
                className="rounded-lg border px-3 py-2"
                type="password"
                placeholder="password"
                autoComplete="new-password"
                {...register("password", { required: true })}
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label htmlFor="">Confirm Password</label>
              <div className="flex gap-2 rounded-lg border py-2 pr-3">
                <input
                  className="w-full rounded-lg px-3  py-1 focus:outline-none"
                  type={passVis ? "text" : "password"}
                  placeholder="confirm password"
                  autoComplete="new-password"
                  {...register("ConfirmPassword", {
                    required: true,
                    validate: (v) => {
                      if (v !== watch("password"))
                        return "Password must match.";
                    },
                  })}
                />
                <button type="button" onClick={handleVisibility}>
                  {passVis ? (
                    <IoMdEyeOff className="mr-2 text-2xl" />
                  ) : (
                    <IoMdEye className="mr-2 text-2xl" />
                  )}
                </button>
              </div>

              <div className="text-red-400">
                <ErrorMessage name="ConfirmPassword" errors={errors} />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="">
              <div className="ml-1 flex gap-2">
                <input
                  className="checked:bg-Purple cursor-pointer"
                  type="checkbox"
                  {...register("tac", {
                    required: {
                      value: true,
                      message:
                        "You need have to agree to terms and conditions to use the app.",
                    },
                  })}
                />
                <label
                  htmlFor=""
                  onClick={() => {
                    setValue("tac", !getValues("tac"));
                  }}
                  className="cursor-pointer"
                >
                  I agree with{" "}
                  <span className="text-Purple">Terms & Conditions</span>
                </label>
              </div>
              <div className="text-red-500">
                <ErrorMessage name="tac" errors={errors} />
              </div>
            </div>

            <div className="">
              <button
              disabled={isPending}
                type="submit"
                className="btn btn-ghost w-full bg-Purple text-white"
              >

                { isPending ? 'Loading...': 'Create Account'}
              </button>
              <p
                onClick={() => navigate("/auth/login")}
                className="mt-2 cursor-pointer text-center text-Gray"
              >
                Already have a account?{" "}
                <span className="text-Purple hover:underline">Log In</span>{" "}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
