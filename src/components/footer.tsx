"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Heart } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/AbdullahArif17" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/abdullah-arif-89ab862b4/" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/rayan.arif.50" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-black border-t border-zinc-900 overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/40 to-transparent" />

      <div className="w-[90%] max-w-[1400px] mx-auto">
        {/* Top: Large CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            LET'S BUILD SOMETHING
            <span className="bg-gradient-to-r from-[#a78bfa] to-[#e879f9] bg-clip-text text-transparent"> GREAT</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-lg mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a href="mailto:abdullaharif893@gmail.com">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-full hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-shadow duration-300"
            >
              GET IN TOUCH →
            </motion.button>
          </a>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-zinc-900 my-8" />

        {/* Bottom: Brand + Socials + Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="text-lg font-black uppercase tracking-wider text-white">
              ABDULLAH /&gt;
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-500 hover:text-white hover:border-[#8b5cf6] hover:shadow-[0_0_12px_rgba(139,92,246,0.2)] transition-all duration-300"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-zinc-600 text-xs font-medium flex items-center gap-1.5">
            &copy; {currentYear} Abdullah Arif. Built with <Heart className="h-3 w-3 text-[#8b5cf6]" /> & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
