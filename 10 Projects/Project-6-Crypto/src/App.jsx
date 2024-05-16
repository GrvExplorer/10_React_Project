import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/Layout";
import Transaction from './pages/Transaction/Transaction'
import Support from './pages/Support/Support'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path='/support' element={<Support />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
