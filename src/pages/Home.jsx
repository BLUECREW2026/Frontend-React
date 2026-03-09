import HeroSection from '../components/sections/HeroSection';
import SectionEstadisticas from '../components/sections/SectionEstadisticas';
import SectionONG from '../components/sections/SectionONG';
import GrupoDeCardEvento from '../components/cards/GrupoDeCardEvento';
import clienteAxios from "../config/axios"
import { useState, useEffect } from "react";
import { formatearFechaHora } from "../utilities/formatearFechaHora"


function Home() {

  const [datos, setDatos] = useState([])

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await clienteAxios.get('/eventos/activos');
        const eventosFormateados = response.data.map(item => {
          const { fecha, hora } = formatearFechaHora(item[4]);

          return {
            id: item[0],
            titulo: item[1],
            imagen: item[2],
            descripcionEvento: item[3],
            fechaDisplay: fecha,
            horaDisplay: hora,
            categoria: item[5],
            descripcionCategoria: item[6],
            material: item[7],
            ubicacion: item[8],
            participantes: item[9]
          };
        });

        setDatos(eventosFormateados);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    obtenerDatos();
  }, []);

  const importarTodo = (r) => r.keys().map(r);
  const logos = importarTodo(
    require.context("/src/assets/ong", false, /\.(png|jpe?g|svg)$/),
  );

  return (
    <div className="flex-grow-1">
      <HeroSection />
      <SectionEstadisticas />
      <GrupoDeCardEvento datos={datos.slice(0, 4)} />
      <SectionONG />

      <div className="colaboradores-section py-5 position-relative">
        <div className="container-fluid text-center overflow-hidden">
          <h3 className="text-white mb-5 fw-normal">COLABORAMOS CON:</h3>

          <div className="slider-logos">
            <div className="slide-track">
              {logos.map((logo, index) => (
                <div className="slide" key={`logo-original-${index}`}>
                  <img src={logo} alt={`Colaborador ${index}`} />
                </div>
              ))}

              {logos.map((logo, index) => (
                <div className="slide" key={`logo-duplicado-${index}`}>
                  <img src={logo} alt={`Colaborador ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
