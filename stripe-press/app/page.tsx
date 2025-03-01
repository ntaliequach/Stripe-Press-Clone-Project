"use client";

import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import type React from "react";
import "./globals.css";
import { books } from "@/app/books";



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