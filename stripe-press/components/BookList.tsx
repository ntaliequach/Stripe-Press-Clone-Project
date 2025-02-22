"use client";

import { useRouter } from "next/navigation"; // ✅ Use next/navigation instead of next/router
import { motion } from "framer-motion";

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

const BookList = () => {
  const router = useRouter(); // ✅ Ensure router is inside a client component

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-0 py-8">
      {books.map((book, index) => (
        <motion.div
          key={index}
          className="w-full h-40 mb-8 cursor-pointer overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${book.image})` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => router.push(`/books/${index}`)} // ✅ Proper client-side navigation
        >
          <div className="h-full flex flex-col md:flex-row items-center justify-between p-6 md:px-12 bg-black bg-opacity-50">
            <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{book.title}</h2>
              <p className="text-lg md:text-xl opacity-75">{book.author}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BookList;
