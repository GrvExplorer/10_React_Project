import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Axios } from "./api/axios";
import AuthLayout from "./components/AuthLayout";
import Layout from "./components/Layout";
import EmailVerification from "./pages/Auth/EmailVerification";
import Verified from "./pages/Auth/Verified";
import ForgotPassword from "./pages/Auth/forgot password/ForgotPassword";
import ResetPassword from "./pages/Auth/forgot password/ResetPassword";
import Login from "./pages/Auth/login/Login";
import Signup from "./pages/Auth/signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Support from "./pages/Support/Support";
import Transaction from "./pages/Transaction/Transaction";
import NotFound from "./pages/not-found";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {/* Private Route */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/support" element={<Support />} />
        </Route>

        {/* Public Route */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/email/" element={<EmailVerification />} />
          <Route
            path="/auth/email-verification-check/:token"
            element={<Verified />}
          />
          <Route path="/auth/forgot" element={<ForgotPassword />} />
          <Route
            path="/auth/reset-password/:token"
            element={<ResetPassword />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
