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
    <div ref={ref} className="flex items-center justify-center space-x-12 mt-[8%] overflow-hidden">
      {/* Título */}
      <motion.div
        className="text-4xl font-bold text-white"
        initial={{ x: -200, opacity: 0 }}
        animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        Nuestros Productos
      </motion.div>

      {/* Línea vertical */}
      <motion.div
        className="border-r-4 h-12 border-[#44b0f8] rounded-full"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={hasAnimated ? { scaleY: 1, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Texto */}
      <motion.div
        className="text-xl text-white max-w-3xl text-left"
        initial={{ x: 200, opacity: 0 }}
        animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        Ofrecemos una gran variedad de productos en NEON LED para tu negocio tanto exterior como interior.
      </motion.div>
    </div>
  );
}
