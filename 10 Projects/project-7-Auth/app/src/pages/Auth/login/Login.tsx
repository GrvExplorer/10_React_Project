import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => {};

  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <div className="rounded-lg bg-White p-6 shadow-lg">
          <div className="mb-10 flex flex-col gap-4">
            <p className="text-4xl font-medium">Welcome to Crypto App</p>
            <p className="font-normal text-Gray">
              Create a free account by filling data below.
            </p>
          </div>

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6 ">
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-medium">
                  Email
                </label>
                <input
                  className="rounded-lg border px-3 py-2"      
                  type="email"
                  placeholder="name@email.com"
                  {...register("email", { required: true })}
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2 ">
                <label htmlFor="" className="font-medium">
                  Password
                </label>
                <input
                  className="rounded-lg border px-3 py-2"
                  type="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                />
              </div>

              {/* Remember me */}
              <div className="flex justify-between font-medium">
                <div className="ml-1 flex gap-2">
                  <input
                    className="bg-Purple"
                    type="checkbox"
                    {...register("rememberMe", {
                      required: true,
                    })}
                  />
                  <label htmlFor="">Remember me</label>
                </div>
                <p
                  onClick={() => navigate("/auth/forgot")}
                  className="cursor-pointer text-Purple hover:underline"
                >
                  Forgot Password?
                </p>
              </div>

              {/* Login button */}
              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  className="btn btn-active w-full text-Gray"
                >
                  Log In
                </button>
                <button type="button" onClick={() => navigate('/auth')} className="btn w-full">
                  Create Account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
