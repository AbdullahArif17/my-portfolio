"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillsData = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Backend & Database",
      description: "Creating scalable APIs and robust database architectures.",
      skills: ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL", "REST APIs"],
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
    },
    {
      title: "Tools, DevOps & Others",
      description: "Managing deployments, version control, and design tools.",
      skills: ["Git", "GitHub", "Vercel", "Figma", "VS Code", "Linux", "Sanity"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden bg-slate-900/40 border-y border-white/5">
      {/* Background Decorative glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest text-indigo-400 uppercase mb-3 text-center">
            Expertise
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center text-balance mx-auto">
            Skills & <span className="gradient-text">Technologies</span>
          </h3>
          <div className="section-divider" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-center">
            A comprehensive overview of my technical stack and the tools I rely on to bring digital visions to reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div 
                className={`glass-card p-6 sm:p-8 rounded-2xl h-full border ${category.borderColor} bg-gradient-to-br ${category.color} hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 relative overflow-hidden group`}
              >
                {/* Background Pattern */}
                <div className="absolute right-0 bottom-0 opacity-10 blur-xl w-32 h-32 bg-white rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {category.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + (skillIndex * 0.05) }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-white/10 text-gray-200 hover:bg-white/20 hover:text-white border border-white/5 transition-colors px-3 py-1.5 text-sm font-medium rounded-lg"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience journey (replacing the old experience section briefly) */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-white/5 relative"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-white/5 px-6 py-2 rounded-full text-xs font-bold tracking-widest text-indigo-400 uppercase">
            Learning Journey
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
             {[
               { year: "2023", title: "Started Coding", desc: "HTML, CSS & basic JS" },
               { year: "2023 Q3", title: "Governor Sindh IT", desc: "Enrolled in intensive program" },
               { year: "2024", title: "Frontend Master", desc: "React, Next.js, & Tailwind" },
               { year: "Present", title: "Full Stack Dev", desc: "Python, DBs & Architecture" },
             ].map((milestone, i) => (
               <div key={i} className="glass p-6 rounded-2xl relative group">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
                    {milestone.year}
                  </div>
                  <h5 className="text-lg font-semibold text-white mb-1">{milestone.title}</h5>
                  <p className="text-gray-400 text-sm">{milestone.desc}</p>
               </div>
             ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
