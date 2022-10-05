import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Chart from "./Pages/Chart";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="classes">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Chart/:id" element={<Chart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
