"use client"

import { motion } from "framer-motion"
import {
  FileCode,
  FileCode2,
  Code,
  Activity,
  SquareActivity,
  Wind,
  Terminal,
  Server,
  Package,
  Database,
  Zap,
  Cloud,
} from "lucide-react"

const skillItems = [
  { label: "HTML", icon: FileCode2 },
  { label: "CSS", icon: FileCode },
  { label: "Tailwind CSS", icon: Wind },
  { label: "JavaScript", icon: Code },
  { label: "React.js", icon: SquareActivity },
  { label: "React Native", icon: Activity },
  { label: "Next.js", icon: Terminal },
  { label: "Node.js", icon: Server },
  { label: "Express.js", icon: Package },
  { label: "MongoDB", icon: Database },
  { label: "Firebase", icon: Zap },
  { label: "Axios", icon: Cloud },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60 mb-4">Skills:</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Technical stack I work with</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {skillItems.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="group rounded-2xl border border-white/10 bg-white/5 px-5 py-4 flex items-center gap-4 text-white hover:border-white/20 hover:bg-white/10 transition"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-semibold text-sm sm:text-base tracking-wide">{skill.label}</span>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mt-12 leading-relaxed"
        >
          I deliver polished front-end experiences backed by strong server-side logic, modern APIs, and production-ready tooling.
        </motion.p>
      </div>
    </section>
  )
}
