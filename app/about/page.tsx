"use client"

import { Header } from "@/components/header"
import  Footer  from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { motion } from "framer-motion"

function AboutContent() {
  const stats = [
    { label: "Destinations", value: "150+" },
    { label: "Happy Travelers", value: "50K+" },
    { label: "Years Experience", value: "15+" },
    { label: "Expert Guides", value: "200+" },
  ]

  const team = [
    { name: "Sarah Johnson", role: "Founder & CEO", image: "/professional-woman-diverse.png" },
    { name: "Michael Chen", role: "Head of Operations", image: "/professional-man.jpg" },
    { name: "Emma Williams", role: "Travel Specialist", image: "/professional-woman-diverse.png" },
    { name: "David Martinez", role: "Guide Coordinator", image: "/professional-man.jpg" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToTop />

      <main className="flex-1">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About Infinity Travels</h1>
              <p className="text-xl text-muted-foreground mb-8">
                We believe travel is more than just visiting places—it's about creating meaningful connections and
                unforgettable memories.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2009, Infinity Travels started with a simple vision: to make world-class travel experiences
                accessible to everyone. What began as a small team of passionate travelers has grown into a global
                company serving thousands of adventurers every year.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We've spent over a decade perfecting the art of travel planning, building relationships with local
                communities, and creating itineraries that go beyond the typical tourist experience. Our commitment to
                excellence and sustainability has made us a trusted name in the travel industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-md overflow-hidden"
            >
              <img src="/travel-team-working-together.jpg" alt="Our team" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Authenticity",
                  description:
                    "We believe in genuine experiences that connect you with local cultures and communities.",
                },
                {
                  title: "Sustainability",
                  description:
                    "We're committed to responsible travel that preserves destinations for future generations.",
                },
                {
                  title: "Excellence",
                  description: "We maintain the highest standards in every aspect of our service and customer care.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-md border border-border"
                >
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative h-48 rounded-md overflow-hidden mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function AboutPage() {
  return (
    <ThemeProvider>
      <AboutContent />
    </ThemeProvider>
  )
}
