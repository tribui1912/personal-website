"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import ParticleBackground from "@/components/ParticleBackground"
import PixelCat from "@/components/PixelCat"
import GlowingButton from "@/components/GlowingButton"
import AnimatedRobot from "@/components/AnimatedRobot"

export default function Home() {
  const title = "Welcome to My Portfolio"

  return (
    <div className="relative w-full h-full flex items-center justify-center px-4">
      {/* Animated background */}
      <ParticleBackground />
      
      {/* Pixel cat animation */}
      <PixelCat />
      
      {/* Robot follows mouse */}
      <AnimatedRobot />
      
      <div className="z-10 text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold relative bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hi, I&apos;m Tri Bui. I&apos;m a computer engineering student passionate about embedded systems, software development and homelab.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
        >
          <GlowingButton href="/projects">Explore My Projects</GlowingButton>
          
          <Link href="https://github.com/tribui1912" target="_blank" rel="noopener noreferrer">
            <motion.button 
              className="px-6 py-3 rounded-full bg-background border border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub Profile
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}