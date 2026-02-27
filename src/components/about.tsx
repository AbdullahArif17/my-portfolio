"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap, Users, Terminal, Monitor, Server } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Built", value: "20+" },
    { label: "Technologies", value: "15+" },
    { label: "Client Satisfaction", value: "100%" },
  ];

  const features = [
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Writing maintainable, scalable, and efficient code following clean code principles.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Palette,
      title: "Modern UI/UX",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimizing applications for maximum speed, accessibility, and SEO visibility.",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: Users,
      title: "Collaborative Teamwork",
      description: "Working effectively in teams using modern agile development workflows and tools.",
      color: "from-orange-400 to-red-500"
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest text-indigo-400 uppercase mb-3">
            Discover
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h3>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                A passionate developer turning complex problems into elegant solutions.
              </h4>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I&apos;m a motivated second-year Computer Science student enrolled in the Governor Sindh IT Program. 
                  My journey in tech began with a deep curiosity about how things work on the web, which quickly 
                  evolved into a passion for building robust, scalable applications.
                </p>
                <p>
                  Having completed intensive training in modern web technologies including <span className="text-gray-200 font-medium">TypeScript, Next.js, and Python</span>, 
                  I currently focus on creating seamless full-stack experiences. I bridge the gap between aesthetic 
                  design and functional programming.
                </p>
                <p>
                  Beyond writing code, I&apos;m continuously expanding my knowledge horizons into Artificial Intelligence 
                  and Cloud Computing to stay at the forefront of technological innovation.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Action List */}
            <div className="space-y-3">
              {[
                { icon: Terminal, text: "Frontend Development (React/Next.js)" },
                { icon: Server, text: "Backend Architecture & APIs" },
                { icon: Monitor, text: "Responsive UI/UX Engineering" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center gap-3 text-gray-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4 lg:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 group relative overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${feature.color} bg-opacity-10 text-white shadow-lg`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
