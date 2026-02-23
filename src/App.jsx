import "./App.scss";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import MisEventos from "./pages/MisEventos";
import UserProfile from "./components/UserProfile";
import { Routes, Route } from "react-router-dom";
import Privacidad from "./pages/Privacidad";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mis-eventos" element={<MisEventos />} />
          <Route path="/perfil" element={<UserProfile />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/privacidad" element={<Privacidad />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
