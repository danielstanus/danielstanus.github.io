"use client"

import type React from "react"
import { useState } from "react"
import { experienceData } from "../data/experienceData"
import { motion } from "framer-motion"
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaCircle, FaDotCircle } from "react-icons/fa"

const Experience: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section id="experience" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/5">
            <FaBriefcase className="text-primary text-2xl" />
          </div> */}
          <h2 className="section-title pb-2 mb-6">Experiencia Profesional</h2>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={`
                border-l-2 pl-6 relative 
                ${activeId === experience.id ? "border-primary" : "border-muted dark:border-muted/50"} 
                transition-all duration-300 ease-in-out
              `}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveId(experience.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <motion.div className="absolute -left-[11px] top-1" whileHover={{ scale: 1.2 }}>
                {activeId === experience.id ? (
                  <FaDotCircle className="w-5 h-5 text-primary transition-all duration-300" />
                ) : (
                  <FaCircle className="w-5 h-5 text-muted dark:text-muted/50 transition-all duration-300" />
                )}
              </motion.div>

              <div
                className={`
                relative rounded-lg p-6 transition-all duration-300
                bg-gradient-to-br from-background-secondary to-background
                dark:from-background-secondary dark:to-background
                border border-border/50
                ${
                  activeId === experience.id
                    ? "shadow-lg shadow-primary/5 scale-[1.02]"
                    : "shadow-md shadow-muted/5 hover:shadow-lg hover:shadow-muted/10"
                }
              `}
              >
                <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                  {experience.title}
                </h3>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2 text-foreground font-medium">
                    <span className="text-primary font-semibold">{experience.company}</span>
                    <span className="text-muted-foreground/50">•</span>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <FaMapMarkerAlt className="text-primary/80" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-muted-foreground gap-1.5 text-sm bg-muted/10 dark:bg-muted/5 px-2 py-1 rounded-full">
                    <FaCalendarAlt className="text-primary/80" />
                    <span>{experience.period}</span>
                  </div>
                </div>

                <ul className="mt-4 space-y-3">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      className="text-foreground-secondary flex items-start group"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      <span className="text-primary/80 mr-2 flex items-center pt-1.5">
                        <FaCircle className="w-1.5 h-1.5" />
                      </span>
                      <span className="group-hover:text-foreground transition-colors duration-200">
                        {responsibility}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
