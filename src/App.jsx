import {
  Routes, // Eliminamos BrowserRouter as Router de aquí
  Route,
  Outlet,
} from "react-router-dom";
import "./App.scss";
import Navbar from "./components/common/nav/Nav";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import MisEventos from "./pages/MisEventos";
import Participaciones from "./pages/Participaciones";
import UserProfile from "./components/sections/UserProfile";
import Privacidad from "./pages/Privacidad";
import DetalleEvento from "./pages/Evento";
import Eventos from "./pages/Eventos";
import { eventos as data } from "./data/Eventos";
import { noticias as not } from "./data/Noticias";
import Cookies from "./pages/Cookies";
import AvisoLegal from "./pages/AvisoLegal";
import Noticias from "./pages/Noticias";
import Noticia from "./pages/Noticia";
import CrearEvento from "./pages/CrearEvento";
import Login from "./pages/Login/LoginRegistro";
import SobreNosotros from "./pages/SobreNosotros";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="d-flex flex-column min-vh-100"> 
      <Routes>
        
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home datos={data} />} />
          <Route path="/mis-eventos" element={<MisEventos datos={data} />} />
          <Route path="/participaciones" element={<Participaciones datos={data} />} />
          <Route path="/perfil" element={<UserProfile />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/eventos" element={<Eventos datos={data} />} />
          <Route path="/eventos/:id" element={<DetalleEvento />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/noticias" element={<Noticias noticias={not} />} />
          <Route path="/noticias/:id" element={<Noticia />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/eventos/crear" element={<CrearEvento />} />
          <Route
            path="*"
            element={
              <h1 className="text-center my-5">404 - Página no encontrada</h1>
            }
          />
        </Route>

        <Route path="/login" element={<Login />} />
        
      </Routes>
    </div>
  );
}

export default App;