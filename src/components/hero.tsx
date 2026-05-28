"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Facebook, Pencil } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-0 md:pb-0 section-shell">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[520px] h-[520px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 68%)",
            top: "12%",
            left: "-8%",
          }}
          animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[580px] h-[580px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 72%)",
            bottom: "-6%",
            right: "-14%",
          }}
          animate={{ x: [0, -90, 0], y: [0, -30, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-4">Portfolio</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 max-w-3xl mx-auto lg:mx-0">
              Abdullah Arif
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 text-white shadow-[0_0_0_12px_rgba(124,58,237,0.08)]">
                <Pencil className="h-5 w-5" />
              </span>
              <p className="text-xl sm:text-2xl text-gray-200 font-medium">
                MERN Stack Developer focused on clean, scalable digital products.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 text-sm sm:text-base">
              {[
                "Frontend Development",
                "Backend Development",
                "API Integration",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 px-5 py-2 text-gray-300 transition hover:border-white/30"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              I build premium interfaces backed by robust architecture. My focus is on user-centric, responsive, and maintainable solutions for startups and product teams.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-center lg:justify-start mb-10">
              <a href="#projects" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto text-white border border-white/10 bg-white/[0.08] hover:bg-white/10 px-6 py-3 rounded-xl transition-all duration-300">
                  View Projects
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto text-white border border-white/10 hover:bg-white/[0.06] px-6 py-3 rounded-xl transition-all duration-300">
                  Let&apos;s Talk
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-gray-400">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_35px_120px_rgba(0,0,0,0.4)]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-1">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950">
                <Image
                  src="/me.jpg"
                  alt="Abdullah Arif - Web Developer"
                  width={720}
                  height={720}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
