import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Support from "./pages/Support/Support";
import Transaction from "./pages/Transaction/Transaction";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/support" element={<Support />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}></Route>
      </Routes>
    </>
  );
}

export default App;
