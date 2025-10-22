"use client"

import { Header } from "@/components/header"
import  Footer  from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import Link from "next/link"

const BLOG_POSTS: Record<string, any> = {
  "1": {
    id: "1",
    title: "Top 10 Hidden Gems in Southeast Asia",
    author: "Sarah Johnson",
    date: "December 10, 2024",
    category: "Travel Guide",
    readTime: "5 min read",
    image: "/southeast-asia-landscape.jpg",
    content: `
      Southeast Asia is a treasure trove of incredible destinations. From pristine beaches to ancient temples, 
      this region offers something for every traveler. In this comprehensive guide, we'll explore the top 10 hidden gems 
      that most tourists miss.
      
      1. Luang Prabang, Laos - A charming riverside town with French colonial architecture and Buddhist temples.
      2. Koh Rong, Cambodia - A pristine island with white sand beaches and crystal-clear waters.
      3. Ubud, Indonesia - The cultural heart of Bali with rice terraces and traditional arts.
      4. Chiang Mai, Thailand - Known for its night markets, temples, and outdoor activities.
      5. Hoi An, Vietnam - A beautifully preserved ancient town with lantern-lit streets.
      
      Each of these destinations offers unique experiences and authentic cultural encounters that will enrich your travels.
    `,
  },
  "2": {
    id: "2",
    title: "Budget Travel Tips for Europe",
    author: "Michael Chen",
    date: "December 8, 2024",
    category: "Budget Travel",
    readTime: "7 min read",
    image: "/europe-city-travel.jpg",
    content: `
      Traveling through Europe doesn't have to be expensive. With smart planning and insider knowledge, 
      you can explore this beautiful continent on a budget. Here are our top tips for saving money while 
      experiencing the best of Europe.
      
      Travel during shoulder seasons (April-May and September-October) for better prices and fewer crowds.
      Use public transportation instead of taxis and rental cars.
      Stay in hostels or budget hotels in less touristy areas.
      Eat like a local - visit markets and street food vendors instead of restaurants.
      Take advantage of free walking tours and museum free hours.
    `,
  },
}

function BlogDetailContent() {
  const params = useParams()
  const postId = params.id as string
  const post = BLOG_POSTS[postId]

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
            <Link href="/blog">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md">Back to Blog</button>
            </Link>
          </div>
        </main>
       <Footer/>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full mb-4">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
                <div className="flex items-center gap-4 text-white/90">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <div className="text-lg leading-relaxed text-foreground whitespace-pre-wrap">{post.content}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <Link href="/blog">
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:shadow-lg transition-shadow">
                  ← Back to Blog
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function BlogDetail() {
  return (
    <ThemeProvider>
      <BlogDetailContent />
    </ThemeProvider>
  )
}
