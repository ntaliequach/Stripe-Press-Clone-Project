"use client";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { useRouter, usePathname } from "next/navigation";
import { useState, useMemo, useCallback } from "react";
import { debounce } from "lodash";
import Image from "next/image";
import { books } from "@/app/books";



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
    // router.push("/"); // Use router.push to navigate to the homepage
    router.back(); // Force a refresh of the homepage
    setTimeout(() => window.location.reload(), 100);
    //window.location.href = "/";
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
        className="top-[-13rem] relative flex items-center h-[14px]" //height of the whole bar
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
    <html lang="en">
      <body className="bg-[#201919] text-white overflow-x-hidden font-times">
        
        <div className="max-w-4xl mx-auto p-6">
        

          {/* Back Button */}
          <button
            className="text-lg text-gray-400 hover:text-white transition-colors ml-0 mt-2"
            onClick={handleBackButtonClick}
          >
            &larr; Back
          </button>


          {/* Left Navigation */}
          <motion.nav
            className="fixed hover-area left-0 w-48 h-screen flex flex-col justify-between items-start py-8 px-5 z-50"
            style={{ bottom: 0.3, opacity: 1 }} // Always fully visible
          >

            {/* Logo and Title */}
            
           <div className="fixed top-0 left-0 w-48 h-screen flex flex-col justify-between items-start py-8 px-5 z-50">
            
              <button
                className="text-gray-400 hover:text-gray-300 transition-colors "
                onClick={handleBackButtonClick}
              >
                <svg
                  className="w-6 h-6 text-white group-hover:text-gray-400 transition duration-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <div className="ml-3 -mt-9">
                  <h1 className="text-[18px]  text-white group-hover:text-gray-300 tracking-wide whitespace-nowrap">
                    Stripe Press
                  </h1>
                  <p className="ml-7 text-[16px]  text-white italic group-hover:text-gray-300 tracking-wide whitespace-nowrap">
                    Ideas for progress
                  </p>
                </div>
              </button>
              
              {/* Navigation Lines */}
          
              <div className="flex flex-col ml-2 group relative"
                  style={{ marginBottom: "165px" }}
              >
                {navigationLines}
              </div>
             
           </div> 
          </motion.nav>

        <div className="ml-15">
          {/* Book Cover Container */}
          <div className="relative w-full flex justify-center items-center">
            {/* Overlay Text */}
            
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-20 mr-8"
            style={{ rotateY: -35, rotateX: -29 }}
          >
            <h1 className="text-white text-xl font-bold">{book.title}</h1>
            <p className="text-white text-lg">{book.author}</p>
          </motion.div>

            {/* Book Cover Image */}
            <Image
              src={book.cover}
              alt={`${book.title} cover`}
              width={450}
              height={200}
              className="z-0"
              style={{ filter: 'brightness(65%)', rotate: '4deg'}}
            />
          </div>

          {/* Book Description */}
          <p className="text-gray-100 text-md -mt-10">{book.description}</p>
        </div>


        </div>
      </body>
    </html>
  );
}