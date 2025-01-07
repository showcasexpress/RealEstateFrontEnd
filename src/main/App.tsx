import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import HousesList from "../house/HouseList";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="Discover Your Dream Home" />{" "}
        <Routes>
          <Route path="/" element={<HousesList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
