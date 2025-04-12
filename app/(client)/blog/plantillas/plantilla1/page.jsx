
import React from 'react'
import { Footer, Header, Body1 } from '../components';

export default function Page() {
    return (
        <div>
            <Header url_image={"/blog/blog-13.jpg   "} 
            tituloPrincipal="Gestion de redes sociales"
            tituloSecundario='Experimenta el contenido con las redes sociales'
            descripcion='Explora las tendencias emergentes en las redes sociales, con las nuevas aplicaciones y contenidos '/>
            
            <div className="container mx-auto px-4 py-12 relative bg-gradient-to-r text-black min-h-screen w-full">
                <div className="hidden lg:block w-20 xl:w-24 2xl:w-32 bg-gradient-to-b from-red-700 via-sky to-blue-800 fixed left-0 top-0 h-full -z-10"></div>

                <Body1 />

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