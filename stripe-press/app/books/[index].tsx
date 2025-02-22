"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type React from "react";
import "./globals.css";

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

export default function BookPage({ params }: { params: { index: string } }) {
  const router = useRouter();
  const pathname = usePathname();
  const bookIndex = parseInt(params.index, 10);
  const book = books[bookIndex];

  return (
    <div className="bg-[#201919] text-white overflow-x-hidden font-times min-h-screen p-6">
      {/* Conditionally render Back Button */}
      {pathname !== '/' && (
        <button
          className="text-lg text-gray-400 hover:text-white transition-colors mb-4"
          onClick={() => router.back()}
        >
          &larr; Back
        </button>
      )}
      <div className="max-w-4xl mx-auto">
        <img src={book.image} alt={book.title} className="w-full h-64 object-cover rounded-lg shadow-md mb-4" />
        <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
        <p className="text-xl mb-4">{book.author}</p>
        <p className="text-md">{book.description}</p>
      </div>
    </div>
  );
}