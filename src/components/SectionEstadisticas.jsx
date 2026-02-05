export default function Estadisticas() {
  return (
    <section>
      <div class="container text-center py-5 text-secondary">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <i class="bi bi-person-circle fs-1"></i>
            <h3 class="fw-bold mt-2">421.768</h3>
            <p>Voluntarios Activos</p>
          </div>

          <div class="col">
            <i class="bi bi-calendar4 fs-1"></i>
            <h3 class="fw-bold mt-2">7135</h3>
            <p>Eventos Realizados</p>
          </div>

          <div class="col">
            <i class="bi bi-recycle fs-1"></i>
            <h3 class="fw-bold mt-2">32567 Kg</h3>
            <p>Residuos Recogidos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
