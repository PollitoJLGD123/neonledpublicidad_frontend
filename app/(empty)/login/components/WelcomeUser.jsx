'use client';

import React from 'react'

export const WelcomeUser = () => {
    return (
        <div className="lg:w-1/2 w-full bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-700 flex flex-col items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/login/pattern.svg')] opacity-10">ss</div>
            <div className="relative z-10 text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">¡Bienvenido!</h1>
                <p className="text-white/90 text-lg mb-8 max-w-md">
                    Accede a tu cuenta para gestionar tus recursos y servicios
                </p>
                <img
                    src="/login/login3.png"
                    alt="Inicio de sesión"
                    className="w-72 lg:w-96 h-auto mx-auto animate-float hue-rotate-[330deg]"
                />
            </div>
            <style jsx>
                {`
                    @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                    }
                    .animate-float {
                    animation: float 6s ease-in-out infinite;
                    }
                `}
            </style>
        </div>
    )
}
