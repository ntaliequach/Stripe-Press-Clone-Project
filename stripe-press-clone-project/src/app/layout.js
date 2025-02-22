"use client";

import "./globals.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const tabs = Array(10).fill("•");

export default function RootLayout({ children }) {
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <html lang="en">
      <body className="relative bg-[#201919] text-white min-h-screen w-full overflow-hidden">
        {/* LEFT NAV BAR */}
        <div className="fixed top-0 left-0 w-[80px] h-screen flex flex-col justify-between items-center py-4">
          {/* Top section: Stripe Press + Ideas for progress */}
          <div className="mt-4 flex flex-col items-center space-y-2" style={{ marginLeft: '50px' }}>
            {/* Rotate text vertically (optional approach) */}
            <h1 className="text-sm transform origin-top whitespace-nowrap">
              Stripe Press
              <p className="text-xs transform origin-top whitespace-nowrap text-gray-400">
                Ideas for progress
              </p>
            </h1>
          </div>

          {/* Tabs section */}
          <div className="flex flex-col items-center mt-10 space-y-2">
            <TooltipProvider>
              {tabs.map((_, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`w-20 h-.01 hover:bg-gray-300 ${selectedTab === index ? "bg-white" : "bg-gray-500"}`}
                      onClick={() => setSelectedTab(index)}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tab {index + 1}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>

          {/* Bottom section: Question mark */}
          <div className="mb-4">
            <button className="text-2xl">?</button>
          </div>
        </div>

        {/* MAIN CONTENT (Books) */}
        <main className="ml-[80px] min-h-screen flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}