"use client"

import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import Table from '../components/Table';
import { useSearchParams } from 'next/navigation'

const headers = [
  'id',
  'nombre',
  'apellido',
  'documento',
  'numero de documento',
  'email',
  'celular',
  'direccion',
  'distrito',
  'ciudad',
  'tipo de reclamacion',
  'servicio contratado',
  'reclamo persona',
  'aceptar terminos 1',
  'aceptar terminos 2',
];

const dataTest = [];

export default function Page() {

  const searchParams = useSearchParams()
    const currentPage = searchParams.get('page') || 1
    const [data, setData] = useState(dataTest)
    function setProducts(page) {
      //aqui va el fetch
    }
  
    useEffect(() => {
      
      const fetchProducts = async () => {
        if (isNaN(currentPage)) {
          setProducts(1)
          return
        }
        
        setProducts(parseInt(currentPage))
      }
  
      fetchProducts()
    }, [currentPage]) // Re-ejecutar cuando cambia la query

  return (
    <main className="p-4 overflow-scroll flex flex-col w-full h-[100vh] flex-1">
      <h2 className="text-4xl font-bold mb-4">Libro de Reclamaciones</h2>
      <Table headers={headers} data={data} />
      <Pagination count={data.length}/>
    </main>
  );
}
