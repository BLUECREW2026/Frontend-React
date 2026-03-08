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

  return (
    <div className="flex-grow-1">
      <HeroSection />
      <SectionEstadisticas />
      <GrupoDeCardEvento datos={datos.slice(0, 4)} />
      <SectionONG />
    </div>
  );
}

export default Home;
