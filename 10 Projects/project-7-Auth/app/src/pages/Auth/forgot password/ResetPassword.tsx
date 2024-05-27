import { ErrorMessage } from "@hookform/error-message";
import React, { useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useVerifyResetPassword } from "../../../react query/mutations";

function ResetPassword() {

  const navigate = useNavigate()

  const [reseated, setReseated] = useState(false);
  const [passVis, setPassVis] = useState(false);
  const { token } = useParams();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate , isSuccess} = useVerifyResetPassword();

  function onSubmit(data: FieldValue<FieldValues>) {
    mutate({ token, password: data.password });
    if(isSuccess) { 
      setReseated(true)
    }
  }

  const handleVisibility = () => {
    setPassVis(!passVis);
  };

  return (
    <div>
      {reseated ? (
        <>
          <div className="flex h-screen items-center justify-center">
            <div className="w-[488px] rounded-lg bg-White p-6 shadow-xl">
              <div className="flex flex-col items-center justify-center gap-6">
                <img className="h-10 w-10" src="/Success.png" alt="email" />

                <div className="text-center">
                  <p className="mb-4 text-2xl font-medium">
                    Password Reset Done
                  </p>
                  <p className="w-[400px] font-normal text-Gray">
                    Now you can access your account.
                  </p>
                </div>

                <button 
                 onClick={() => navigate('/auth/login')}
                className="btn w-full bg-Purple font-medium text-white">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex h-screen items-center justify-center">
            <div className="w-[488px] rounded-lg bg-White p-10 shadow-lg">
              <div className="mb-8 flex flex-col gap-4">
                <p className="text-4xl font-medium">Reset Password</p>
                <p className="font-normal text-Gray">Enter your new password</p>
              </div>

              <form
                action=""
                className="flex flex-col gap-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Password */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="font-medium">
                    New Password
                  </label>
                  <input
                    className="rounded-lg border px-3 py-2"
                    type="password"
                    placeholder="password"
                    {...register("password", { required: true })}
                  />
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="font-medium">
                    Confirm Password
                  </label>
                  <div className="flex gap-2 rounded-lg border py-2 pr-3">
                    <input
                      className="w-full rounded-lg px-3  py-1 focus:outline-none"
                      type={passVis ? "text" : "password"}
                      placeholder="confirm password"
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

                {/* Reset button */}
                <button type="submit" className="btn btn-active w-full">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ResetPassword;
