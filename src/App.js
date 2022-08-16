import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Coininfo from "./Pages/Coininfo";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact />
          <Route path="Home" element={<Home />} exact />
          <Route path="Coininfo/:id" element={<Coininfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
