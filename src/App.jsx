import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Add } from "./components/Add";
import Navbar  from "./components/Navbar";
import Read from "./components/Read";
import Edit from "./components/Edit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Add />} />
          <Route path="/read" element={<Read />} />
          <Route path="/edit/:id" element={<Edit />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
