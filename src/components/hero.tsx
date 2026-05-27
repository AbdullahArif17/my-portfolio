"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Facebook, Mail, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const socials = [
    {
      icon: Github,
      href: "https://github.com/AbdullahArif17",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abdullah-arif-89ab862b4/",
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/rayan.arif.50",
      label: "Facebook",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-0 md:pb-0 section-shell">
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 70%)",
            top: "10%",
            left: "-10%",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
            bottom: "0%",
            right: "-15%",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 3 === 0 ? "rgba(255, 255, 255, 0.18)" : i % 3 === 1 ? "rgba(203, 213, 225, 0.14)" : "rgba(148, 163, 184, 0.12)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border border-emerald-400/20 shadow-[0_10px_30px_rgba(16,185,129,0.08)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm text-gray-300">Available for work</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-white">Hi, I&apos;m</span>
              <br />
              <span className="text-white">Abdullah Arif</span>
            </motion.h1>

            <motion.div
              className="text-lg sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 h-10 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Sparkles className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
              <span className="text-white">Full Stack Web Developer</span>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Passionate about crafting high-performance web applications with modern
              technologies. I turn complex ideas into elegant, user-friendly digital
              experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <a href="mailto:abdullaharif893@gmail.com">
                <Button
                  className="bg-white/[0.08] text-white px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-semibold w-full sm:w-auto border border-white/10 shadow-[0_18px_30px_rgba(255,255,255,0.08)]"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </a>
              <a href="/Resume.pdf" download="Abdullah_Arif_Resume.pdf">
                <Button
                  variant="outline"
                  className="bg-white/[0.04] border-white/10 text-white hover:bg-white/[0.08] hover:border-white/20 px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-semibold w-full sm:w-auto backdrop-blur-sm transition-all duration-300"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <span className="text-sm text-gray-500">Find me on</span>
              <div className="w-8 h-px bg-gray-600" />
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all duration-300"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow ring behind image */}
              <div className="absolute -inset-4 rounded-full bg-white/10 blur-2xl" />

              {/* Animated border ring */}
              <motion.div
                className="absolute -inset-2 rounded-full"
                style={{
                  background: "rgba(255, 255, 255, 0.12)",
                  opacity: 0.6,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Image container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-slate-900">
                <Image
                  src="/me.jpg"
                  alt="Abdullah Arif - Full Stack Web Developer"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-white/10" />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
