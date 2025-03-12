"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from 'next/navigation';
import "./productoStyles.css";

export default function Banner() {
  const circleRef = useRef(null);
  const isInView = useInView(circleRef, { triggerOnce: true, threshold: 0.5 });
  const router = useRouter();

  return (
    <div className="bg-black w-full h-[600px] flex items-center justify-center">
      {/* Contenedor de la imagen del aro */}
      <motion.div
        ref={circleRef}
        className="circle-container z-0"
        initial={{ rotate: 0 }}
        animate={isInView ? { rotate: -360 } : {}}
        transition={{ duration: 20, ease: "linear" }}
      />

      {/* Texto principal */}
      <motion.div
        className="text-center space-y-1 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      >
        <p className="text-lg text-color">¿Quieres</p>
        <h1 className="text-6xl neon-text">ILUMINAR</h1>
        <p className="text-6xl neon-text">TU VIDA?</p>

        <br />

        <button onClick={()=> router.push("/contacto")}>
          Pide Ya!
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
      </motion.div>
    </div>
  );
}
