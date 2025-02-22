"use client";

export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Book Stack Container */}
      <div className="flex flex-col items-center space-y-6">
        {/* Each "book" is just a colored rectangle */}
        <div className="w-[500px] h-[50px] bg-[#B5651D]" />
        <div className="w-[500px] h-[50px] bg-[#F39C12]" />
        <div className="w-[500px] h-[50px] bg-[#8E44AD]" />
        <div className="w-[500px] h-[50px] bg-[#C0392B]" />
        {/* Add more as needed */}
      </div>
    </div>
  );
}
