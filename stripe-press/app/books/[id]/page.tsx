"use client";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useMemo, useCallback } from "react";
import { debounce } from "lodash";

const books = [
  {
    title: "The Art of Innovation",
    author: "Sarah Chen",
    color: "#672B2B",
    image: "/images/image1.png",
    description: "A book about innovation and creativity.",
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
];

export default function BookPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const bookIndex = parseInt(params.id, 10);

  if (isNaN(bookIndex) || bookIndex < 0 || bookIndex >= books.length) {
    return notFound();
  }

  const book = books[bookIndex];
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);
  const [selectedBook, setSelectedBook] = useState<number | null>(null);

  // Function to handle the back button click
  const handleBackButtonClick = () => {
    router.push("/"); // Use router.push to navigate to the homepage
    router.refresh(); // Force a refresh of the homepage
  };

  // Debounced hover handlers to reduce state updates
  const handleMouseEnter = useCallback(
    debounce((index: number) => {
      setHoveredBook(index);
    }, 50),
    []
  );

  const handleMouseLeave = useCallback(
    debounce(() => {
      setHoveredBook(null);
    }, 50),
    []
  );

  const navigationLines = useMemo(() => {
    return books.map((book, index) => (
      <div
        key={index}
        className="top-[-13rem] relative hover-area flex items-center h-[14px] z-17" //height of the whole bar
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        
          <motion.button
            className={`h-[4px] transition-all duration-300 ${ //height of the line
              selectedBook === index || hoveredBook === index
                ? "bg-white"
                : "bg-gray-200 group-hover:bg-gray-200"
            }`}
            style={{
              width:
                hoveredBook !== null
                  ? hoveredBook === index
                    ? "5rem"
                    : `${5 - Math.abs(hoveredBook - index) * 0.25}rem`
                  : "1.2rem", //width of the line
              opacity:
                hoveredBook !== null
                  ? hoveredBook === index
                    ? 1
                    : 0.3 - Math.abs(hoveredBook - index) * 0.02
                  : 0.5,
              willChange: "width, opacity", // Hint browser for optimizations
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
    ));
  }, [selectedBook, hoveredBook, router, handleMouseEnter, handleMouseLeave]);

  return (
    <body className="bg-[#201919] text-white overflow-x-hidden font-times">
      <div className="max-w-4xl mx-auto p-6">
        {/* Back Button */}
        <button
          className="text-lg text-gray-400 hover:text-white transition-colors mb-4"
          onClick={handleBackButtonClick}
        >
          &larr; Back
        </button>

        {/* Left Navigation */}
        <motion.nav
          className="fixed left-0 w-48 h-screen flex flex-col justify-between items-start py-8 px-5 z-50"
          style={{ bottom: 0.3, opacity: 1 }} // Always fully visible
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
          <div className="flex flex-col ml-2 group relative mt-6">
            {navigationLines}
          </div>
        </motion.nav>

        <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
        <p className="text-2xl mb-4">{book.author}</p>
        <div className="w-full h-64 bg-cover bg-center mb-8" style={{ backgroundImage: `url(${book.image})` }}></div>
        <p className="text-lg">Book details and description go here...</p>
      </div>
    </body>
  );
}