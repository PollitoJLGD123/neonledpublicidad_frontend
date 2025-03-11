"use client";
import React, { useState } from 'react';

export default function Page() {

  const[declaracion, setDeclaracion] = useState(false);
  const[politica, setPolitica] = useState(false);

  function cambio_politica(valor){
    setPolitica(valor);
    console.log(valor)
  }

  function cambio_declaracion(valor){
    setDeclaracion(valor);
    console.log(valor)
  }


  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    departamento: '',
    direccion: '',
    distrito: '',
    tipo_servicio: '',
    fecha_incidente: '',
    monto_reclamado: '',
    descripcion_servicio: '',
    declaracion_veraz:false,
    acepta_politica:false,
    estado:'Pendiente'
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formData);
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setStatus('loading');

    try {
      formData.declaracion_veraz = declaracion;
      formData.acepta_politica = politica;
      const response = await fetch('http://127.0.0.1:8000/api/create_reclamaciones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          telefono: '',
          departamento: '',
          direccion: '',
          distrito: '',
          tipo_servicio: '',
          fecha_incidente: '',
          monto_reclamado: '',
          descripcion_servicio: '',
          declaracion_veraz:false,
          acepta_politica:false,
          estado:'Pendiente'
        });
        setDeclaracion(false);
        setPolitica(false);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus(error);
    }
  };
  return (
    <>
      <main className="bg-black text-white flex p-8 justify-center items-center">
        <img className="h-16 md:h-32" src="/reclamaciones/libro.png" alt="" />
        <h1 className="text-2xl font-bold md:text-5xl max-w-min">
          LIBRO DE RECLAMACIONES
        </h1>
      </main>
      <section className="p-8 text-[#b2b2b2] md:border-2 md:my-16 border-[#b2b2b2] max-w-3xl mx-auto">
        {status === 'success' && <p className="text-green-600 text-center">¡Mensaje enviado con éxito!</p>}
        {status === 'error' && <p className="text-red-600 text-center">Hubo un error, inténtalo de nuevo.</p>}
        <h2 className="text-center text-black md:text-left">
          Déjanos tus datos para poder atender tu reclamo
        </h2>

        <form onSubmit={handleSubmit}>
          <h3 className="text-xl text-center mb-4 mt-2 text-black md:text-left">
            Identidad del consumidor reclamante
          </h3>

          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
            <Input placeholder="Nombre*" type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            <Input placeholder="Apellido*" type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
            <Input placeholder="Email*" type="email" name="email" value={formData.email} onChange={handleChange} required />
            <Input placeholder="Telefono*" type="text" name="telefono" value={formData.telefono} onChange={handleChange} required />
            <Input placeholder="Departamento*" type="text" name="departamento" value={formData.departamento} onChange={handleChange} required />
            <Input placeholder="Dirección*" type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
            <Input placeholder="Distrito*" type="text" name="distrito" value={formData.distrito} onChange={handleChange} required />
          </div>

          <h3 className="text-xl text-center mb-4 mt-6 text-black md:text-left">
            Información del servicio
          </h3>

          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
            <select
              name="tipo_servicio"
              value={formData.tipo_servicio} 
              onChange={handleChange}
              className="border-[#b2b2b2] border-2 p-2 bg-white"
              required
            >
              <option value="" disabled>Tipo</option> 
              <option value="Tipo A">Tipo A</option>
              <option value="Tipo B">Tipo B</option>
              <option value="Tipo C">Tipo C</option>
            </select>


            <Input placeholder="Fecha*" type="date" name="fecha_incidente" value={formData.fecha_incidente} onChange={handleChange} required />
            <Input placeholder="Monto reclamado*" type="number" name="monto_reclamado" value={formData.monto_reclamado} onChange={handleChange} required />
          </div>
          <textarea
            name="descripcion_servicio" value={formData.descripcion_servicio} onChange={handleChange}
            className="border-[#b2b2b2] border-2 p-2 w-full mt-4"
            rows={5}
            placeholder="Descripción del servicio*"
            required
          ></textarea>

          <label className="flex gap-2 my-4" htmlFor="veraz">
            <input className="w-8" value={declaracion} checked={declaracion} name="declaracion_veraz" type="checkbox" onChange={valor => cambio_declaracion(valor.target.checked)} id="veraz"  required />
            Doy fe que los datos e información proporcionados son veraces*
          </label>

          <label className="flex gap-2 my-4" htmlFor="politica">
            <input value={politica} checked={politica} name="acepta_politica"  className="w-8" type="checkbox" onChange={valor => cambio_politica(valor.target.checked)} id="politica" required />
            <span>
              Acepto la{' '}
              <a className="text-[#007bf9]">
                Política de Privacidad y Protección de Datos Personales
              </a>
              *
            </span>
          </label>

          <p>
            Neon Led Publicidad deberá dar respuesta al reclamo o queja en un
            plazo no mayor a quince (15) días hábiles.
          </p>

          <button type="submit" className="bg-[#0c1a27] rounded-full p-4 px-16 font-bold block m-auto text-white">
            {status === 'loading' ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </section>
    </>
  );
}

function Input({ placeholder, type, name, value, onChange }) {
  return (
    <input
      className="border-[#b2b2b2] border-2 p-2 flex-1 md:last:w-1/2"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  );
}

