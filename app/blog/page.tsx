"use client"

import { Header } from "@/components/header"
import  Footer  from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { motion } from "framer-motion"
import Link from "next/link"

const BLOG_POSTS = [
  {
    id: "1",
    title: "Top 10 Hidden Gems in Southeast Asia",
    excerpt:
      "Discover the most beautiful and lesser-known destinations in Southeast Asia that will take your breath away.",
    image: "/southeast-asia-landscape.jpg",
    author: "Sarah Johnson",
    date: "December 10, 2024",
    category: "Travel Guide",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Budget Travel Tips for Europe",
    excerpt: "Learn how to explore Europe without breaking the bank with these insider tips and tricks.",
    image: "/europe-city-travel.jpg",
    author: "Michael Chen",
    date: "December 8, 2024",
    category: "Budget Travel",
    readTime: "7 min read",
  },
  {
    id: "3",
    title: "The Ultimate Guide to First Class Flying",
    excerpt: "Everything you need to know about flying first class and making the most of your premium experience.",
    image: "/airplane-first-class.jpg",
    author: "Emma Wilson",
    date: "December 5, 2024",
    category: "Travel Tips",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "Cultural Experiences You Can't Miss",
    excerpt: "Immerse yourself in local cultures and traditions around the world with these unforgettable experiences.",
    image: "/cultural-experience-travel.jpg",
    author: "David Martinez",
    date: "December 1, 2024",
    category: "Culture",
    readTime: "8 min read",
  },
]

function BlogContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-linear-to-r from-primary to-primary/80 text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Blog</h1>
              <p className="text-lg opacity-90">Stories, tips, and inspiration from travelers around the world</p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-border group"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <Link href={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  </Link>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Link href={`/blog/${post.id}`}>
                      <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                        Read More →
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default function Blog() {
  return (
    <ThemeProvider>
      <BlogContent />
    </ThemeProvider>
  )
}
