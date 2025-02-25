"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import type React from "react"

interface GlowingButtonProps {
  children: React.ReactNode
  href: string
}

export default function GlowingButton({ children, href }: GlowingButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative inline-block"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href} passHref>
        <motion.div
          className={`
            relative inline-block px-6 py-3 rounded-full text-lg font-semibold
            bg-gradient-to-r from-blue-500 to-purple-600 text-white
            transition-all duration-300 ease-in-out
            hover:from-blue-600 hover:to-purple-700
          `}
        >
          {children}
          {/* Constant glow effect */}
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-75"
            animate={{
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 -z-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.8 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
}

