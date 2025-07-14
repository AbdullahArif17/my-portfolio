"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that provide excellent user experiences.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and search engine visibility.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams using modern development workflows and tools.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Passionate Developer & Problem Solver</h3>
            <p className="text-gray-300 leading-relaxed">
              With over 3 years of experience in web development, I specialize in creating modern, responsive
              applications using cutting-edge technologies. My journey started with curiosity about how websites work,
              and it has evolved into a passion for building digital solutions that make a difference.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in continuous learning and staying updated with the latest trends in technology. When I&apos;m not
              coding, you can find me exploring new frameworks, contributing to open-source projects, or sharing
              knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-colors">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
