export default function Page() {
  return (
    <>
      <main>
        <h1>LIBRO DE RECLAMACIONES</h1>
      </main>
      <section>
        <h2>Déjanos tus datos para poder atender tu reclamo</h2>

        <form>
          <h3>Identidad del consumidor reclamante</h3>

          <div>
            <Input placeholder="Nombre*" type="text" />
            <Input placeholder="Apellido*" type="text" />
            <Input placeholder="Email*" type="email" />
            <Input placeholder="Telefono*" type="text" />
            <Input placeholder="Departamento*" type="text" />
            <Input placeholder="Dirección*" type="text" />
            <Input placeholder="Distrito*" type="text" />
          </div>

          <h3>Información del servicio</h3>

          <div>
            <select required>
              <option disabled selected>
                Tipo
              </option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>

            <Input placeholder="Fecha*" type="text" />
            <Input placeholder="Monto reclamado*" type="number" />

            <textarea
              placeholder="Descripción del servicio*"
              required
            ></textarea>
          </div>

          <input type="checkbox" id="veraz" />
          <label htmlFor="veraz ">
            Doy fe que los datos e información proporcionados son veraces*
          </label>

          <p>
            Neon Led Publicidad deberá dar respuesta al reclamo o queja en un
            plazo no mayor a quince (15) días hábiles.
          </p>

          <input type="checkbox" id="politica" />
          <label htmlFor="politica">
            Acepto la{' '}
            <a>Política de Privacidad y Protección de Datos Personales</a>*
          </label>

          <button>Enviar</button>
        </form>
      </section>
    </>
  );
}

function Input({ placeholder, type }) {
  return <input type={type} placeholder={placeholder} required />;
}
