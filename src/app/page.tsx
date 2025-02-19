"use client";
import { Button } from "@/components/ui/button";
import UserDropdown from "@/components/user-dropdown";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-9xl mt-10 mb-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
          Technorollix 2025
        </h1>
		<p className="mt-4 text-3xl text-white">
          Central India's Biggest Techno-Cultural Fest
        </p>

        {/* Countdown Timer */}
        <div className="flex gap-4 mt-20 ">
          {["22 Days", "10 Hours", "22 Minutes", "10 Seconds"].map(
            (time, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-lg text-lg font-semibold shadow-md"
              >
                {time}
              </div>
            )
          )}
        </div>

        {/* Register Button */}
        
        <Button variant="default" className="mt-12 px-14 rounded-full text-lg border-[3px] border-yellow-400 hover:scale-105 transition duration-500">Register</Button>
      
      
      </div>
    </>
  );
}
