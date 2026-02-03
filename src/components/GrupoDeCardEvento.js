import CardEvento from "./CardEvento";

export default function GrupoDeCardEvento({ datos }) {
    return (
        <section class="container mb-5">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                {datos && datos.map((evento, index) => (
                    <CardEvento
                        key={index}
                        imagen={evento.imagen}
                        titulo={evento.titulo}
                        descripcion={evento.descripcion}
                    />
                ))}
            </div>
        </section>
    );
}