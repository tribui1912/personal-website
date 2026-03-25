"use client"

import { motion } from "framer-motion"
import { AnimatedRobot } from "@/components/ClientOnlyComponents"

export default function About() {
  const skills = {
    "Languages": ["Java", "Kotlin", "Swift", "JavaScript", "Python", "SQL"],
    "Frameworks": ["Spring Boot", "Android SDK", "iOS SDK", "React", "Node.js"],
    "Cloud & Infrastructure": ["Cloud Architecture", "REST APIs", "HIPAA-compliant Systems", "JWT Authentication", "PostgreSQL", "TimescaleDB", "Docker", "CI/CD"],
    "Mobile": ["Native Android (Kotlin)", "Native iOS (Swift)", "Cross-platform Concepts"],
    "Regulatory & Compliance": ["FDA 21 CFR Part 11", "HIPAA", "IEC 62304", "FDA Class II 510(k)", "Design History File (DHF)"],
    "Tools": ["Git", "Docker", "Gradle", "Postman", "Confluence", "Jira"]
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

        {/* Bio Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <div className="bg-card border border-border rounded-lg p-6 space-y-4 text-muted-foreground">
            <p>
              I&apos;m a Founding Software Engineer at Q-Life Corp, a San Diego-based biotech startup developing an FDA Class II continuous physiological monitoring device. As the sole software engineer on the team, I own the entire software stack — from cloud infrastructure and the native Android application to the clinical dashboard, company website, and investor-facing materials.
            </p>
            <p>
              My work sits at the intersection of healthcare technology and regulatory compliance. I&apos;m personally named in FDA regulatory documentation, a signed participant in FDA training, and actively prepare technical documents for the company&apos;s FDA advisor — a scope that goes well beyond typical software engineering.
            </p>
            <p>
              Before Q-Life, I developed Android applications for physiological sensor data collection at SDSU Research Foundation, where the same team of researchers later co-founded the company I now help build. I also served as an Instructor Teaching Assistant at San Diego State University, supporting courses in Full Stack Web Development and Agile Software Development.
            </p>
            <p>
              Outside of healthcare tech, I&apos;m a serial entrepreneur with ventures across the US and Southeast Asia — including co-owning a cannabis dispensary in Thailand, a former marketing and web development company in Vietnam, and a previous mobile accessories wholesale business in Vietnam.
            </p>
            <p>
              I hold a B.S. in Computer Engineering from San Diego State University. Outside of work, I run a homelab, shoot photography, and spend time outdoors.
            </p>
          </div>
        </motion.section>

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
            <p className="text-muted-foreground">San Diego, California</p>
            <p className="text-sm text-muted-foreground mt-2">
              Relevant coursework: Computer Architecture, Embedded Systems, Network Architecture, Software Engineering, Machine Learning/AI
            </p>
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
                  <h3 className="text-xl font-semibold">Founding Software Engineer</h3>
                  <p className="text-muted-foreground">Q-Life Corp</p>
                </div>
                <div className="text-muted-foreground text-sm md:text-right">
                  <p>Jan 2026 — Present</p>
                  <p>San Diego, CA</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Sole software engineer responsible for the entire software stack of an FDA Class II medical device platform</li>
                <li>Architecting and building cloud infrastructure (Java, Spring Boot, PostgreSQL) compliant with HIPAA and FDA 21 CFR Part 11</li>
                <li>Developing native Android mobile application for device management and patient data collection</li>
                <li>Building clinical web dashboard for healthcare provider review of physiological sensor data</li>
                <li>Preparing FDA regulatory documents for the company&apos;s FDA advisor; named participant in FDA training</li>
                <li>Contributing directly to international clinical trial in partnership with the Vietnam Institute of Cardiology</li>
                <li>Managing software engineering intern; leading team growth as company scales toward FDA clearance</li>
                <li>Producing investor pitch decks and video content for fundraising</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Java 17", "Spring Boot", "PostgreSQL", "Kotlin", "Android SDK", "REST APIs", "JWT", "HIPAA", "FDA 21 CFR Part 11", "IEC 62304"].map((tech) => (
                  <span key={tech} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Mobile Application Developer / Research Assistant II</h3>
                  <p className="text-muted-foreground">SDSU Research Foundation</p>
                </div>
                <div className="text-muted-foreground text-sm md:text-right">
                  <p>Oct 2025 — Present · Part-time</p>
                  <p>San Diego, CA</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Developing an Android application to collect physiological data from over 10 body sensors, supporting vital biomedical research initiatives</li>
                <li>Designing custom data parsing pipelines for efficient processing and integration with backend research systems</li>
                <li>Collaborating with researchers to enhance data collection methodologies and improve research outcomes</li>
                <li>Direct predecessor role to Q-Life — same research team, same ECG biosensor technology now in FDA regulatory pathway</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Android", "Kotlin", "Sensor Integration", "Data Pipelines"].map((tech) => (
                  <span key={tech} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Instructor Teaching Assistant</h3>
                  <p className="text-muted-foreground">San Diego State University</p>
                </div>
                <div className="text-muted-foreground text-sm md:text-right">
                  <p>Feb 2025 — Dec 2025 · Contract</p>
                  <p>San Diego, CA</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Supported faculty in Full Stack Web Development and Agile Software Development courses</li>
                <li>Assisted students with exam preparation, class projects, and coursework</li>
                <li>Graded assignments and tracked student progress</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Web Developer (Freelance)</h3>
                  <p className="text-muted-foreground">CulturedKongz</p>
                </div>
                <div className="text-muted-foreground text-sm md:text-right">
                  <p>Mar 2022 — Jun 2023</p>
                  <p>Remote</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Designed UX/UI and developed front-end in collaboration with the game team for integration</li>
                <li>Ensured high availability and uptime across all web properties</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">IT Consultant</h3>
                  <p className="text-muted-foreground">MEDLAWFIRM</p>
                </div>
                <div className="text-muted-foreground text-sm md:text-right">
                  <p>Jun 2018 — Dec 2019 · Contract</p>
                  <p>Ho Chi Minh City, Vietnam</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Analyzed and predicted business technology needs, delivering cost-effective hardware and software solutions</li>
                <li>Configured secure VPN tunnels for local data access, ensuring data privacy for clients</li>
                <li>Achieved over 30% savings on technology upgrades by aligning recommendations with business growth projections</li>
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
                <p className="text-muted-foreground">Vietnamese (Native), English (Professional)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Interests</h3>
                <p className="text-muted-foreground">Homelab, Photography, Camping & Outdoors</p>
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
                  <a href="mailto:contact@tribui.me" className="text-primary hover:underline">
                    contact@tribui.me
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">Location:</span>
                  <span className="text-muted-foreground">San Diego, CA</span>
                </p>
              </div>
              <div className="space-y-2">
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
