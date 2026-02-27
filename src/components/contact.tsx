"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900 border-t border-white/5">
      {/* Dynamic Background Noise */}
      <div className="absolute inset-0 noise pointer-events-none opacity-[0.03]" />
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest text-indigo-400 uppercase mb-3 text-center">
            Let&apos;s Talk
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center text-balance mx-auto">
            Get In <span className="gradient-text">Touch</span>
          </h3>
          <div className="section-divider" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-center">
             Whether you have a question, a project proposal, or just want to say hi, 
             my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Information (Left Column - 2/5 width) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
              <p className="text-gray-400 leading-relaxed">
                Fill up the form and I will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start p-6 rounded-2xl glass-card border ${info.border} hover:bg-white/[0.04] transition-all duration-300 group shadow-sm hover:shadow-md`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`p-4 rounded-xl ${info.bg} ${info.color} mr-5 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col justify-center h-full pt-1">
                    <h4 className="text-white font-medium text-lg leading-none mb-2">{info.title}</h4>
                    <span className="text-gray-400 group-hover:text-gray-200 transition-colors">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <div className="mt-12 glass p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-indigo-500/5 to-purple-500/5">
               <h4 className="text-white font-medium mb-2">Available for Freelance Opportunities</h4>
               <p className="text-sm text-gray-400">Currently accepting new projects for 2024.</p>
            </div>
          </motion.div>

          {/* Contact Form (Right Column - 3/5 width) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="glass-card border border-white/10 shadow-xl overflow-hidden rounded-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
              <CardHeader className="pt-8 px-6 md:px-8">
                <CardTitle className="text-2xl text-white">Send me a message</CardTitle>
                <CardDescription className="text-gray-400 mt-2 text-base">
                  I&apos;m here to help and answer any questions you might have.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 md:px-8 pb-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-gray-300 text-sm font-medium ml-1 block">First Name</label>
                      <Input 
                        name="firstName" 
                        required 
                        placeholder="John" 
                        className="bg-slate-800/50 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-xl focus-visible:ring-indigo-500 focus-visible:ring-offset-slate-900 transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-gray-300 text-sm font-medium ml-1 block">Last Name</label>
                      <Input 
                        name="lastName" 
                        required 
                        placeholder="Doe" 
                        className="bg-slate-800/50 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-xl focus-visible:ring-indigo-500 focus-visible:ring-offset-slate-900 transition-all" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm font-medium ml-1 block">Email Address</label>
                    <Input 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="john@example.com" 
                      className="bg-slate-800/50 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-xl focus-visible:ring-indigo-500 focus-visible:ring-offset-slate-900 transition-all" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm font-medium ml-1 block">Subject</label>
                    <Input 
                      name="subject" 
                      required 
                      placeholder="Project Inquiry" 
                      className="bg-slate-800/50 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-xl focus-visible:ring-indigo-500 focus-visible:ring-offset-slate-900 transition-all" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm font-medium ml-1 block">Message</label>
                    <Textarea 
                      name="message" 
                      required 
                      placeholder="Tell me about your project or inquiry..." 
                      rows={6} 
                      className="bg-slate-800/50 border-white/10 text-white placeholder:text-gray-500 rounded-xl resize-none focus-visible:ring-indigo-500 focus-visible:ring-offset-slate-900 transition-all p-4" 
                    />
                  </div>

                  <Button 
                    disabled={loading} 
                    className="w-full glow-button shadow-lg shadow-indigo-500/20 text-white h-14 rounded-xl font-semibold text-lg hover:-translate-y-1 transition-transform duration-300"
                  >
                    {loading ? (
                       <span className="flex items-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" /> Sending Message...
                       </span>
                    ) : (
                       <span className="flex items-center gap-2">
                          <Send className="w-5 h-5 mr-2" /> Send Message
                       </span>
                    )}
                  </Button>

                  <AnimatePresence>
                    {message && (
                      <motion.div
                         initial={{ opacity: 0, y: -10, height: 0 }}
                         animate={{ opacity: 1, y: 0, height: "auto" }}
                         exit={{ opacity: 0, height: 0 }}
                         className={`p-4 rounded-xl text-center text-sm font-medium border ${
                           message.isError 
                             ? "bg-red-500/10 text-red-400 border-red-500/20" 
                             : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                         }`}
                      >
                         {message.text}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
