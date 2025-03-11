"use client";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import "./productoStyles.css";

export default function NuestrosProductos() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  if (isInView && !hasAnimated) {
    setHasAnimated(true); 
  }

  return (
    <div ref={ref} className="flex flex-col items-center text-center md:flex-row md:text-left justify-center gap-4 md:gap-12 mt-[5%] overflow-hidden">

      {/* Título */}
      <motion.div
        className="text-2xl md:text-2xl font-bold text-white"
        initial={{ x: -200, opacity: 0 }}
        animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        NUESTROS PRODUCTOS
      </motion.div>


      {/* Línea vertical (solo en pantallas medianas y grandes) */}
      <motion.div
        className="hidden md:block border-r-4 h-12 border-[#44b0f8] rounded-full"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={hasAnimated ? { scaleY: 1, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Línea horizontal (solo en móviles) */}
      <motion.div
        className="block md:hidden h-1 w-16 bg-[#44b0f8] rounded-full"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={hasAnimated ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Texto */}
      <motion.div
        className="text-xl text-white max-w-3xl text-center md:text-left leading-relaxed"
        initial={{ x: 200, opacity: 0 }}
        animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        Ofrecemos una gran variedad de productos en NEON LED para tu negocio tanto exterior como interior.
      </motion.div>

    </div>
  );
}