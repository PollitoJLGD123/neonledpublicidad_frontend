"use client";

import './reclamaciones.css';
import React, { useState } from 'react';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    tipoDocumento: '',
    documento: '',
    correo: '',
    celular: '',
    direccion: '',
    distrito: '',
    ciudad: '',
    tipoReclamo: '',
    servicioContratado: '',
    incidente: '',
    aceptaPoliticas: false,
    conoceReclamo: false,
  });

  const [mensaje, setMensaje] = useState('');  // Estado para el mensaje de respuesta
  const [error, setError] = useState(''); // Estado para manejar errores de validación

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación: ambas casillas deben estar marcadas
    if (!formData.conoceReclamo || !formData.aceptaPoliticas) {
      setError('Debes aceptar las políticas de privacidad y ser consciente de la formulación del reclamo.');
      return;
    }

    setError(''); // Limpiar mensaje de error si pasa la validación

    try {
      const response = await fetch('/api/reclamos', {  // Consumo de la API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),  // Envío de los datos del formulario
      });

      if (response.ok) {
        const result = await response.json();
        setMensaje('Su solicitud fue enviada correctamente.');  // Mensaje de éxito
        console.log('Respuesta del servidor:', result);
        setFormData({
          nombre: '',
          apellido: '',
          tipoDocumento: '',
          documento: '',
          correo: '',
          celular: '',
          direccion: '',
          distrito: '',
          ciudad: '',
          tipoReclamo: '',
          servicioContratado: '',
          incidente: '',
          aceptaPoliticas: false,
          conoceReclamo: false,
        });
      } else {
        setMensaje('Hubo un error al enviar el reclamo. Por favor, intenta nuevamente.');  // Mensaje de error
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      setMensaje('Error de red. Por favor, intenta nuevamente.');  // Mensaje de error
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#6f4be8] flex justify-center items-center">
        <img src="/headerFooter/logoFooter.webp" alt="Digimedia" className="my-10 w-40 h-auto" />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-4">Libro de Reclamaciones</h1>
          <p className="text-sm text-gray-600 mb-2">
            Conforme está establecido en el Código de Protección y Defensa del Consumidor contamos con un Libro de Reclamaciones Virtual a tu disposición DigiMedia.com
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Debes de tener en cuenta que tus reclamos conforme a ley deben ser resueltos en un plazo no mayor a 30 días, pudiendo extenderse el plazo cuando la naturaleza del reclamo lo acredite. Art. 24.1 Ley 29571.
          </p>
          <p className="text-sm font-semibold mb-4">
            Razón Social: DIGIMEDIA MARKETING S.A.C. RUC: 20605116559
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-center mb-6">Cuestionario de quejas</h2>

          {mensaje && (
            <div className={`text-center mb-4 p-4 ${mensaje.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
              {mensaje}
            </div>
          )}

          {error && (
            <div className="text-center mb-4 p-4 text-red-500">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <h3 className="font-semibold">Datos Personales:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  placeholder="Apellido"
                  className="w-full p-2 border rounded"
                />
                <select
                  name="tipoDocumento"
                  value={formData.tipoDocumento}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Seleccionar una opción</option>
                  <option value="DNI">DNI</option>
                  <option value="RUC">RUC</option>
                  <option value="CE">CE</option>
                  <option value="PTP">PTP</option>
                  <option value="OTROS">OTROS...</option>
                </select>
                <input
                  type="text"
                  name="documento"
                  value={formData.documento}
                  onChange={handleChange}
                  placeholder="Documento"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="Correo Electrónico"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="tel"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  placeholder="Celular"
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  placeholder="Dirección"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="distrito"
                  value={formData.distrito}
                  onChange={handleChange}
                  placeholder="Distrito"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                  placeholder="Ciudad"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Datos de incidente:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="tipoReclamo"
                  value={formData.tipoReclamo}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Seleccionar tipo de reclamo</option>
                  <option value="QUEJA">QUEJA</option>
                  <option value="RECLAMO">RECLAMO</option>
                </select>
                <select
                  name="servicioContratado"
                  value={formData.servicioContratado}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Seleccionar servicio contratado</option>
                  <option value="TECHNOLOGY">TECHNOLOGY</option>
                  <option value="OTROS">OTROS</option>
                </select>
              </div>
              <textarea
                name="incidente"
                value={formData.incidente}
                onChange={handleChange}
                placeholder="Indicar incidente"
                className="w-full p-2 border rounded h-32"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="conoceReclamo"
                  checked={formData.conoceReclamo}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                />
                <p className="text-sm">
                  Soy consciente que la formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI. *El proveedor deberá dar respuesta al reclamo en un plazo no mayor a treinta (30) días calendario, de acuerdo a la Ley 29571
                </p>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="aceptaPoliticas"
                  checked={formData.aceptaPoliticas}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                />
                <p className="text-sm">
                  Acepto las Políticas de Privacidad.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full p-2 rounded transition-all duration-300 ${formData.aceptaPoliticas && formData.conoceReclamo ? 'bg-[#6f4be8] hover:bg-[#5c40d1]' : 'bg-gray-400 cursor-not-allowed'}`}
              disabled={!formData.aceptaPoliticas || !formData.conoceReclamo} // Deshabilitar si alguna casilla no está marcada
            >
              Enviar Reclamación
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
