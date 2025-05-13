"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import fetch from "../../services/fetch";
import { Loader2, BookOpen, AlertCircle } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useRouter, useSearchParams } from "next/navigation"; 

const ITEMS_PER_PAGE = 4;

const Blogs = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);

  const [data, setDataResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  async function fetchData() {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch.fetchCards();
      setDataResponse(response);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Ocurrió un error al cargar los blogs. Por favor, intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData(data);
      setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));
    } else {
      const filtered = data.filter(
        (card) =>
          card.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
      setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
    }
  }, [searchTerm, data]);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredData.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    router.push(`?page=${page}`);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-[--azul_cobalto]" />
          <p className="text-gray-500 animate-pulse">Cargando blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <div className="mt-4 flex justify-center">
          <Button onClick={fetchData} variant="outline">
            Intentar nuevamente
          </Button>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6 text-center">
          <div className="bg-gray-100 p-6 rounded-full">
            <BookOpen className="h-12 w-12 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold">No hay blogs disponibles</h2>
          <p className="text-gray-500 max-w-md">
            Actualmente no hay blogs publicados. Vuelve a revisar más tarde para nuevos contenidos.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-2">
      <h1 className="text-3xl font-bold mb-8 text-center lg:text-center mt-8 lg:mt-0">Nuestros Blogs</h1>

      {/* Barra de búsqueda */}
      <div className="mb-8 w-full sm:w-full lg:w-1/2 sm:mx-auto flex items-center">
        <input
          type="text"
          placeholder="Buscar blogs..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {getCurrentPageItems().map((dato, index) => (
          <Card
            key={`${dato.id_card}-Card`}
            className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl bg-[#0e1721] text-white"
          >
            <div className="flex flex-col lg:flex-row lg:h-72">
              <div className="relative h-56 lg:h-full lg:w-2/5">
                <img
                  src={dato.public_image || "/placeholder.svg"}
                  alt={dato.titulo || "Imagen del blog"}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-[#0e1721]"></div>
              </div>
              <CardContent className="w-full lg:w-3/5 p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold line-clamp-2">{dato.titulo}</h2>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{dato.descripcion}</p>
                </div>
                <CardFooter className="px-0 pt-4">
                  <Link href={`./plantillas/plantilla${dato.id_plantilla}?id_blog=${dato.id_blog}`} className="w-full">
                    <Button className="w-full bg-gradient-to-r from-[--azul_cobalto] to-[--azul_cobalto] hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]">
                      Leer más
                    </Button>
                  </Link>
                </CardFooter>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              className={`p-2 rounded-full ${currentPage <= 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600 transition-all"}`}
              aria-label="Página anterior"
            >
              <span className="text-2xl">{'<'}</span>
            </button>

            {/* Páginas */}
            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold transition-all duration-300 
                    ${currentPage === page ? "bg-blue-600 text-white" : "bg-white text-blue-600 hover:bg-blue-50"}`}
                  aria-label={`Página ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className={`p-2 rounded-full ${currentPage >= totalPages ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600 transition-all"}`}
              aria-label="Página siguiente"
            >
              <span className="text-2xl">{'>'}</span>
            </button>
          </div>

      )}
    </div>
  );
};

export default Blogs;