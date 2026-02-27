"use client";

import { Github, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/AbdullahArif17" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/abdullah-arif-89ab862b4/" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/rayan.arif.50" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950 overflow-hidden pt-16 pb-8">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-2xl font-bold tracking-tight">
                <span className="gradient-text">Abdullah</span>
                <span className="text-white/90"> Arif</span>
              </span>
              <div className="h-0.5 w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full mt-1" />
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed text-sm">
              Crafting premium digital experiences characterized by cutting-edge technology, 
              clean code architectures, and user-centric design principles.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full glass-card border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200 block w-fit"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm flex flex-col gap-1">
                <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Email</span>
                <a href="mailto:abdullaharif893@gmail.com" className="hover:text-indigo-400 transition-colors">abdullaharif893@gmail.com</a>
              </li>
              <li className="text-gray-400 text-sm flex flex-col gap-1">
                <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Phone</span>
                <a href="tel:+923362725979" className="hover:text-indigo-400 transition-colors">+92 336 2725979</a>
              </li>
              <li className="text-gray-400 text-sm flex flex-col gap-1">
                <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Location</span>
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm order-2 md:order-1 text-center md:text-left">
            &copy; {currentYear} Abdullah Arif. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm flex items-center gap-1.5 order-1 md:order-2">
            Built with Next.js & Tailwind CSS 
          </div>
        </div>
      </div>
    </footer>
  );
}
