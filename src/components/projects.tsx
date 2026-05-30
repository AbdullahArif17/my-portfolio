"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Grid, List } from "lucide-react";
import { client, urlFor, featuredProjectsQuery } from "@/sanity/lib/sanity";
import type { SanityProject } from "@/types/sanity";

// Realistic fallback projects reflecting Ahmed Shahid / Abdullah Arif high-tier projects
const fallbackProjects: SanityProject[] = [
  {
    _id: "1",
    title: "Food Stall Management System",
    description: "A robust full-stack management system built for local food vendors, featuring secure checkouts, live vendor charts, and inventory tracking dashboards.",
    image: { asset: { _ref: "", _type: "reference" }, _type: "image" },
    technologies: ["React", "Express JS", "MongoDB", "Cloudinary", "Shad CN", "Chart JS"],
    liveUrl: "https://github.com/AbdullahArif17",
    githubUrl: "https://github.com/AbdullahArif17",
    featured: true,
    order: 1,
  },
  {
    _id: "2",
    title: "Weather App — Real-Time",
    description: "A real-time weather details service delivering live forecasts based on current locations, featuring wind status, sunrise tracking, and dynamic icons.",
    image: { asset: { _ref: "", _type: "reference" }, _type: "image" },
    technologies: ["React", "Axios", "Tailwind CSS", "Ant Design", "Open-Weather API"],
    liveUrl: "https://github.com/AbdullahArif17",
    githubUrl: "https://github.com/AbdullahArif17",
    featured: true,
    order: 2,
  },
  {
    _id: "3",
    title: "Saylani Welfare Mobile App",
    description: "A cutting edge mobile app streamlining food distributions, tracking charity funds, and providing instant updates using clean react native code.",
    image: { asset: { _ref: "", _type: "reference" }, _type: "image" },
    technologies: ["React Native", "Expo", "Expo-Camera", "Tailwind CSS", "Zod", "Axios"],
    liveUrl: "https://github.com/AbdullahArif17",
    githubUrl: "https://github.com/AbdullahArif17",
    featured: true,
    order: 3,
  },
  {
    _id: "4",
    title: "Nike Store Showcase",
    description: "A premium responsive landing page featuring smooth scrolling, interactive cards, bold color patterns, and rich visual transitions.",
    image: { asset: { _ref: "", _type: "reference" }, _type: "image" },
    technologies: ["React", "Tailwind CSS", "AOS", "Framer Motion", "Typed JS"],
    liveUrl: "https://github.com/AbdullahArif17",
    githubUrl: "https://github.com/AbdullahArif17",
    featured: true,
    order: 4,
  },
  {
    _id: "5",
    title: "Sushi Master Restaurant",
    description: "A minimalist restaurant concept page designed with smooth keyframe animations, grid arrangements, and pixel-perfect responsiveness.",
    image: { asset: { _ref: "", _type: "reference" }, _type: "image" },
    technologies: ["HTML5", "CSS3", "JavaScript", "Animate.css"],
    liveUrl: "https://github.com/AbdullahArif17",
    githubUrl: "https://github.com/AbdullahArif17",
    featured: true,
    order: 5,
  },
  {
    _id: "6",
    title: "Taskify — Full-Stack To-Do",
    description: "A modern workspace management dashboard that empowers teams to organize tasks, assign roles, and track project deadlines in real time.",
    image: { asset: { _ref: "", _type: "reference" }, _type: "image" },
    technologies: ["Next JS", "Typescript", "Express JS", "MongoDB", "Shad CN", "Tailwind CSS"],
    liveUrl: "https://github.com/AbdullahArif17",
    githubUrl: "https://github.com/AbdullahArif17",
    featured: true,
    order: 6,
  }
];

