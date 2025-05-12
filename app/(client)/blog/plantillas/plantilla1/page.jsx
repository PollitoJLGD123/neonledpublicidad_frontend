"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Swal from "sweetalert2"
import Header from "../components/Header"
import Body1 from "../components/Body1"
import Footer from "../components/Footer"
import Fetch from "../../services/fetch"
import { Loader2 } from "lucide-react"

const Page = () => {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen text-gray-700">Cargando...</div>}>
      <PageContent />
    </Suspense>
  )
}

const PageContent = () => {
  const [data, setDataResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const searchParams = useSearchParams()
  const id_blog = searchParams.get("id_blog")

  useEffect(() => {
    const fetchBlogData = async () => {
      if (!id_blog) {
        setError("ID de blog no proporcionado")
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)
        setError(null)
        const response = await Fetch.fetchBlogById(id_blog)
        setDataResponse(response)
      } catch (error) {
        console.error("Error fetching blog data:", error)
        setError("No se pudo cargar el contenido del blog")
        Swal.fire({
          title: "Error",
          text: "Ocurrió un error inesperado.",
          icon: "error",
          confirmButtonText: "OK",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogData()
  }, [id_blog]) 

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-3">{error}</h1>
          <p className="text-gray-600 mb-6">No pudimos cargar el contenido del blog. Por favor, intenta nuevamente.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 className="h-12 w-12 text-gray-700 animate-spin" />
        <p className="text-gray-700 ml-3">Cargando blog...</p>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center">
          <div className="text-gray-400 text-6xl mb-4">📄</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-3">Blog no encontrado</h1>
          <p className="text-gray-600 mb-6">El blog que estás buscando no existe o no está disponible.</p>
          <a
            href="/blog"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors inline-block"
          >
            Volver a blogs
          </a>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header id_blog_head={data.id_blog_head} />

      <div className="container mx-auto px-4 py-12 relative bg-gradient-to-r text-black min-h-screen w-full">
        <div className="hidden lg:block w-20 xl:w-24 2xl:w-32 bg-gradient-to-b from-red-700 via-sky to-blue-800 fixed left-0 top-0 h-full -z-10"></div>

        <Body1 id_blog_body={data.id_blog_body} fecha={data.fecha} />

        <Footer id_blog_footer={data.id_blog_footer} />
      </div>
    </div>
  )
}

export default Page
