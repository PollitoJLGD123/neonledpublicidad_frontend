export default function Page() {
  return (
    <>
      <main className="bg-black text-white flex p-8 justify-center items-center">
        <img className="h-16 md:h-32" src="/reclamaciones/libro.png" alt="" />
        <h1 className="text-2xl font-bold md:text-5xl max-w-min">
          LIBRO DE RECLAMACIONES
        </h1>
      </main>
      <section className="p-8 text-[#b2b2b2] md:border-2 md:my-16 border-[#b2b2b2] max-w-3xl mx-auto">
        <h2 className="text-center text-black md:text-left">
          Déjanos tus datos para poder atender tu reclamo
        </h2>

        <form>
          <h3 className="text-xl text-center mb-4 mt-2 text-black md:text-left">
            Identidad del consumidor reclamante
          </h3>

          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
            <Input placeholder="Nombre*" type="text" />
            <Input placeholder="Apellido*" type="text" />
            <Input placeholder="Email*" type="email" />
            <Input placeholder="Telefono*" type="text" />
            <Input placeholder="Departamento*" type="text" />
            <Input placeholder="Dirección*" type="text" />
            <Input placeholder="Distrito*" type="text" />
          </div>

          <h3 className="text-xl text-center mb-4 mt-6 text-black md:text-left">
            Información del servicio
          </h3>

          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
            <select className="border-[#b2b2b2] border-2 p-2 bg-white" required>
              <option disabled selected>
                Tipo
              </option>
              <option>Tipo A</option>
              <option>Tipo B</option>
              <option>Tipo C</option>
            </select>

            <Input placeholder="Fecha*" type="text" />
            <Input placeholder="Monto reclamado*" type="number" />
          </div>
          <textarea
            className="border-[#b2b2b2] border-2 p-2 w-full mt-4"
            rows={5}
            placeholder="Descripción del servicio*"
            required
          ></textarea>

          <label className="flex gap-2 my-4" htmlFor="veraz">
            <input className="w-8" type="checkbox" id="veraz" />
            Doy fe que los datos e información proporcionados son veraces*
          </label>

          <p>
            Neon Led Publicidad deberá dar respuesta al reclamo o queja en un
            plazo no mayor a quince (15) días hábiles.
          </p>

          <label className="flex gap-2 my-4" htmlFor="politica">
            <input className="w-8" type="checkbox" id="politica" />
            <span>
              Acepto la{' '}
              <a className="text-[#007bf9]">
                Política de Privacidad y Protección de Datos Personales
              </a>
              *
            </span>
          </label>

          <button className="bg-[#0c1a27] rounded-full p-4 px-16 font-bold block m-auto text-white">
            Enviar
          </button>
        </form>
      </section>
    </>
  );
}

function Input({ placeholder, type }) {
  return (
    <input
      className="border-[#b2b2b2] border-2 p-2 flex-1 md:last:w-1/2"
      type={type}
      placeholder={placeholder}
      required
    />
  );
}
