"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Lightbulb, Github, Linkedin, PenLine } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 mx-auto ${
          scrolled
            ? "top-4 max-w-[90%] md:max-w-[75%] lg:max-w-[65%] border border-zinc-800 bg-black/85 backdrop-blur-md rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] px-6 md:px-8 py-3"
            : "top-0 max-w-full border-b border-zinc-900 bg-black px-6 md:px-12 py-5"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("#home")}
            className="relative z-10 flex items-center gap-2 group"
          >
            <span className="text-lg md:text-xl font-black uppercase tracking-wider text-white group-hover:text-[#8b5cf6] transition-colors">
              ABDULLAH /&gt;
            </span>
          </motion.button>

          {/* Navigation links (Center) */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("#projects")}
              className="text-xs font-bold tracking-widest uppercase text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              PROJECTS <Lightbulb className="h-3.5 w-3.5" />
            </button>
            <a
              href="https://github.com/AbdullahArif17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-widest uppercase text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              GITHUB <Github className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-arif-89ab862b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-widest uppercase text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              LINKEDIN <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="hidden md:block">
            <a href="mailto:abdullaharif893@gmail.com">
              <button className="bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 flex items-center gap-2">
                CONTACT ME <PenLine className="h-3.5 w-3.5" />
              </button>
            </a>
          </div>

          {/* Mobile Menu trigger */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center h-full space-y-8"
            >
              <button
                onClick={() => scrollToSection("#projects")}
                className="text-xl font-bold uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-2 transition-colors"
              >
                PROJECTS <Lightbulb className="h-5 w-5" />
              </button>
              <a
                href="https://github.com/AbdullahArif17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-2 transition-colors"
              >
                GITHUB <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-arif-89ab862b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-2 transition-colors"
              >
                LINKEDIN <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:abdullaharif893@gmail.com" className="pt-4">
                <button className="bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white text-sm font-bold uppercase tracking-widest px-8 py-3.5 rounded-full hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all flex items-center gap-2">
                  CONTACT ME <PenLine className="h-4 w-4" />
                </button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
