"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const json = await res.json()
      if (json.success) {
        setMessage({ text: "Message sent successfully! I'll get back to you soon.", isError: false })
        e.currentTarget.reset()
      } else {
        setMessage({ text: "Failed to send message. Please try again.", isError: true })
      }
    } catch {
      setMessage({ text: "An error occurred. Please try again later.", isError: true })
    }

    setLoading(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "abdullaharif893@gmail.com",
      href: "mailto:abdullaharif893@gmail.com",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 3362725979",
      href: "tel:+923362725979",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Karachi, Pakistan",
      href: "https://maps.google.com/?q=Karachi,Pakistan",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60 mb-4">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Let&apos;s build something together</h2>
          <p className="text-gray-400 mx-auto mt-5 max-w-2xl text-base leading-relaxed">
            Whether it&apos;s a new project, collaboration, or support request, I&apos;m ready to help. Send a message and I&apos;ll reply as soon as possible.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_1.85fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.3)]">
              <h3 className="text-2xl font-semibold text-white mb-4">Reach out directly</h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m available for freelance and full-time opportunities. Reach out for a quick quote, collaboration, or just a friendly chat.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-5 transition hover:bg-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-3xl ${info.bg} ${info.color}`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2">{info.title}</p>
                    <p className="text-base font-medium text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Open for new work</h4>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m actively looking for challenging projects with teams who care about polished UX, maintainable code, and strong performance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 shadow-[0_25px_80px_rgba(0,0,0,0.3)] overflow-hidden">
              <div className="bg-slate-950/90 px-6 py-6 sm:px-8">
                <h3 className="text-2xl font-semibold text-white">Send a message</h3>
                <p className="text-gray-400 mt-2">I&apos;ll reply within 24 hours on business days.</p>
              </div>

              <div className="px-6 pb-8 sm:px-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-gray-300">First Name</span>
                      <Input
                        name="firstName"
                        required
                        placeholder="John"
                        className="mt-2 bg-slate-800/80 border-white/10 text-white placeholder:text-gray-500 h-14 rounded-3xl focus-visible:ring-indigo-500 focus-visible:ring-offset-slate-950 transition"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-medium text-gray-300">Last Name</span>
                      <Input
                        name="lastName"
                        required
                        placeholder="Doe"
                        className="mt-2 bg-slate-800/80 border-white/10 text-white placeholder:text-gray-500 h-14 rounded-3xl focus-visible:ring-indigo-500 focus-visible:ring-offset-slate-950 transition"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm font-medium text-gray-300">Email Address</span>
                    <Input
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="mt-2 bg-slate-800/80 border-white/10 text-white placeholder:text-gray-500 h-14 rounded-3xl focus-visible:ring-indigo-500 focus-visible:ring-offset-slate-950 transition"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-gray-300">Subject</span>
                    <Input
                      name="subject"
                      required
                      placeholder="Project Inquiry"
                      className="mt-2 bg-slate-800/80 border-white/10 text-white placeholder:text-gray-500 h-14 rounded-3xl focus-visible:ring-indigo-500 focus-visible:ring-offset-slate-950 transition"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-gray-300">Message</span>
                    <Textarea
                      name="message"
                      required
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      className="mt-2 bg-slate-800/80 border-white/10 text-white placeholder:text-gray-500 rounded-3xl resize-none focus-visible:ring-indigo-500 focus-visible:ring-offset-slate-950 transition p-4"
                    />
                  </label>

                  <Button
                    disabled={loading}
                    className="w-full rounded-3xl bg-white/5 border border-white/10 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-500/10 transition hover:bg-white/10"
                  >
                    {loading ? (
                      <span className="inline-flex items-center justify-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center gap-2">
                        <Send className="h-5 w-5" /> Send Message
                      </span>
                    )}
                  </Button>

                  <AnimatePresence>
                    {message && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`rounded-3xl border px-4 py-3 text-center text-sm font-medium ${
                          message.isError
                            ? "border-red-500/20 bg-red-500/10 text-red-300"
                            : "border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
                        }`}
                      >
                        {message.text}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
