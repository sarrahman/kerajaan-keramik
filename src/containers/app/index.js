import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Ongkir from "../pages/Ongkir";
import Kalkulator from "../pages/Kalkulator";
import NotFound from "../pages/NotFound";
import HargaAdmin from "../pages/Harga/admin/harga";
import Harga from "../pages/Harga";
import FormHarga from "../pages/FormHarga";
import EditHarga from "../pages/FormHarga/Edit";

const isAdmin = window.localStorage.getItem("ADMIN") === "true";

function App() {;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={isAdmin ? <HargaAdmin /> : <Harga />} />
        <Route path="/product" element={<FormHarga />} />
        <Route path="/edit/:id" element={<EditHarga />} />
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
