import React, { useState } from "react";

function EmailVerification() {
  const [registered, setRegistered] = useState(true);
  
  return (
    <div>
      {registered ? (
        <div className="flex h-screen items-center justify-center">
          <div className="w-[488px] rounded-lg bg-White p-6 shadow-xl">
            <div className="flex flex-col items-center justify-center gap-6">
              <img className="h-10 w-10" src="/Success.png" alt="email" />

              <div className="text-center">
                <p className="mb-4 text-2xl font-medium">
                  Successfully Registration
                </p>
                <p className="w-[400px] font-normal text-Gray">
                  Hurray! You have successfully created your account. Enter the
                  app to explore all it’s features.
                </p>
              </div>

              <button className="btn font-medium w-full bg-Purple text-white">
                Enter the App
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-screen items-center justify-center">
          <div className="w-[488px] rounded-lg bg-White p-6 shadow-xl">
            <div className="flex flex-col items-center justify-center gap-6">
              <img className="h-10 w-10" src="/Email.png" alt="email" />

              <div className="text-center">
                <p className="mb-4 text-2xl font-medium">Email Verification</p>
                <p className="w-[400px] font-normal text-Gray">
                  We have sent you an email verification to
                  <span className="font-medium text-black">
                    {" "}
                    jenny.wilson@gmail.com.{" "}
                  </span>
                  If you didn’t receive it, click the button below.
                </p>
              </div>

              <button className="btn w-full">Re-Send Email</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmailVerification;
