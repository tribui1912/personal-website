"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      className="bg-background text-foreground w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Tri Bui
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}

