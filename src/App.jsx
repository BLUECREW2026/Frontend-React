import "./App.scss";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import MisEventos from "./pages/MisEventos";
import UserProfile from "./components/UserProfile";
import { Routes, Route } from "react-router-dom";
import Privacidad from "./pages/Privacidad";
import DetalleEvento from "./pages/Evento";
import Eventos from "./pages/Eventos";
import { eventos as data } from "./data/Eventos";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home datos={data} />} />
        <Route path="/mis-eventos" element={<MisEventos datos={data} />} />
        <Route path="/perfil" element={<UserProfile />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/eventos" element={<Eventos datos={data} />} />
        <Route path="/eventos/:id" element={<DetalleEvento />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
