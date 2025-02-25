"use client";

import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import type React from "react";
import "./globals.css";

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
];

export default function MainPage() {
  const router = useRouter();

  return (
    <div className="bg-[#201919] text-white font-times rounded-lg">
      {books.map((book, index) => (
        <div
          key={index}
          onClick={() => router.push(`/books/${index}`)}
          className="relative inline-block"
          style={{
            width: "750px",    // container width
            height: "350px",   // container height
            left: 0,
            overflow: "visible", // so rotated image can show
          }}
        >
          {/* Book Image */}
      <motion.div 
            style={{ rotate: "270deg" }}
            className="relative w-full h-84 overflow-hidden"
            whileHover={{ scale: 1.05 }}       // <-- Scale on hover
            transition={{ duration: 0.3 }}
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover"
              style={{
                height: "390px", // adjust as needed
                width: "800px",  // adjust as needed
                filter: "brightness(0.5)",
            
              }}
            />
          

        {/* Overlay Text */}
        <div style={{ rotate: "90deg" }} className="ml-20 mt-50 absolute inset-0 flex items-end justify-center p-9">
          <div className="flex flex-row items-center space-x-4">
            <h2 className="text-lg font-bold text-white">{book.title}</h2>
            <p className="text-md text-gray-300">{book.author}</p>
          </div>
        </div>

        <div style={{ rotate: "0deg" }} className="absolute inset-0 flex flex-row items-center justify-center">
          <div className="" style={{ rotate: "0deg" }}>
            <h2 className="text-md font-bold text-gray-300">{book.title}</h2>
            <p className="text-sm text-gray-300">{book.author}</p>
          </div>
        </div>
      </motion.div>
        </div>
      ))}
    </div>
  );
}