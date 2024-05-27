import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BiLogoGoLang } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  sendForgotPasswordMail,
  sendVerificationMail,
  sendVerifiedToken,
  signin,
  signup,
  verifyResetPassword,
} from "../api/axios";
import { useAuthContext } from "../authContext/AuthContextProvider";

export const useSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signup,
    mutationKey: ["SIGNUP"],
    onSuccess: (data) => {
    },
  });
};

export const useSendVerification = () => {
  return useMutation({
    mutationFn: sendVerificationMail,
    mutationKey: ["SEND_VERIFICATION_MAIL"],
  });
};

export const useSendVerifiedToken = () => {
  return useMutation({
    mutationFn: sendVerifiedToken,
    mutationKey: ["SEND_VERIFIED_TOKEN"],
  });
};

export const useSignin = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  return useMutation({
    mutationFn: signin,
    mutationKey: ["SIGNUP"],
    onSuccess: (data) => {
      login(data.token);
      navigate("/");
    },
  });
};

export const useSendForgotPasswordMail = () => {
  return useMutation({
    mutationFn: sendForgotPasswordMail,
    mutationKey: ["SEND_FORGOT_PASSWORD_MAIL"],
  });
};

export const useVerifyResetPassword = () => {
  return useMutation({
    mutationFn: verifyResetPassword,
    mutationKey: ["VERIFY_FORGOT_PASSWORD"],
    onSuccess: () => {},
  });
};
