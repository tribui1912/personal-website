"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function PixelCat() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="4" height="4" fill="black" />
        <rect x="24" y="4" width="4" height="4" fill="black" />
        <rect x="8" y="8" width="4" height="4" fill="black" />
        <rect x="20" y="8" width="4" height="4" fill="black" />
        <rect x="12" y="12" width="8" height="4" fill="black" />
        <rect x="8" y="16" width="16" height="4" fill="black" />
        <rect x="4" y="20" width="24" height="4" fill="black" />
        <rect x="8" y="24" width="4" height="4" fill="black" />
        <rect x="20" y="24" width="4" height="4" fill="black" />
      </svg>
    </motion.div>
  )
}

