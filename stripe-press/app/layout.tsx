"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { books } from "@/app/books";
import "./globals.css";


export default function MainPage({ children }: { children: React.ReactNode }) {
  const [selectedBook, setSelectedBook] = useState<number | null>(null);
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); //get curr route

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  

  return (
    <html lang="en">
      <body className="bg-[#201919] text-white overflow-x-hidden font-times">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
              {/* Left Navigation */}
              <motion.nav
                className="fixed top-0 left-0 w-48 h-screen flex flex-col justify-between items-start py-8 px-5 z-50"
                style={{ opacity: 1 }} // Always fully visible
              >

                {/* Logo and Title */}
                
                <button
                  className="text-gray-400 transition-colors "
                >
                  <svg
                    className="w-6 h-6 text-white transition duration-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <div className="ml-3 -mt-9">
                    <h1 className="text-[18px]  text-white tracking-wide whitespace-nowrap">
                      Stripe Press
                    </h1>
                    <p className="ml-7 text-[16px]  text-white italic tracking-wide whitespace-nowrap mb-4">
                      Ideas for progress
                    </p>
                  </div>
                </button>


                {/* Navigation Lines */}
                <div className="flex flex-col ml-2 group relative hover-area mt-6">
                  {books.map((book, index) => (
                    <div
                      key={index}
                      className="top-[.7rem] relative flex items-center h-[14px]"
                      onMouseEnter={() => setHoveredBook(index)}
                      onMouseLeave={() => setHoveredBook(null)}
                    >
                      <motion.button
                        className={`h-[4px] transition-all duration-300 ${
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
                              : "1.2rem",
                          opacity:
                            hoveredBook !== null
                              ? hoveredBook === index
                                ? 1
                                : 0.3 - Math.abs(hoveredBook - index) * 0.02
                              : 0.5,
                          willChange: "width, opacity"
                        }}
                        onClick={() => {
                          setSelectedBook(index);
                          router.push(`/books/${index}`);
                        }}
                      />
                      {hoveredBook === index && (
                        <motion.span
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 15 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
          
            <div className="ml-0 md:ml-48 min-h-screen mt-36">
              <div className="w-full max-w-4xl mx-auto px-4 md:px-0 py-8">
                {children}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}