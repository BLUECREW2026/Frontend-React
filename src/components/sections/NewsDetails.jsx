import { useLocation, useParams, Link } from 'react-router-dom';
import { noticias } from '../../data/Noticias';

export default function NewsDetails() {
    const { id } = useParams();

    const currentId = parseInt(id);

    const location = useLocation();

    const noticia = location.state?.noticia || noticias[currentId];

    if (!noticia) return <p className="text-center my-5">Noticia no encontrada...</p>;

    return (
        <section className="py-5 bg-light w-75 mx-auto shadow my-5 rounded-4">
            <div className="container">
                {/* ... (resto de tu código de encabezado e imagen) ... */}
                {/* 1. ENCABEZADO (Título y Metadatos) */}
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-8 text-center">
                        {/* Etiqueta opcional (Categoría) */}
                        <span className="badge bg-secondary text-white mb-2">Vida Marina</span>

                        <h1 className="fw-bold text-primary display-5 mb-3">
                            {noticia.titulo}
                        </h1>

                        <p className="text-muted small">
                            Publicado por <strong>{noticia.autor}</strong> | {noticia.fecha_publicacion}
                        </p>
                    </div>
                </div>

                {/* 2. IMAGEN PRINCIPAL */}
                {/* Usamos 'object-fit-cover' para que no se deforme la imagen */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-lg-10">
                        <img
                            src={noticia.imagen}
                            alt="Imagen destacada de la noticia"
                            className="w-100 rounded-4 shadow-sm object-fit-cover border border-primary border-3"
                            style={{ height: '450px' }}
                        />
                    </div>
                </div>

                {/* 3. CUERPO DE LA NOTICIA */}
                {/* 'lh-lg' da más altura de línea para mejorar la legibilidad del texto largo */}
                <div className="row justify-content-center">
                    <div className="col-lg-8 lh-lg fs-5">
                        <p>
                            {noticia.descripcion}
                        </p>

                        {/* Cita destacada (opcional pero queda muy bien en blogs) */}
                        <blockquote className="border-start border-4 border-primary ps-4 fst-italic my-4 text-dark">
                            "Proin consequat odio ante, ultrices dapibus eros eleifend sed. Morbi nec turpis dolor."
                        </blockquote>


                    </div>
                </div>
                {/* 4. NAVEGACIÓN (Anterior / Siguiente) */}
                <div className="row justify-content-center mt-5 pt-4 border-top">
                    <div className="col-lg-8 d-flex justify-content-between align-items-center">

                        {/* Botón Anterior: Solo se muestra si no es la primera noticia (ID 0) */}
                        {currentId > 0 ? (
                            <Link
                                to={`/noticias/${currentId - 1}`}
                                state={{ noticia: noticias[currentId - 1] }} // Pasamos el state para que cargue instantáneo
                                className="btn btn-secondary px-4 fw-bold text-white"
                            >
                                <i className="bi bi-arrow-left me-2"></i> Anterior
                            </Link>
                        ) : <div />} {/* Espaciador vacío para mantener el "Siguiente" a la derecha */}

                        {/* Botón Siguiente: Solo si no es la última noticia */}
                        {currentId < noticias.length - 1 ? (
                            <Link
                                to={`/noticias/${currentId + 1}`}
                                state={{ noticia: noticias[currentId + 1] }}
                                className="btn btn-secondary px-4 fw-bold text-white"
                            >
                                Siguiente <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        ) : <div />}
                    </div>
                </div>
            </div>
        </section>
    );
};