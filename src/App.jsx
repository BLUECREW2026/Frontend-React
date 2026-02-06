import "./App.scss";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MisEventos from "./pages/MisEventos";
import UserProfile from "./components/UserProfile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/mis-eventos" element={<MisEventos />} />
        <Route path="/perfil" element={<UserProfile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
