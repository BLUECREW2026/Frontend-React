import clienteAxios from "../../config/axios"
import { useState, useEffect } from "react";

export default function Estadisticas() {

  const [datos, setDatos] = useState({
    Voluntarios_Activos: 0,
    Eventos_Finalizados: 0,
    Total_Basura: 0
  })

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await clienteAxios.get('/estadisticas/globales');
        setDatos(response.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <section>
      <div className="container text-center py-5 text-secondary">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <i className="bi bi-person-circle fs-1"></i>
            <h3 className="fw-bold mt-2">{datos.Voluntarios_Activos}</h3>
            <p>Voluntarios Activos</p>
          </div>

          <div className="col">
            <i className="bi bi-calendar4 fs-1"></i>
            <h3 className="fw-bold mt-2">{datos.Eventos_Finalizados}</h3>
            <p>Eventos Realizados</p>
          </div>

          <div className="col">
            <i className="bi bi-recycle fs-1"></i>
            <h3 className="fw-bold mt-2">{datos.Total_Basura} kg</h3>
            <p>Residuos Recogidos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
