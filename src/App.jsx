import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/common/nav/Nav";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import MisEventos from "./pages/MisEventos";
import UserProfile from "./components/sections/UserProfile";
import Privacidad from "./pages/Privacidad";
import DetalleEvento from "./pages/Evento";
import Eventos from "./pages/Eventos";
import { eventos as data } from "./data/Eventos";
import Cookies from "./pages/Cookies";
import AvisoLegal from "./pages/AvisoLegal";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home datos={data} />} />
        <Route path="/mis-eventos" element={<MisEventos datos={data} />} />
        <Route path="/perfil" element={<UserProfile />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/eventos" element={<Eventos datos={data} />} />
        <Route path="/eventos/:id" element={<DetalleEvento />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="*" element={<h1 className="text-center my-5">404 - Página no encontrada</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
