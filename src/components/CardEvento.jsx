export default function CardEvento({ evento }) {
    return (
        <div className="col p-3 d-flex">
            <article className="card rounded-4 p-3 bg-white shadow h-100 d-flex flex-column">
                <div className="ratio ratio-4x3">
                    <img
                        className="card-img-top rounded-4 object-fit-cover border border-primary border-2"
                        src={evento.imagen}
                        alt={evento.titulo}
                    />
                </div>
                <div className="card-body d-flex flex-column">
                    <h3 className="card-title h5">{evento.titulo}</h3>
                    <p className="card-text text-secondary mb-4 text-muted">
                        {evento.descripcion}
                    </p>
                    <div className="mt-auto text-center">
                        <button className="btn btn-primary text-light fw-bold w-100">
                            Inscribirse
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
}