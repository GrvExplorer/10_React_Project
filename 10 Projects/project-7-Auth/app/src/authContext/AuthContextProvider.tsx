import { jwtDecode } from "jwt-decode";
import { useCookies } from 'react-cookie'
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_VALUES = {
  user: null,
  token: null,
  cookies: null,
  login: (token) => {},
  logout: () => {},
};

const AuthContext = createContext(INITIAL_VALUES);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [cookies, setCookies, removeCookies ] = useCookies()


  const login = (token) => {
    if (token) {
      setToken(token)
      const decodedValue = jwtDecode(token);
      if (decodedValue.exp) {
        setCookies('token', token, {
          path: '/',
          expires: new Date(decodedValue?.exp * 1000),
          sameSite: true
        })
      }
      return;
    }
    logout()
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    removeCookies('token', {path: '/'})
    return;
  };

  useEffect(() => {
    if (cookies.token) {
      setToken(cookies.token)
      const user = jwtDecode(cookies.token)
      setUser(user)
    }
  }, [cookies])
  

  // Provider throwout the application
  const value = {
    token,
    user,
    cookies,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
