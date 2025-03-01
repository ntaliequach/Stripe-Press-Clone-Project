"use client";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { useRouter} from "next/navigation";
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

  
  return (
    <div className="">
      <div className="">
        {/* Back Button */}
        <button
          className="text-lg text-gray-400 hover:text-white transition-colors ml-0 mt-2"
          onClick={handleBackButtonClick}
        >
          &larr; Back
        </button>

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
    </div>
  );
}