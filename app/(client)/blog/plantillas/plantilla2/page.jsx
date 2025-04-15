"use client"

import { Footer, Header, Body2 } from '../components';
import React from 'react'

const page = () => {
  return (
    <div>   
        <Header url_image={"/blog/letra_neonled.png"} 
          tituloPrincipal="TU BAR EN LA MIRA"
          tituloSecundario='Ilumina tu espacio, cautiva a tus clientes'
          descripcion='Transforma la atmósfera de tu bar con luces neón LED vibrantes y llenas de estilo. '/>
          <div className="container mx-auto px-4 py-12 relative bg-gradient-to-r text-black min-h-screen w-full">
          <div className="hidden lg:block w-20 xl:w-24 2xl:w-32 bg-gradient-to-b from-red-700 via-sky to-blue-800 fixed left-0 top-0 h-full -z-10"></div>
          <Body2 />

        <Footer 
          url_image1={"/blog/blog-14.jpg"} 
          url_image2={"/blog/blog-15.jpg"} 
          url_image3={"/blog/blog-16.jpg"} 
          descripcion={"Al comprender las tendencias, el comportamiento del consumidor y las mejores prácticas de cada plataforma, podemos ayudarte a posicionar tu marca de manera efectiva. Invertir en una gestión profesional de redes sociales es esencial para mantener una presencia digital activa, relevante y rentable."}
          />
          </div>
    </div>
  )
}

export default page;