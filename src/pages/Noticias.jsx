import CardNoticias from "../components/cards/CardNoticias";

export default function Noticias({ noticias }) {
    return (
        <section class="container mb-5 mt-4">
            <div class="row">
                {noticias && noticias.map((noticia, index) => (
                    <CardNoticias
                        key={index}
                        id={index}
                        noticia={noticia}
                    />
                ))}
            </div>
        </section>
    )
}