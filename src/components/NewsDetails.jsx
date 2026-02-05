import img1 from '../assets/img/cards/card-image-1.webp';

export default function NewsDetails() {
    return (
        <section className="py-5 bg-light w-75 mx-auto shadow my-5 rounded-4">
            <div className="container">

                {/* 1. ENCABEZADO (Título y Metadatos) */}
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-8 text-center">
                        {/* Etiqueta opcional (Categoría) */}
                        <span className="badge bg-secondary text-white mb-2">Vida Marina</span>

                        <h1 className="fw-bold text-primary display-5 mb-3">
                            TÍTULO DE LA NOTICIA
                        </h1>

                        <p className="text-muted small">
                            Publicado por <strong>Admin BlueCrew</strong> | 15 Octubre, 2026
                        </p>
                    </div>
                </div>

                {/* 2. IMAGEN PRINCIPAL */}
                {/* Usamos 'object-fit-cover' para que no se deforme la imagen */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-lg-10">
                        <img
                            src={img1}
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta quam nec lectus consequat tempor.
                            Cras dignissim placerat malesuada. Cras vel lacinia lacus, non interdum erat.
                            Quisque nunc massa, tempus non tincidunt at, sollicitudin eget nulla.
                        </p>

                        <p>
                            Nam cursus euismod tellus, sit amet iaculis augue. Etiam egestas blandit enim, id fermentum nisl pretium sit amet.
                            Aliquam augue augue, congue in leo vitae, ultricies maximus tortor.
                            Cras volutpat quam lorem, nec accumsan risus vulputate at.
                        </p>

                        {/* Cita destacada (opcional pero queda muy bien en blogs) */}
                        <blockquote className="border-start border-4 border-primary ps-4 fst-italic my-4 text-dark">
                            "Proin consequat odio ante, ultrices dapibus eros eleifend sed. Morbi nec turpis dolor."
                        </blockquote>

                        <p>
                            Aliquam quam quam, ultrices laoreet placerat et, facilisis sed ante. Nulla facilisi.
                            Nullam ullamcorper non enim sit amet commodo. Duis ultricies placerat diam eu mattis.
                        </p>

                        <p>
                            Aenean imperdiet nisi pellentesque facilisis euismod. Suspendisse mollis molestie egestas.
                            In massa eros, pulvinar placerat tincidunt nec, sollicitudin non elit.
                        </p>
                    </div>
                </div>

                {/* 4. NAVEGACIÓN (Anterior / Siguiente) */}
                <div className="row justify-content-center mt-5 pt-4 border-top">
                    <div className="col-lg-8 d-flex justify-content-between align-items-center">

                        {/* Botón Anterior */}
                        <a href="#" className="btn btn-secondary px-4 fw-bold">
                            <i className="bi bi-arrow-left me-2"></i> Anterior
                        </a>

                        {/* Botón Siguiente */}
                        <a href="#" className="btn btn-secondary px-4 fw-bold text-white">
                            Siguiente <i className="bi bi-arrow-right ms-2"></i>
                        </a>

                    </div>
                </div>

            </div>
        </section>
    );
};