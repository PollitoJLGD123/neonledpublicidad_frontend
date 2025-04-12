
import React from 'react'
import { Footer, Header, Body3 } from '../components';

export default function Page() {
    return (
        <div>
            <Header url_image={"/blog/HOLOGRAFICO.png   "} 
            tituloPrincipal="Hipnotizalos con tus Luces"
            tituloSecundario='Hipnotizalos con las maraviilas de la experencia en las luces led'
            descripcion='Explora las maravillas de las luces con efectos de hipnotizaciones y oscuridad '/>
            
            <div className="container mx-auto px-4 py-12 relative bg-gradient-to-r text-black min-h-screen w-full">
                <div className="hidden lg:block w-20 xl:w-24 2xl:w-32 bg-gradient-to-b from-red-700 via-sky to-blue-800 fixed left-0 top-0 h-full -z-10"></div>

                <Body3 />

                <Footer 
                url_image1={"/blog/motoled.jpg"} 
                url_image2={"/blog/led123.jpg"} 
                url_image3={"/blog/led1234.jpg"} 
                descripcion={"Los letreros neonLED oscuros no solo son una herramienta de comunicación visual, sino una declaración estética que aporta modernidad y carácter a cualquier espacio."}
                />

            </div>
        </div>
    )
}
