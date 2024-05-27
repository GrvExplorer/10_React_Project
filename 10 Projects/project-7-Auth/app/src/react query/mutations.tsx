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

export const useSignup = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: signup,
    mutationKey: ["SIGNUP"],
    onSuccess: () => {
    }
  });
};

export const useSendVerification = () => {
  return useMutation({
    mutationFn: sendVerificationMail,
    mutationKey: ["SEND_VERIFICATION"],
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
  return useMutation({
    mutationFn: signin,
    mutationKey: ["SIGNUP"],
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
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
  const navigate = useNavigate();
  return useMutation({
    mutationFn: verifyResetPassword,
    mutationKey: ["VERIFY_FORGOT_PASSWORD"],
    onSuccess: () => {

    },
  });
  
};


