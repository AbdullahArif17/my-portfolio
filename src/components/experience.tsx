"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2022 - Present",
      description:
        "Led the development of multiple client projects using React and Next.js. Mentored junior developers and implemented best practices for code quality and performance.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      location: "New York, NY",
      period: "2021 - 2022",
      description:
        "Developed and maintained web applications for various clients. Collaborated with designers and project managers to deliver high-quality solutions on time.",
      technologies: ["Vue.js", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      location: "San Francisco, CA",
      period: "2020 - 2021",
      description:
        "Built responsive websites and web applications. Gained experience in modern web development practices and agile methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card className="bg-slate-800/50 border-slate-600">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-white text-xl">{experience.title}</CardTitle>
                      <CardDescription className="text-blue-300 font-medium text-lg">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center text-gray-300 text-sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        {experience.period}
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <MapPin className="mr-2 h-4 w-4" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-600/20 text-blue-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
