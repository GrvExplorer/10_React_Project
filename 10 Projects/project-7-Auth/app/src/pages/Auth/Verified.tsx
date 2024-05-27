import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSendVerifiedToken } from "../../react query/mutations";

function Verified() {
  const { token } = useParams();
  const navigate = useNavigate()

  const { mutate, isPending, isSuccess } = useSendVerifiedToken();

  useEffect(() => {
    mutate({ token });
  }, [mutate, token]);

  return (
    <div>
      { isPending && 'Loading...'}
      {isSuccess ? (
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

              <button 
              onClick={() => navigate('/auth/login')}
              className="btn w-full bg-Purple font-medium text-white">
                Enter the App
              </button>
            </div>
          </div>
        </div>
      ) : (
        "Wrong token please go to you email."
      )}
    </div>
  );
}

export default Verified;
