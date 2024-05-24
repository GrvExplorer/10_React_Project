import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Support from "./pages/Support/Support";
import Transaction from "./pages/Transaction/Transaction";
import Signup from "./pages/Auth/signup/Signup";
import Login from './pages/Auth/login/Login'
import ForgotPassword from './pages/Auth/forgot password/ForgotPassword'
import EmailVerification from './pages/Auth/EmailVerification'
import ResetPassword from './pages/Auth/forgot password/ResetPassword'
import NotFound from './pages/not-found'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { instance } from "./api/axios";
import { useEffect } from "react";


function App() {

  const queryClient = new QueryClient()

  useEffect(() => {
    instance.get().then(v => console.log(v))
  }, [])
  

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/support" element={<Support />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forgot" element={<ForgotPassword />} />
          <Route path="/auth/email" element={<EmailVerification />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
