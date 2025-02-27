"use client";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { useRouter, usePathname } from "next/navigation";
import { useState, useMemo, useCallback } from "react";
import { debounce } from "lodash";
import Image from "next/image";


const books = [
  {
    title: "The Art of Innovation",
    author: "Sarah Chen",
    image: "/images/image1.png",
    cover: "/covers/book1.png",
    description: "An insightful exploration of how creativity drives technological and business breakthroughs, offering practical strategies for fostering innovation in any field."
  },
  {
    title: "Digital Horizons",
    author: "Marcus Webb",
    image: "/images/image2.png",
    cover: "/covers/book2.png",
    description: "A deep dive into the evolving landscape of digital transformation, examining the latest technological trends and their impact on businesses and society."
  },
  {
    title: "Future Perfect",
    author: "Elena Rodriguez",
    image: "/images/image3.png",
    cover: "/covers/book3.png",
    description: "A visionary book that explores what the future holds in AI, automation, and human interaction, focusing on how society can adapt to rapid technological change."
  },
  {
    title: "The Quantum Edge",
    author: "Dr. James Liu",
    image: "/images/image4.png",
    cover: "/covers/book4.png",
    description: "An introduction to the world of quantum computing and its potential to revolutionize industries, from finance to pharmaceuticals."
  },
  {
    title: "Sustainable Tomorrow",
    author: "Maya Patel",
    image: "/images/image5.png",
    cover: "/covers/book5.png",
    description: "A thought-provoking analysis of climate change solutions, renewable energy, and sustainable business practices for building a greener future."
  },
  {
    title: "Mind & Machine",
    author: "Alex Thompson",
    image: "/images/image6.png",
    cover: "/covers/book6.png",
    description: "An exploration of artificial intelligence and neuroscience, discussing how human cognition and machine learning intersect in the modern world."
  },
  {
    title: "The Code Revolution",
    author: "David Kim",
    image: "/images/image7.png",
    cover: "/covers/book7.png",
    description: "A compelling story about the evolution of software development, from the early days of coding to the rise of open-source and artificial intelligence-driven programming."
  },
  {
    title: "Data Dreams",
    author: "Rachel Foster",
    image: "/images/image8.png",
    cover: "/covers/book8.png",
    description: "A fascinating look at big data, privacy, and how organizations leverage information to drive decision-making in the digital economy."
  },
  {
    title: "Silicon Stories",
    author: "Michael Chang",
    image: "/images/image9.png",
    cover: "/covers/book9.png",
    description: "A behind-the-scenes account of Silicon Valley’s most influential entrepreneurs, revealing the successes, failures, and lessons learned from building tech empires."
  },
  {
    title: "The Human Algorithm",
    author: "Emma Watson",
    image: "/images/image10.png",
    cover: "/covers/book10.png",
    description: "A philosophical and ethical exploration of artificial intelligence, questioning the role of humans in an increasingly automated world."
  },
  {
    title: "Future Finance",
    author: "Robert Chen",
    image: "/images/image11.png",
    cover: "/covers/book11.png",
    description: "An in-depth look at the rise of fintech, cryptocurrency, and decentralized finance, analyzing how technology is reshaping global economies."
  },
  {
    title: "Digital Democracy",
    author: "Sofia Garcia",
    image: "/images/image12.png",
    cover: "/covers/book12.png",
    description: "A critical examination of the role technology plays in modern democracy, from social media influence to cybersecurity threats in elections."
  },
  {
    title: "Tech Titans",
    author: "Benjamin Lee",
    image: "/images/image13.png",
    cover: "/covers/book13.png",
    description: "A deep dive into the rise of the biggest tech companies in the world—Apple, Google, Amazon, Facebook, and Tesla—and their impact on society and innovation."
  },
  {
    title: "The AI Revolution",
    author: "Dr. Sarah Miller",
    image: "/images/image14.png",
    cover: "/covers/book14.png",
    description: "An engaging look at artificial intelligence, discussing breakthroughs in deep learning, ethical concerns, and the future of AI-powered automation."
  },
  {
    title: "Blockchain Future",
    author: "Thomas Anderson",
    image: "/images/image15.png",
    cover: "/covers/book15.png",
    description: "A comprehensive guide to blockchain technology, covering its potential beyond cryptocurrency in industries like healthcare, real estate, and supply chain management."
  },
  {
    title: "Innovation's Edge",
    author: "Lisa Zhang",
    image: "/images/image16.png",
    cover: "/covers/book16.png",
    description: "A roadmap for fostering a culture of innovation, featuring case studies of companies that have successfully adapted to disruptive technologies."
  }
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
            <div className="fixed top-0 left-0 w-48 h-screen flex flex-col hover:text-gray-300 justify-between items-start py-8 px-5 z-50">
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
            </div>


            {/* Navigation Lines */}
            <div className="mt-60">
            <div className="flex flex-col ml-2 group relative mt-60"
                 style={{ marginTop: "280px" }}
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