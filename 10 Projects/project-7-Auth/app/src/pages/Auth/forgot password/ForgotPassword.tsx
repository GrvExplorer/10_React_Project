import { ErrorMessage } from "@hookform/error-message";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSendForgotPasswordMail } from "../../../react query/mutations";

function ForgotPassword() {
  const navigate = useNavigate();
  const [isSend, setSend] = useState(false);
  const [email, setEmail] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isSuccess, isPending } = useSendForgotPasswordMail();

  const onSubmit = (data) => {
    mutate(data.email);
    setEmail(data.email);
  };

  useEffect(() => {
    if (isSuccess) {
      setSend(true);
    }
  }, [isSuccess, mutate]) 

  return (
    <div className="">
      {isSend ? (
        <div className="flex h-screen items-center justify-center">
          <div className="w-[488px] rounded-lg bg-White p-6 shadow-xl">
            <div className="flex flex-col items-center justify-center gap-6">
              <img className="h-10 w-10" src="/Success.png" alt="email" />

              <div className="text-center">
                <p className="mb-4 text-2xl font-medium">Successfully Sent</p>
                <p className="w-[400px] font-normal text-Gray">
                  We have sent instructions on how to reset your password to{" "}
                  <span className="font-medium text-black">{email}.</span>{" "}
                  Please follow the instructions from the email.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-screen items-center justify-center">
          <div className="w-[600px] rounded-lg bg-White p-10 shadow-lg">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <FaArrowLeftLong
                  className="cursor-pointer text-xl"
                  onClick={() => navigate(-1)}
                />
                <p className="text-4xl font-medium">Forgot Password</p>
                <p className="w-[450px] font-normal text-Gray ">
                  Enter your email address for which account you want to reset
                  your password.{" "}
                </p>
              </div>

              <div
                className="           
"
              >
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-6 flex flex-col">
                    <label htmlFor="" className="mb-1 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      className="rounded-lg border px-3 py-2"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Fill the details please.",
                        },
                      })}
                    />
                    <div className="pl-1 pt-1 text-red-500">
                      <ErrorMessage errors={errors} name="email" />
                    </div>
                  </div>
                  <button
                    disabled={isPending}
                    type="submit"
                    className="btn btn-active w-full"
                  >
                    {isPending ? "Loading..." : "Reset Password"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
