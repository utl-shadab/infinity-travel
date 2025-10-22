"use client"

import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Anderson",
      role: "Travel Enthusiast",
      image: "/professional-woman-diverse.png",
      text: "Infinity Travels made my dream vacation a reality. The attention to detail and personalized service was exceptional!",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Adventure Seeker",
      image: "/professional-man.jpg",
      text: "Best travel experience ever! The guides were knowledgeable, and every moment was perfectly planned.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Family Traveler",
      image: "/professional-woman-diverse.png",
      text: "Our family had an unforgettable experience. The team went above and beyond to make everyone happy.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real travelers who've explored the world with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 rounded-md border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
