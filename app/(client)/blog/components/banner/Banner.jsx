import React from 'react';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
    subsets: ['latin'], 
    weight: ['400', '500', '700'],
    variable: '--font-montserrat'
  })
export default function Banner() {
    
    return (
        <div className="relative w-full h-[600px] bg-black overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: "url('/blog/banner/banner.webp')", // Ruta absoluta desde la carpeta public
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50" />
            </div>
            {/* Curved edges */}
            <div className="absolute top-0 right-0 w-1/3 h-32">
                <div
                    className="w-full h-full bg-blue-500/80 rounded-bl-[100px] border border-white" // Línea blanca
                />
            </div>
            <div className="absolute bottom-0 left-0 w-1/3 h-32">
                <div
                    className="w-full h-full bg-blue-500/80 rounded-tr-[100px] border border-white" // Línea blanca
                />
            </div>
            {/* Content container */}
            <div className="relative h-full flex flex-col items-center justify-center text-white px-4 z-10">
                {/* Small text */}
                <span
                    className={`${montserrat.variable} text-[25px] uppercase tracking-wider mb-4`} 
                    style={{ fontSize: '25px' }} // Tamaño personalizado
                >
                    BLOG
                </span>
                {/* Main heading */}
                <h1
                    className={`${montserrat.variable} text-[120px] font-bold mb-6 text-center`}
                    style={{ fontSize: '120px' }} // Tamaño personalizado
                >
                    ¿Quieres conocer más?
                </h1>
                {/* Subtitle */}
                <p
                    className={`${montserrat.variable} text-[22px] text-center max-w-2xl`}
                    style={{ fontSize: '22px' }} // Tamaño personalizado
                >
                    Mira cómo trabajamos cada uno de nuestros productos.
                </p>
            </div>
            {/* Glowing effect overlays */}
            <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-pink-500/30 blur-xl" />
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/30 blur-xl" />

            {/* Optional: Add more subtle glowing effects */}
            <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-purple-500/20 blur-xl" />
            <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-cyan-500/20 blur-xl" />
        </div>
    );
}