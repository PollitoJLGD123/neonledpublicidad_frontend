"use client";

import React from "react";
import './Footer.css';

function Footer({ url_image1, url_image2, url_image3, descripcion }) {

    return (
        <div className="lg:mx-48 bg-gradient-to-br bg-gray-900 rounded-lg shadow-[0px_8px_20px_rgba(0,0,0,0.3)] overflow-hidden mt-12">
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 via-blue-400 to-blue-500"></div>

                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400/20 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/20 rounded-tr-lg"></div>

                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-2xl md:text-3xl text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 relative">
                            CONCLUSIONES
                            <span className="block h-0.5 w-16 bg-gradient-to-r from-blue-400/30 via-blue-400 to-blue-400/30 mx-auto mt-2"></span>
                        </h3>

                        <p className="text-gray-100 text-base leading-relaxed max-w-3xl mx-auto mb-6 text-justify">
                            {descripcion}
                        </p>
                    </div>

                    {
                        <div className="flex flex-wrap justify-center gap-3 ">
                            {[url_image1, url_image2, url_image3].map((image, index) => {

                                return (
                                    <div key={index} className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-br bg-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <img
                                            src={image}
                                            alt={`Imagen ${index + 1}`}
                                            className="w-48 h-36 object-cover rounded-lg border border-white/10 group-hover:border-sky-400/50 transition-all duration-300 shadow-md relative z-10"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg z-20 pointer-events-none"></div>
                                    </div>
                                )
                            })}
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export { Footer };

