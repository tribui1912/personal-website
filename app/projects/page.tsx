"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/ProjectCard"
import { AnimatedRobot } from "@/components/ClientOnlyComponents"

const projects = [
  {
    title: "Smart Pet Bowl - Team P.A.W.S",
    description: "Senior Design project that enhances pet health monitoring by automating water intake tracking. The system uses an ESP32, Grove AI Vision Module with custom YOLOv8 model, ultrasonic sensors, and Raspberry Pi Zero W to detect, identify, and quantify pet hydration. Features real-time pet recognition, water consumption tracking, and web dashboard for monitoring.",
    technologies: ["ESP32", "YOLOv8", "Machine Learning", "Raspberry Pi", "IoT", "Computer Vision", "PCB Design"],
    link: "https://teampaws.app",
    imageSrc: "/projects/smart-pet-bowl.png",
    imageAlt: "Smart Pet Bowl system with AI-powered pet recognition and water monitoring"
  },
  {
    title: "Proxmox Virtual Environment",
    description: "Deployed and manage a virtualized environment hosting over 10 different services and applications. Configured secure private VPN tunnels for remote network access using OpenVPN and WireGuard. Established a network-attached storage (NAS) server with ZFS for data redundancy, safeguarding over 2TB of files.",
    technologies: ["Proxmox", "TrueNAS", "OpenVPN", "WireGuard", "Raddix", "Pi-Hole", "Unbound"],
    link: "https://github.com/tribui1912/homelab",
    imageSrc: "/projects/homelab.png",
    imageAlt: "Homelab server setup with multiple services with high availability"
  },
  {
    title: "Kubernetes Cluster System",
    description: "Implemented a high-availability Kubernetes cluster using NixOS and K3s across a 3-node Mini PC setup. Ensured robust service availability and network load balancing for containerized applications with MetalLB. Managed the deployment and automated scaling of 12 containerized applications within the cluster.",
    technologies: ["K3S", "NixOS", "MetalLB", "Pi-Hole", "Kubernetes"],
    link: "https://github.com/tribui1912/k8s-home-cluster",
    imageSrc: "/projects/kubernetes.jpg",
    imageAlt: "Kubernetes cluster visualization with 3x Dell 7010"
  },
  {
    title: "Stock Management Mobile Application",
    description: "Developed a cross-platform stock management app for iOS and Android, currently in beta with over 50 users. Integrated near-field communication (NFC) technology to streamline item tracking, reducing inventory logging time by 60%. Designed an intuitive and accessible user interface, focusing on ease of use for non-technical end-users.",
    technologies: ["EAS", "React Native", "XCode", "Android Studio", "NFC"],
    link: "https://github.com/tribui1912/stockstash-storage-manager",
    imageSrc: "/projects/stock-app.png",
    imageAlt: "Stock management mobile application with NFC integration"
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