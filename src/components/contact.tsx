"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "abdullah.arif@example.com",
      href: "mailto:abdullah.arif@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New York, NY",
      href: "#",
    },
  ]

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and development.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-700/50 border-slate-600">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-600/20 p-3 rounded-lg">
                          <info.icon className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{info.title}</h4>
                          <a href={info.href} className="text-gray-300 hover:text-blue-300 transition-colors">
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">First Name</label>
                    <Input
                      placeholder="John"
                      className="bg-slate-600/50 border-slate-500 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="bg-slate-600/50 border-slate-500 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-slate-600/50 border-slate-500 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    placeholder="Project Inquiry"
                    className="bg-slate-600/50 border-slate-500 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-slate-600/50 border-slate-500 text-white placeholder:text-gray-400 resize-none"
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
