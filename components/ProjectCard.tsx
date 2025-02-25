"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  link: string
  imageSrc?: string
  imageAlt?: string
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  link, 
  imageSrc = "/project-placeholder.png", 
  imageAlt = "Project thumbnail" 
}: ProjectCardProps) {
  return (
    <motion.div
      className="border rounded-lg overflow-hidden shadow-md bg-card text-card-foreground"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 w-full">
        {imageSrc && (
          <div className="w-full h-full bg-black/10 flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-semibold mb-2 text-primary">{title}</h2>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="mb-4">
          <h3 className="font-semibold text-sm uppercase tracking-wide">Technologies</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <Link 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          View Project
        </Link>
      </div>
    </motion.div>
  )
}