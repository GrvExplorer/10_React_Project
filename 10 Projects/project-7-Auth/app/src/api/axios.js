import axios from "axios";

export const Axios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  // withCredentials: true,
});

export const signup = async ({ firstName, lastName, email, password }) => {
  try {
    const { data } = await Axios.post("/user/signup", {
      firstName,
      lastName,
      email,
      password,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const sendVerificationMail = async (email) => {
  try {
    const { data } = await Axios.post('/user/send-verification-mail', {
      email
    })
    return data;
  } catch (error) {
    console.log(error);
  }
}
 
export const sendVerifiedToken = async ({ token }) => {
  try {
    const { data } = await Axios.post('/user/verifiy-user-mail', {
      token
    })
    return data;
  } catch (error) {
    console.log(error);
  }
}
 
export const signin = async ({ email, password }) => {
  try {
    const { data } = await Axios.post("/user/signin", {
      email,
      password,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const sendForgotPasswordMail = async (email) => {
  try {
    const { data } = await Axios.post('/user/forgot-password', {
      email
    })
    

    return data;
  } catch (error) {
    console.log(error);
  }
}

 
export const verifyResetPassword = async ({ token, password }) => {
  try {
    const { data } = await Axios.post("/user/verify-forgot-mail", {
      token,
      password,
    });


    return data;
  } catch (error) {
    console.log(error);
  }
};