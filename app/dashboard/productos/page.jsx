"use client"

import { useSearchParams } from 'next/navigation';
import Pagination from '../components/Pagination';
import Table from '../components/Table';
import FormModal from '../components/FormModal';
import EditFormModal from '../components/EditFormModal';
import { useEffect, useState } from 'react';

const headers = ['id', 'nombre'];

export default function Page() {
  const searchParams = useSearchParams()
  const currentPage = searchParams.get('page') || 1
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [currentService, setCurrentService] = useState(null)

  async function setProducts(page) {
    try {
      setLoading(true)
      const response = await fetch(`http://127.0.0.1:8000/api/servicios?page=${page}`)
      const data = await response.json()
      
      console.log('API Response:', data)
      
      if (data && Array.isArray(data.data)) {
        setData(data.data)
        setCount(data.total || data.data.length)
        setError(false)
      } else {
        console.error('Formato de datos inválido:', data)
        setError(true)
      }
    } catch (err) {
      console.error('Error detallado:', {
        message: err.message,
        status: err.status,
        response: err.response
      })
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      if (isNaN(currentPage)) {
        await setProducts(1)
        return
      }
      await setProducts(parseInt(currentPage))
    }
    fetchProducts()
  }, [currentPage])

  const handleCreate = async (formData) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/servicios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setShowModal(false)
        await setProducts(currentPage)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleUpdate = async (id, formData) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/servicios/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setShowEditModal(false)
        await setProducts(currentPage)
      }
    } catch (error) {
      console.error('Error al actualizar el servicio:', error)
    }
  }

  const handleDelete = async (id) => {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este servicio?')
    if (!confirmDelete) return

    try {
      console.log(`Eliminando servicio con ID: ${id}`) // Log para debugging
      const response = await fetch(`http://127.0.0.1:8000/api/servicios/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        console.log(`Servicio con ID: ${id} eliminado correctamente`) // Log para debugging
        await setProducts(currentPage)
      } else {
        console.error(`Error al eliminar el servicio con ID: ${id}`)
      }
    } catch (error) {
      console.error('Error al eliminar el servicio:', error)
    }
  }

  return (
    <main className="p-4 overflow-scroll flex flex-col w-full h-[100vh] flex-1">
      <h2 className="text-4xl font-bold mb-4">Servicios</h2>
      <button 
        className='bg-blue-600 text-white p-2 rounded-md mb-4 font-bold'
        onClick={() => {
          setCurrentService(null)
          setShowModal(true)
        }}
      >
        Crear
      </button>
      
      {loading ? (
        <div className="text-center">Cargando...</div>
      ) : error ? (
        <div className="text-red-500">Error al cargar los datos</div>
      ) : (
        <>
          <Table 
            headers={headers} 
            data={data} 
            onDelete={handleDelete}
            onUpdate={(id) => {
              const service = data.find(item => item.id === id)
              setCurrentService(service)
              setShowEditModal(true)
            }}
          />
          <Pagination count={count} />
        </>
      )}

      {showModal && (
        <FormModal 
          onClose={() => setShowModal(false)}
          onSubmit={handleCreate}
        />
      )}

      {showEditModal && (
        <EditFormModal 
          onClose={() => setShowEditModal(false)}
          onSubmit={(formData) => handleUpdate(currentService.id, formData)}
          initialData={currentService}
        />
      )}
    </main>
  );
}