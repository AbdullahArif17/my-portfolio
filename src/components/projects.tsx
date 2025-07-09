"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Loader2 } from "lucide-react"
import { client, urlFor, featuredProjectsQuery } from "@/sanity/lib/sanity"
import type { SanityProject } from "@/types/sanity"

export default function Projects() {
  const [projects, setProjects] = useState<SanityProject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(featuredProjectsQuery)
        setProjects(data)
      } catch (err) {
        setError("Failed to load projects")
        console.error("Error fetching projects:", err)
        // Fallback to static data if Sanity fails
        setProjects([
          {
            _id: "1",
            title: "E-Commerce Platform",
            description:
              "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
            image: { asset: { _ref: "", _type: "reference" }, _type: "image" },
            technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
            liveUrl: "#",
            githubUrl: "#",
            featured: true,
            order: 1,
          },
          {
            _id: "2",
            title: "Task Management App",
            description:
              "A collaborative task management application with real-time updates and team collaboration features.",
            image: { asset: { _ref: "", _type: "reference" }, _type: "image" },
            technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
            liveUrl: "#",
            githubUrl: "#",
            featured: true,
            order: 2,
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto text-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-400 mx-auto" />
          <p className="text-gray-300 mt-4">Loading projects...</p>
        </div>
      </section>
    )
  }

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
          {error && (
            <p className="text-yellow-400 mt-4 text-sm">
              Note: Projects are currently showing fallback data. Connect Sanity CMS for dynamic content.
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-slate-700/50 border-slate-600 overflow-hidden h-full">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  {project.image?.asset?._ref ? (
                    <img
                      src={urlFor(project.image).width(400).height(200).url() || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white/70 text-lg font-medium">{project.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-600/20 text-blue-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-slate-500 text-white hover:bg-slate-600 bg-transparent"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
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
