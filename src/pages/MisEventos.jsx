import { useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import GrupoDeCardEventoSmall from "../components/cards/GrupoDeCardEventoSmall";

export default function MisEventos() {
  const [eventos, setEventos] = useState([]);

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

    fetchEventos();
  }, []);

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
      </section>

      <section className="mb-5">
        <div className="text-center mb-4">
          <p className="text-secondary h2 fw-bold">MIS EVENTOS PUBLICADOS</p>
          <hr className="w-25 mx-auto" />
        </div>
        <GrupoDeCardEventoSmall datos={publicados} />
      </section>

      <section className="mb-5">
        <div className="text-center mb-4">
          <p className="text-secondary h2 fw-bold">PENDIENTES DE APROBACIÓN</p>
          <hr className="w-25 mx-auto" />
        </div>
        <GrupoDeCardEventoSmall datos={pendientes} />
      </section>
    </div>
  );
}
