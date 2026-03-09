import { Link } from "react-router-dom";
export default function ONGSection() {
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
           

            <div className="btn btn-primary text-white">
            <Link 
              to="/ong" 
              className="btn btn-primary text-light fw-bold w-100 rounded-3 py-2"
            >
              Saber más
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
