'use client';

import React from 'react'
import { ArrowLeft } from 'lucide-react';
import { FormLogin } from './FormLogin';

const ReturnButton = () => (
    <a href="/" className="absolute top-4 right-4">
        <button className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg text-gray-700">
            <ArrowLeft className="w-4 h-4" />
            Regresar
        </button>
    </a>
)

export const Login = () => {

    return (
        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center p-6 relative">
            <ReturnButton />
            <FormLogin />
        </div>
    )
}
