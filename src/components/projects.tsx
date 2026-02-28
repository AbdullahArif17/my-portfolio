"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Loader2 } from "lucide-react";
import { client, urlFor, featuredProjectsQuery } from "@/sanity/lib/sanity";
import type { SanityProject } from "@/types/sanity";

// Fallback static data if Sanity is not connected
const fallbackProjects: SanityProject[] = [
  {
    _id: "1",
    title: "E-Commerce Dashboard",
    description: "A full-stack admin dashboard for managing products, orders, and customers with real-time analytics.",
    image: { asset: { _ref: "", _type: "reference" }, _type: "image" },
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
    liveUrl: "#",
    githubUrl: "https://github.com/AbdullahArif17",
    featured: true,
    order: 1,
  },
  {
    _id: "2",
    title: "AI Content Generator",
    description: "An AI-powered application that generates blog posts, social media content, and marketing copy.",
    image: { asset: { _ref: "", _type: "reference" }, _type: "image" },
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/AbdullahArif17",
    featured: true,
    order: 2,
  },
  {
    _id: "3",
    title: "Real-time Chat App",
    description: "A modern messaging application featuring real-time communication, media sharing, and group chats.",
    image: { asset: { _ref: "", _type: "reference" }, _type: "image" },
    technologies: ["Next.js", "Socket.io", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/AbdullahArif17",
    featured: true,
    order: 3,
  },
  {
    _id: "4",
    title: "Portfolio Website",
    description: "A responsive portfolio to showcase projects and skills, featuring a modern glassmorphism design.",
    image: { asset: { _ref: "", _type: "reference" }, _type: "image" },
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/AbdullahArif17",
    featured: true,
    order: 4,
  }
];

export default function Projects() {
  const [projects, setProjects] = useState<SanityProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(featuredProjectsQuery);
        if (data && data.length > 0) {
          setProjects(data);
        } else {
          setProjects(fallbackProjects);
          setError("Using fallback static data (Sanity dataset might be empty)");
        }
      } catch (err) {
        setError("Failed to load from Sanity. Using fallback data.");
        console.error("Error fetching projects:", err);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden bg-slate-900/60">
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest text-indigo-400 uppercase mb-3">
            Portfolio
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h3>
          <div className="section-divider" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            A selection of my recent work showcasing structural architecture, 
            modern design patterns, and responsive interfaces.
          </p>
          
          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 inline-flex items-center px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium"
              >
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <Loader2 className="h-10 w-10 animate-spin text-indigo-500 mb-4" />
            <p className="text-gray-400 font-medium tracking-wide animate-pulse">Loading projects...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group h-full flex flex-col"
              >
                <div className="glass-card rounded-2xl overflow-hidden border border-white/10 relative h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
                  
                  {/* Image Container */}
                  <div className="relative aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] w-full overflow-hidden bg-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
                    <Image
                      src={
                        project.image?.asset?._ref
                          ? urlFor(project.image)
                              .width(800)
                              .height(450)
                              .quality(90)
                              .auto("format")
                              .url()!
                          : "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' fill='%231e293b'><rect width='800' height='450'/><text x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' fill='%2364748b' font-family='sans-serif' font-size='24'>Project Preview</text></svg>"
                      }
                      alt={project.title || "Project image"}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    
                    {/* Hover Overlay Actions */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/40 backdrop-blur-[2px]">
                      <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
                            aria-label="View Live Project"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
                            aria-label="View Source Code"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col z-20 bg-gradient-to-b from-slate-900/50 to-slate-900/80">
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 mb-6 flex-1 text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-6 mt-auto">
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {project.technologies.map(
                          (tech: string, techIndex: number) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md"
                            >
                              {tech}
                            </Badge>
                          )
                        )}
                      </div>
                      
                      {/* Mobile Actions (Visible only on small screens) */}
                      <div className="flex gap-3 md:hidden">
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <Button size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" variant="outline" className="flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10">
                            <Github className="mr-2 h-4 w-4" /> Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        {/* Full Portfolio Button */}
        {!loading && projects.length > 0 && (
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="mt-16 text-center"
          >
             <a href="https://github.com/AbdullahArif17" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="rounded-xl border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 hover:text-white transition-all duration-300 px-8">
                   View More on GitHub <Github className="ml-2 h-4 w-4" />
                </Button>
             </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
