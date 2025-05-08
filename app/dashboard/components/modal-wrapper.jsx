"use client"

import { createPortal } from "react-dom"
import { useEffect, useState } from "react"

export default function ModalWrapper({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {children}
    </div>,
    document.body,
  )
}
