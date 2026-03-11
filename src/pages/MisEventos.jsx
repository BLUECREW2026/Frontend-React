import { useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import GrupoDeCardEventoSmall from "../components/cards/GrupoDeCardEventoSmall";
import { formatearFechaHora } from "../utilities/formatearFechaHora"

export default function MisEventos() {
  const [eventos, setEventos] = useState([]);
  const [inscripciones, setInscripciones] = useState([]);

  const id = Number(localStorage.getItem("usuarioId"));

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await clienteAxios.get("/eventos");
        setEventos(response.data);
      } catch (error) {
        console.error("Error al obtener los eventos:", error);
      }
    };

    const fetchInscripciones = async () => {
      try {
        const response = await clienteAxios.get(`/eventos/inscritos/${id}`);
        let eventosFormateados = response.data.map(item => {
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
        setInscripciones(eventosFormateados);
      } catch (error) {
        console.error("Error al obtener las inscripciones:", error);
      }
    };

    fetchEventos();
    fetchInscripciones();
  }, [id]);
  console.log(eventos)
  const publicados = eventos.filter((ev) => ev.usuario.id === id && ev.estadoEvento === "APROBADO");

  const pendientes = eventos.filter(
    (ev) => ev.usuario.id === id && ev.estadoEvento === "PENDIENTE",
  );

  return (
    <div className="flex-grow-1 mt-5 container">
      <section className="mb-5">
        <div className="text-center mb-4">
          <p className="text-secondary h2 fw-bold">INSCRITO</p>
          <hr className="w-25 mx-auto" />
        </div>
        <GrupoDeCardEventoSmall datos={inscripciones} ruta="/eventos" />
      </section>

      <section className="mb-5">
        <div className="text-center mb-4">
          <p className="text-secondary h2 fw-bold">MIS EVENTOS PUBLICADOS</p>
          <hr className="w-25 mx-auto" />
        </div>
        <GrupoDeCardEventoSmall datos={publicados} ruta="/eventos" />
      </section>

      <section className="mb-5">
        <div className="text-center mb-4">
          <p className="text-secondary h2 fw-bold">PENDIENTES DE APROBACIÓN</p>
          <hr className="w-25 mx-auto" />
        </div>
        <GrupoDeCardEventoSmall datos={pendientes} ruta="/eventos" />
      </section>
    </div>
  );
}
