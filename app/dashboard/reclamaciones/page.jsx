"use client";

import { useEffect, useState, Suspense } from "react";
import Pagination from "../components/Pagination";
import Table from "../components/DataTable";
import { useSearchParams } from "next/navigation";

const headers = [
  "id",
  "nombre",
  "apellido",
  "email",
  "telefono",
  "departamento",
  "direccion",
  "distrito",
  "tipo de reclamacion",
  "fecha",
  "monto reclamado",
  "descripcion",
  "aceptar terminos 1",
  "aceptar terminos 2",
];

const dataTest = [];

function ClaimsTable() {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || 1;
  const [data, setData] = useState(dataTest);

  function setProducts(page) {
    // Aquí va el fetch de los datos
  }

  useEffect(() => {
    const fetchProducts = async () => {
      if (isNaN(currentPage)) {
        setProducts(1);
        return;
      }

      setProducts(parseInt(currentPage));
    };

    fetchProducts();
  }, [currentPage]); // Se ejecuta cuando cambia la query

  return (
    <>
      <Table headers={headers} data={data} />
      <Pagination count={data.length} />
    </>
  );
}

export default function Page() {
  return (
    <main className="p-4 overflow-scroll flex flex-col w-full h-[100vh] flex-1">
      <h2 className="text-4xl font-bold mb-4">Libro de Reclamaciones</h2>
      <Suspense fallback={<p>Cargando datos...</p>}>
        <ClaimsTable />
      </Suspense>
    </main>
  );
}
