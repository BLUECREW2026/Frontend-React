/* eslint-disable jsx-a11y/alt-text */
export default function Card_Evento() {
    return (
        <div class="col p-3">
            <article class="card rounded-4 p-3 bg-white shadow">
                <div class="ratio ratio-4x3">
                    <img class="card-img-top rounded-4 object-fit-cover border border-primary border-2"
                        src="assets/img/cards/card-image-1.webp" />
                </div>
                <div class="card-body">
                    <h3 class="card-title">Título</h3>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                        voluptatem, magnam velit quidem mollitia cumque aperiam.
                    </p>
                    <div class="text-center">
                        <button class="btn btn-primary text-light fw-bold">Inscribirse</button>
                    </div>
                </div>
            </article>
        </div>
    );
} 