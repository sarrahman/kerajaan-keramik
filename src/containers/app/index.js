import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Ongkir from "../pages/Ongkir";
import Kalkulator from "../pages/Kalkulator";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

function App() {;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ongkir" element={<Ongkir />} />
        <Route path="/kalkulator" element={<Kalkulator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
