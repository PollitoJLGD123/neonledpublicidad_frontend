"use client";

import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/contactanos";

const headers = [
  "nombre",
  "apellido",
  "telefono",
  "distrito",
  "tipo_reclamo",
];

export default function Page() {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || 1;
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  async function fetchContacts(page = 1) {
    try {
      const response = await axios.get(`${API_BASE_URL}?page=${page}`);
      setData(response.data.data);
      setTotalPages(response.data.last_page);
    } catch (error) {
      console.error("Error al obtener contactos:", error);
    }
  }

  async function deleteContact(id) {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      alert("Contacto eliminado exitosamente");
      fetchContacts(currentPage);
    } catch (error) {
      console.error("Error al eliminar contacto:", error);
    }
  }

  async function toggleContactStatus(id, currentState) {
    try {
      const newStatus = currentState === 0 ? 1 : 0;
      await axios.put(`${API_BASE_URL}/${id}`, { estado: newStatus });
      alert("Estado actualizado exitosamente");
      fetchContacts(currentPage);
    } catch (error) {
      console.error("Error al actualizar el estado del contacto:", error);
    }
  }

  useEffect(() => {
    fetchContacts(currentPage);
  }, [currentPage]);

  return (
    <main className="p-4 overflow-scroll flex flex-col w-full h-[100vh] flex-1">
      <h2 className="text-4xl font-bold mb-4">Sección principal</h2>
      <Table
        headers={headers}
        onDelete={false}
        onUpdate={false}
        data={data.map((contact) => ({
          ...contact,
          acciones: (
            <div className="flex gap-2">
              <button
                onClick={() => deleteContact(contact.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
              >
                Eliminar
              </button>
              <button
                onClick={() => toggleContactStatus(contact.id, contact.estado)}
                className={`px-3 py-1 rounded-md ${
                  contact.estado === 0
                    ? "bg-yellow-500 hover:bg-yellow-700"
                    : "bg-green-500 hover:bg-green-700"
                } text-white`}
              >
                {contact.estado === 0 ? "Marcar como Atendido" : "Marcar como Pendiente"}
              </button>
            </div>
          ),
        }))}
      />
      <Pagination count={totalPages} />
    </main>
  );
}
