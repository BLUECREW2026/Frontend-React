export default  function ONGSection() {
  return (
    <section>
      <div className="container-fluid text-center py-5 custom-gradient text-white">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="fw-bold mb-4">¿Eres una ONG?</h2>
            <p>
              Organiza tus propios eventos y recluta voluntarios para tus
              iniciativas de conservación marina.
            </p>
            <button
              type="button"
              className="btn btn-primary text-white"
              onClick={() => console.log("Click en saber más")}
            >
              Saber más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
