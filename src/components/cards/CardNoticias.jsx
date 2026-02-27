import { useNavigate } from "react-router-dom";

export default function CardNoticias({ noticia, id }) {
    const navigate = useNavigate();
    return (
        <div className="card mb-3 news-card-container shadow-sm border-0 bg-white">
            <div className="row g-0 align-items-center p-3">
                <div className="col-md-5">
                    <img
                        src={noticia.imagen}
                        className="img-fluid rounded-4 object-fit-cover border border-primary border-2"
                        alt="Noticia"
                    />

                </div>

                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{noticia.titulo}</h5>
                        <p className="card-text text-muted small line-clamp-3">
                            {noticia.descripcion}
                        </p>
                        <div className="d-grid mt-4">
                            <button className="btn btn-info text-white fw-medium rounded-3 py-2" onClick={() => navigate(`/noticias/${id}`, { state: { noticia } })}>
                                Leer más
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}