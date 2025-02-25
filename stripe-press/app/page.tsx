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
  const pathname = usePathname();

  return (
    
    <div className="bg-[#201919] text-white font-times rounded-lg">

      {books.map((book, index) => (
        <motion.div
          key={index}
          className="w-full h-40 mb-8 cursor-pointer overflow-hidden bg-cover bg-center pt-3 rounded-lg"
          style={{ backgroundImage: `url(${book.image})` }}
          whileHover={{ scale: 1.02 }}
          onClick={() => router.push(`/books/${index}`)} // ✅ Click to go to book page
        >
          <div className="justify-center">
            <div className="ml-4 mr-4 mt-5 bg-black bg-opacity-50 p-5 rounded-lg">
              <h2 className="text-xl font-bold text-white">{book.title}</h2>
              <p className="text-md text-gray-300">{book.author}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}