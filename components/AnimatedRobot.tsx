"use client"

import { useEffect, useState } from "react"

export default function AnimatedRobot() {
  const [position, setPosition] = useState({ x: -100, y: -100 }) // Off-screen initially
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Add a style tag to hide the default cursor on body
    const style = document.createElement('style')
    style.innerHTML = `
      body, a, button, [role="button"] {
        cursor: none !important;
      }
    `
    document.head.appendChild(style)
    
    const handleMouseMove = (e: MouseEvent) => {
      // Get the cursor position
      const x = e.clientX - 30 // 30 = half the width
      const y = e.clientY - 30 // 30 = half the height
      
      setPosition({ x, y })
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.head.removeChild(style)
    }
  }, [])
  
  if (!mounted) return null

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: position.x + 'px',
        top: position.y + 'px',
        width: '60px',
        height: '60px',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary opacity-90"
        style={{
          animation: "robotShake 1s infinite alternate-reverse",
          filter: "drop-shadow(0 0 3px rgba(0,0,0,0.5))",
          transformOrigin: "center",
        }}
      >
        {/* Robot Head */}
        <rect x="6" y="4" width="12" height="10" rx="2" />
        {/* Robot Eyes */}
        <circle cx="9" cy="9" r="1" fill="currentColor" />
        <circle cx="15" cy="9" r="1" fill="currentColor" />
        {/* Robot Antenna */}
        <line x1="12" y1="2" x2="12" y2="4" />
        <circle cx="12" cy="2" r="1" fill="currentColor" />
        {/* Robot Body */}
        <rect x="8" y="14" width="8" height="6" rx="1" />
        {/* Robot Arms */}
        <line x1="5" y1="18" x2="8" y2="18" />
        <line x1="16" y1="18" x2="19" y2="18" />
        {/* Robot Legs */}
        <line x1="10" y1="20" x2="10" y2="22" />
        <line x1="14" y1="20" x2="14" y2="22" />
      </svg>
      
      <style jsx global>{`
        @keyframes robotShake {
          0% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(5deg) scale(1.05);
          }
          75% {
            transform: rotate(-5deg) scale(0.95);
          }
          100% {
            transform: rotate(0deg) scale(1);
          }
        }
      `}</style>
    </div>
  )
}