export default function Projects() {
  const [projects, setProjects] = useState<SanityProject[]>([]);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [showGrid, setShowGrid] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(featuredProjectsQuery);
        if (data && data.length > 0) {
          setProjects(data);
        } else {
          setProjects(fallbackProjects);
        }
      } catch (err) {
        console.error("Error fetching projects from Sanity:", err);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const activeProject = projects[activeProjectIndex] || fallbackProjects[0];

  return (
    <section id="projects" className="py-24 bg-black border-t border-zinc-900 overflow-hidden">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8b5cf6] mb-3">
              Projects:
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Curated Works
            </h2>
          </div>

          {/* Toggle buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowGrid(false)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                !showGrid
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-zinc-400 border-zinc-800 hover:text-white"
              }`}
            >
              <List className="h-4 w-4" /> Showcase List
            </button>
            <button
              onClick={() => setShowGrid(true)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                showGrid
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-zinc-400 border-zinc-800 hover:text-white"
              }`}
            >
              <Grid className="h-4 w-4" /> Full Grid 💡
            </button>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex h-96 flex-col items-center justify-center border border-zinc-800 bg-[#070708]">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-500 border-t-white" />
            <p className="text-zinc-500 mt-4 text-sm font-semibold tracking-wider uppercase">Loading projects...</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {!showGrid ? (
              /* --- SHOWCASE LIST VIEW (Ahmed Shahid Homepage Layout) --- */
              <motion.div
                key="list-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start min-h-[500px]"
              >
                {/* Left Column: Value Proposition & Active Preview */}
                <div className="space-y-10 lg:sticky lg:top-32">
                  <div className="space-y-4">
                    <p className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white leading-snug">
                      Deep expertise in full-stack development, interactive interfaces and scalable APIs.
                    </p>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">
                      Hover over any project on the right to reveal its details, core technologies, and repository links. I focus on clean code architectures and rich micro-interactions.
                    </p>
                  </div>

                  {/* Active Project Highlight Block */}
                  {activeProject && (
                    <motion.div
                      key={activeProject._id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="border border-zinc-800 bg-[#070708] p-6 space-y-4 shadow-[0_10px_30px_-15px_rgba(139,92,246,0.15)]"
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#8b5cf6]">
                        Active Showcase
                      </span>
                      <h3 className="text-lg font-black uppercase text-white tracking-wide">
                        {activeProject.title}
                      </h3>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        {activeProject.description}
                      </p>
                      
                      {/* Tech stack badge list */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {activeProject.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-[9px] font-black tracking-widest uppercase px-2.5 py-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-4 pt-4 border-t border-zinc-900">
                        {activeProject.liveUrl && activeProject.liveUrl !== "#" && (
                          <a
                            href={activeProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-white uppercase tracking-wider hover:text-[#8b5cf6] transition-colors flex items-center gap-1.5"
                          >
                            Live Demo <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        {activeProject.githubUrl && (
                          <a
                            href={activeProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-white uppercase tracking-wider hover:text-[#8b5cf6] transition-colors flex items-center gap-1.5"
                          >
                            Source <Github className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Right Column: Dynamic Project Selection List */}
                <div className="border-t border-zinc-800">
                  {projects.map((project, index) => {
                    const isActive = index === activeProjectIndex;
                    return (
                      <div
                        key={project._id}
                        onMouseEnter={() => setActiveProjectIndex(index)}
                        className="py-8 border-b border-zinc-800 cursor-pointer flex items-center justify-between group transition-all duration-300 hover:pl-4"
                      >
                        <div className="space-y-2">
                          <h3
                            className={`text-xl md:text-2xl font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-3 ${
                              isActive
                                ? "text-[#8b5cf6] font-black"
                                : "text-zinc-500 group-hover:text-white"
                            }`}
                          >
                            {isActive && (
                              <motion.span
                                layoutId="activeProjectDot"
                                className="inline-block w-2.5 h-2.5 rounded-full bg-[#8b5cf6] shadow-[0_0_10px_#8b5cf6]"
                                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                              />
                            )}
                            {project.title}
                          </h3>
                        </div>
                        <div className="flex items-center justify-center">
                          <ArrowUpRight
                            className={`h-6 w-6 transition-all duration-300 ${
                              isActive
                                ? "text-[#8b5cf6] rotate-45"
                                : "text-zinc-600 group-hover:text-white group-hover:rotate-45"
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              /* --- FULL 3-COLUMN DETAILED CARD GRID VIEW (Ahmed Shahid project.html Layout) --- */
              <motion.div
                key="grid-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex flex-col border border-zinc-800 bg-[#0a0a0c] rounded-xl overflow-hidden hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] hover:border-zinc-700 transition duration-300"
                  >
                    {/* Image Header with standard dynamic gradient bg */}
                    <div className="relative aspect-[16/10] bg-gradient-to-tr from-zinc-950 to-zinc-900 border-b border-zinc-800 overflow-hidden group">
                      {project.image?.asset?._ref ? (
                        <Image
                          src={urlFor(project.image).width(800).height(500).quality(90).url()!}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        /* Modern CSS vector mock background */
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 to-indigo-900/10 flex items-center justify-center p-6">
                          <div className="text-center space-y-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#8b5cf6] bg-zinc-900 px-3 py-1 border border-zinc-800">
                              Mockup Preview
                            </span>
                            <h4 className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest block pt-2">
                              {project.title}
                            </h4>
                          </div>
                        </div>
                      )}

                      {/* Hover floating overlay buttons */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/80 hover:bg-[#8b5cf6] text-white transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/80 hover:bg-[#8b5cf6] text-white transition-colors"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Card Description body */}
                    <div className="p-6 flex-grow flex flex-col space-y-4 justify-between">
                      <div className="space-y-2">
                        <h3 className="text-lg font-black uppercase tracking-wider text-white">
                          {project.title}
                        </h3>
                        <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="bg-zinc-900 text-zinc-300 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 border border-zinc-800"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="bg-zinc-900 text-zinc-400 text-[9px] font-bold uppercase tracking-widest px-2 py-1 border border-zinc-800">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
