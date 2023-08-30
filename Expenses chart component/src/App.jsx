import { useEffect, useState } from "react";
import "./App.css";
import ExpensesChartBody from "./components/ExpensesChartBody";
import data from './data.json'

function App() {
  return (
    <div>
    <ExpensesChartBody data={data} />
    </div>
  )
}

export default App;
