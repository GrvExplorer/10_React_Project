import "./App.css";
import Navbar  from "./components/Navbar/Navbar";
import Heading from "./components/Heading/Heading.jsx";
import Form from "./components/Form/Form";

export default function App() {
  return (
    <main className="container">
      <Navbar />
      <div className="scorll">
      <Heading />
      <Form />
      </div>
    </main>
  );
}
