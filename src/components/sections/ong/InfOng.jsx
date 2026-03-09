import "./estilosOds.scss"; 
import mios from "../../../assets/img/sobreNosotros/blue.jpg";
import otra from "../../../assets/img/sobreNosotros/nosotros.jpg";

export default function InfOng() {
  

  const logos = [mios, otra, mios, otra, mios, otra];

  return (
    <div 
      className="colaboradores-section py-5 position-relative" 
      
    >
      <div className="container-fluid text-center overflow-hidden">
        <h3 className="text-secondary mb-5 fs-3 fw-semibold">COLABORAMOS CON:</h3>

       
        <div className="slider-logos">
          
        
          <div className="slide-track">
            
         
            {logos.map((logo, index) => (
              <div className="slide" key={`logo-original-${index}`}>
                <img src={logo} alt={`Colaborador ${index}`} />
              </div>
            ))}

           
            {logos.map((logo, index) => (
              <div className="slide" key={`logo-duplicado-${index}`}>
                <img src={logo} alt={`Colaborador ${index}`} />
              </div>
            ))}

          </div>
        </div>
        
      </div>
    </div>
  );
}