import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSendVerification } from "../../react query/mutations";

function EmailVerification() {
  const location = useLocation();

  const { mutate, data: signupState, isPending, isSuccess } = useSendVerification();

  useEffect(() => {
    if (location.state) {
      mutate(location.state);
    }
  }, [mutate]);

  return (
    <div>
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
                  {location.state}.
                </span> If you didn’t receive it, click the button below.
              </p>
            </div>

            <button
              className="btn w-full"
              disabled={isPending}
              onClick={() => {
                mutate(location.state);
              }}
            >
              {isPending ? "Loading..." : "Re-Send Email"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
