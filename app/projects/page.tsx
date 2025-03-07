"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/ProjectCard"
import AnimatedRobot from "@/components/AnimatedRobot"

const projects = [
  {
    title: "Home Lab Server Cluster",
    description: "A personal homelab setup for learning, testing, and hosting various services. Built with Dell T7820, Dell VXRail P470 and configured for high availability and resource efficiency with 10Gbe supports.",
    technologies: ["Proxmox", "Docker", "pfSense", "TrueNAS", "Home Assistant"],
    link: "https://github.com/tribui1912/homelab",
    imageSrc: "/projects/homelab.jpg",
    imageAlt: "Homelab server setup with mutliple services with high avaibility"
  },
  {
    title: "Kubernetes Home Cluster",
    description: "A production-grade Kubernetes cluster running on 3x Dell 7010. This project demonstrates infrastructure as code, GitOps workflows, and cloud-native application deployments.",
    technologies: ["Kubernetes", "K3s"],
    link: "https://github.com/tribui1912/k8s-home-cluster",
    imageSrc: "/projects/kubernetes.jpg",
    imageAlt: "Kubernetes cluster visualization with 3x Dell 7010"
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Robot follows mouse everywhere */}
      <AnimatedRobot />
      
      <motion.div
        className="max-w-3xl mx-auto mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-primary">
          My Projects
        </h1>
        <p className="text-xl text-muted-foreground">
          Check out some of my recent work and personal projects
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}