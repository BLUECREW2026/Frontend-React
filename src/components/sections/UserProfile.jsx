import profilePhoto from '../../assets/img/profile/profile-placeholder.webp';

export default function UserProfile() {

  const userData = {
    nombre: "Pepito",
    apellidos: "Gafotas Garrulo",
    email: "yupiyupi@gmail.com",
    localidad: "Me la invento 16, Alicante, 12345, España",
    bio: "Apasionado/a por la conservación marina y el impacto social. Con el mar como segunda casa, he dedicado gran parte de mi tiempo libre a combinar mis habilidades con el voluntariado activo. Creo firmemente que pequeñas acciones locales generan grandes olas de cambio global."
  };

  return (
    <section className="container p-5 mt-5 mb-5">

      {/* Tarjeta Principal */}
      <div className="card shadow rounded-4 p-4 p-md-5 bg-white border-0">
        <div className="row">

          {/* COLUMNA IZQUIERDA: Foto de Perfil */}
          <div className="col-md-4 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <img
              src={profilePhoto}
              alt="Foto de perfil"
              className="rounded-circle border border-3 border-white shadow-sm"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
          </div>

          {/* COLUMNA DERECHA: Datos */}
          <div className="col-md-8">

            {/* Lista de Datos Personales */}
            <div className="d-flex flex-column justify-content-center gap-1 ms-4">
              <div className="d-flex align-items-baseline">
                <p className="text-secondary fw-bolder me-2">Nombre:</p>
                <span>{userData.nombre}</span>
              </div>

              <div className="d-flex align-items-baseline">
                <p className="text-secondary fw-bolder me-2">Apellidos:</p>
                <span>{userData.apellidos}</span>
              </div>

              <div className="d-flex align-items-baseline">
                <p className="text-secondary fw-bolder me-2">Correo Electrónico:</p>
                <span>{userData.email}</span>
              </div>

              <div className="d-flex align-items-baseline">
                <p className="text-secondary fw-bolder me-2">Localidad: </p>
                <span>{userData.localidad}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-11 ms-4 mt-4">
          {/* Sección Biografía */}
          <div className="mb-4">
            <h5 className="text-uppercase mb-3 text-secondary fw-bold">
              Biografía
            </h5>
            <p className="text-secondary lh-base">
              {userData.bio}
            </p>
          </div>

          {/* Botón de Acción */}
          <div>
            <button className="btn btn-primary text-white fw-bold rounded-3 shadow-sm p-3">
              Modificar Datos Personales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}