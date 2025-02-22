"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"

const books = [
  {
    title: "The Art of Innovation",
    author: "Sarah Chen",
    color: "#672B2B",
    image: "/images/image1.png",
  },
  {
    title: "Digital Horizons",
    author: "Marcus Webb",
    color: "#D4B062",
    image: "/images/image2.png",
  },
  {
    title: "Future Perfect",
    author: "Elena Rodriguez",
    color: "#2B4459",
    image: "/images/image3.png",
  },
  {
    title: "The Quantum Edge",
    author: "Dr. James Liu",
    color: "#4A3C31",
    image: "/images/image4.png",
  },
  {
    title: "Sustainable Tomorrow",
    author: "Maya Patel",
    color: "#5B6E4F",
    image: "/images/image5.png",
  },
  {
    title: "Mind & Machine",
    author: "Alex Thompson",
    color: "#7D4E57",
    image: "/images/image6.png",
  },
  {
    title: "The Code Revolution",
    author: "David Kim",
    color: "#2F4F4F",
    image: "/images/image7.png",
  },
  {
    title: "Data Dreams",
    author: "Rachel Foster",
    color: "#8B4513",
    image: "/images/image8.png",
  },
  {
    title: "Silicon Stories",
    author: "Michael Chang",
    color: "#4B0082",
    image: "/images/image9.png",
  },
  {
    title: "The Human Algorithm",
    author: "Emma Watson",
    color: "#556B2F",
    image: "/images/image10.png",
  },
  {
    title: "Future Finance",
    author: "Robert Chen",
    color: "#483D8B",
    image: "/images/image11.png",
  },
  {
    title: "Digital Democracy",
    author: "Sofia Garcia",
    color: "#800000",
    image: "/images/image12.png",
  },
  {
    title: "Tech Titans",
    author: "Benjamin Lee",
    color: "#2F4F4F",
    image: "/images/image13.png",
  },
  {
    title: "The AI Revolution",
    author: "Dr. Sarah Miller",
    color: "#8B008B",
    image: "/images/image14.png",
  },
  {
    title: "Blockchain Future",
    author: "Thomas Anderson",
    color: "#4A766E",
    image: "/images/image15.png",
  },
  {
    title: "Innovation's Edge",
    author: "Lisa Zhang",
    color: "#6B4423",
    image: "/images/image16.png",
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [selectedBook, setSelectedBook] = useState<number | null>(null)
  const [hoveredBook, setHoveredBook] = useState<number | null>(null)
  const { scrollY } = useScroll()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Removed the `navOpacity` transform so the nav stays fully visible
  // const navOpacity = useTransform(scrollY, [0, 200], [1, 0])

  return (
    <html lang="en">
      <body className="bg-[#201919] text-white overflow-x-hidden font-times">
        {/* Left Navigation */}
        <motion.nav
          className="fixed top-0 left-0 w-48 h-screen flex flex-col justify-between items-start py-8 px-5 z-50"
          // style={{ opacity: isMobile ? 1 : navOpacity }}
          style={{ opacity: 1 }} // Always fully visible
        >
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <div>
              <h1 className="text-[20px] tracking-wide whitespace-nowrap">
                Stripe Press
              </h1>
              <p className="text-[16px] italic tracking-wide whitespace-nowrap">
                Ideas for progress
              </p>
            </div>
          </div>

          {/* Navigation Lines */}
          <div className="flex flex-col space-y-2.5 ml-2 group relative mt-6">
            {books.map((book, index) => (
              <div
                key={index}
                className="relative flex items-center"
                onMouseEnter={() => setHoveredBook(index)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                <motion.button
                  className={`h-[5px] transition-all duration-300 ${
                    selectedBook === index || hoveredBook === index
                      ? "bg-white"
                      : "bg-gray-200 group-hover:bg-gray-700"
                  }`}
                  style={{
                    width:
                      hoveredBook !== null
                        ? hoveredBook === index
                          ? "5rem"
                          : `${5 - Math.abs(hoveredBook - index) * 0.25}rem`
                        : "4rem",
                    opacity:
                      hoveredBook !== null
                        ? hoveredBook === index
                          ? 1
                          : 0.3 - Math.abs(hoveredBook - index) * 0.02
                        : 0.5,
                  }}
                  onClick={() => {
                    setSelectedBook(index)
                    const element = document.getElementById(`book-${index}`)
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                />
                {hoveredBook === index && (
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 15 }}
                    className="absolute left-24 text-s text-white whitespace-nowrap"
                  >
                    {book.title}
                  </motion.span>
                )}
              </div>
            ))}
          </div>

          {/* Help Button */}
          <button className="text-lg text-gray-400 hover:text-white transition-colors ml-2">
            ?
          </button>
        </motion.nav>

        {/* Main Content */}
        <main className="ml-0 md:ml-48 min-h-screen mt-36">
          <div className="w-full max-w-4xl mx-auto px-4 md:px-0 py-8">
            {books.map((book, index) => (
              <motion.div
                id={`book-${index}`}
                key={index}
                className="w-full h-40 mb-8 cursor-pointer overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${book.image})` }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedBook(index)}
              >
                <div className="h-full flex flex-col md:flex-row items-center justify-between p-6 md:px-12 bg-black bg-opacity-50">
                  <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {book.title}
                    </h2>
                    <p className="text-lg md:text-xl opacity-75">
                      {book.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </body>
    </html>
  )
}