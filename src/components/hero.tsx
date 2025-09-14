"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Facebook,
  Mail,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Web Developer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Abdullah Arif
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6">
              <Image
                src="/me.jpg"
                alt="Abdullah Arif"
                width={256}
                height={256}
                className="w-full h-full rounded-full object-cover border-4 border-blue-400 shadow-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20"></div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 opacity-0"></div>
            </div>
          </motion.div>

          <motion.div
            className="text-2xl font-bold md:text-3xl text-blue-300 h-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {text}
          </motion.div>

          <motion.p
            className="text-lg font-medium text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Passionate about creating innovative web solutions with modern
            technologies. I build scalable applications that deliver exceptional
            user experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Link href="mailto:abdullaharif893@gmail.com">
              <Button
                onClick={() => window.open("mailto:abdullaharif893@gmail.com")}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </Link>
            <a href="/Resume.pdf" download="Abdullah_Arif_Resume.pdf">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="https://github.com/AbdullahArif17"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-arif-89ab862b4/"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="https://www.facebook.com/rayan.arif.50"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <Facebook className="h-8 w-8" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ArrowDown className="h-6 w-6 text-white/70" />
        </motion.div>
      </div>
    </section>
  );
}
