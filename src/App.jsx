import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Acceuil from "./assets/pages/Acceuil";
import Quisommenous from "./assets/pages/Quisommenous";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/quisommesnous" element={<Quisommenous/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
