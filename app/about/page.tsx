"use client"

import { motion } from "framer-motion"
import { AnimatedRobot } from "@/components/ClientOnlyComponents"

export default function About() {
  const skills = {
    "Programming Languages": ["Java", "Python", "C", "CSS", "HTML", "JavaScript", "Bash", "Shell"],
    "Web Technologies": ["HTML", "CSS", "JavaScript", "Next.js", "Node.js"],
    "Database Systems": ["MySQL", "PostgreSQL"],
    "Data Science & Machine Learning": ["NumPy", "Pandas", "Matplotlib", "TensorFlow", "PyTorch", "YOLOv8", "Computer Vision"],
    "Embedded Systems & IoT": ["ESP32", "Raspberry Pi", "Arduino", "PCB Design", "Sensor Integration"],
    "Cloud Technologies": ["Proxmox", "Kubernetes", "Docker", "VPN Management"],
    "Tools": ["Git", "Slack", "Nmap", "VSCode", "Microsoft Office"]
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Robot follows mouse everywhere */}
      <AnimatedRobot />
      
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">
          About Me
        </h1>

        {/* Education Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Education</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold">San Diego State University</h3>
            <p className="text-muted-foreground">Bachelor of Science in Computer Engineering</p>
            <p className="text-muted-foreground">Expected December 2025 • California, US</p>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-primary">Experience</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Instructor Teaching Assistant - CompE 561</h3>
                  <p className="text-muted-foreground">San Diego State University</p>
                </div>
                <div className="text-muted-foreground text-sm md:text-right">
                  <p>Feb 2025 – Present</p>
                  <p>San Diego, CA</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Guided over 70 students in Full Stack Web Development and Agile methodologies, improving project quality.</li>
                <li>Researched and integrated modern industry best practices to enhance instructional materials for core curriculum modules.</li>
                <li>Monitored and documented academic progress for a cohort of 77 students, providing targeted feedback to ensure alignment with course objectives.</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Senior Design Team Lead - Team P.A.W.S</h3>
                  <p className="text-muted-foreground">San Diego State University</p>
                </div>
                <div className="text-muted-foreground text-sm md:text-right">
                  <p>2024 – 2025</p>
                  <p>San Diego, CA</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Led a 5-member interdisciplinary team developing a Smart Pet Bowl system for automated pet health monitoring.</li>
                <li>Integrated ESP32 microcontroller, custom YOLOv8 machine learning model, and IoT sensors for real-time pet recognition and water consumption tracking.</li>
                <li>Designed custom PCB and implemented wireless communication protocols, delivering a sub-$100 cost-effective solution.</li>
                <li>Collaborated with electrical engineering team members to develop embedded systems and sensor integration.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-primary">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                className="bg-card border border-border rounded-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <h3 className="font-semibold mb-3 text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Additional Information Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Additional Information</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Languages</h3>
                <p className="text-muted-foreground">Vietnamese (Native), English (Fluent)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Interests</h3>
                <p className="text-muted-foreground">Homelab, Networking, Software Development, Hardware Development</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Contact</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="font-medium mr-2">Email:</span>
                  <a href="mailto:tribui1912@gmail.com" className="text-primary hover:underline">
                    tribui1912@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">Phone:</span>
                  <a href="tel:+16199375404" className="text-primary hover:underline">
                    +1-619-937-5404
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">Location:</span>
                  <span className="text-muted-foreground">San Diego, CA 92124</span>
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="font-medium mr-2">Website:</span>
                  <a href="https://tribui.me/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    tribui.me
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/tribui99/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    linkedin.com/in/tribui99
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">GitHub:</span>
                  <a href="https://github.com/tribui1912" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    github.com/tribui1912
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}
