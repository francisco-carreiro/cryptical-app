import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Coininfo from "./Pages/Coininfo";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" component={Home} exact />
          <Route path="/currency/:id" component={Coininfo} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
