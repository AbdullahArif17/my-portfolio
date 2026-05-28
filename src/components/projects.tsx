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
    <section id="projects" className="py-16 md:py-24 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60 mb-4">
            Projects
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Work
          </h3>
          <p className="text-gray-400 mx-auto max-w-xl text-sm sm:text-base leading-relaxed">
            A curated showcase of recent projects using modern UI, production-ready architecture, and practical tooling.
          </p>
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-6 inline-flex items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-300"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {loading ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-slate-900/80 p-12">
            <Loader2 className="h-10 w-10 animate-spin text-white/70 mb-4" />
            <p className="text-gray-400">Loading projects...</p>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 shadow-[0_20px_80px_rgba(0,0,0,0.22)]"
              >
                <div className="relative overflow-hidden bg-slate-800">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={
                        project.image?.asset?._ref
                          ? urlFor(project.image)
                              .width(900)
                              .height(506)
                              .quality(90)
                              .auto("format")
                              .url()!
                          : "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='900' height='506' fill='%23111' ><rect width='900' height='506' fill='%23111' /><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23888' font-family='Arial' font-size='24'>Project Preview</text></svg>"
                      }
                      alt={project.title || "Project preview"}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 z-10 flex flex-wrap justify-end gap-3 p-3 sm:p-4 bg-gradient-to-t from-slate-950/95 to-transparent">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-white transition hover:bg-slate-800"
                        aria-label="Open live project"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-white transition hover:bg-slate-800"
                        aria-label="Open project repo"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-5 p-5 sm:p-6 bg-slate-950">
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-white">{project.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-400">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        View Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <a href="https://github.com/AbdullahArif17" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-white hover:bg-white/10 hover:text-white transition"
              >
                View More on GitHub <Github className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
