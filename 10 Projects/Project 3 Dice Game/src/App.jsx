import { useEffect, useState } from "react";
import "./App.css";
import Startgame from "./components/Startgame";
import Gameplay from "./components/Gameplay";

function App() {
  const [isGamePlay, setIsGamePlay] = useState(false);

  const toggleing = () => {
    setIsGamePlay((pre) => !pre)
  }

  return (
    <div>
      {
      !isGamePlay ? <Startgame toggle={toggleing} /> : <Gameplay />
      }
    </div>
  );
}

export default App;
