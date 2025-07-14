"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating beautiful, intuitive interfaces that provide excellent user experiences.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and search engine visibility.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively in teams using modern development workflows and tools.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Passionate Web Developer
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Motivated and passionate second-year Computer Science student
              enrolled in the Governor Sindh IT Program. Eager to contribute
              technical skills in web development and programming, while
              continuously expanding knowledge in cutting-edge technologies
              like Artificial Intelligence and Cloud Computing.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I am a quick learner and I am always looking for new challenges
              and opportunities to grow. I am a team player and I am always
              looking for new ways to improve my skills.

              Completed training in TypeScript, Tailwind CSS, Next.js, Sanity, and Python.
              Currently learning advanced technologies with plans to study Artificial Intelligence and Cloud Computing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-colors">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <h4 className="text-white font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
