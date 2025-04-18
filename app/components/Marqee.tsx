"use client"
import Image from "next/image"

import { motion } from "framer-motion"

export default function Marquee() {

    const quotes = [
        "/assets/quotes/quote_1.png",
        "/assets/quotes/quote_2.png",
        "/assets/quotes/quote_3.png",
        "/assets/quotes/quote_4.png",
        "/assets/quotes/quote_5.png",
        "/assets/quotes/quote_6.png",
        "/assets/quotes/quote_7.png",
        "/assets/quotes/quote_8.png",
        "/assets/quotes/quote_9.png",
        "/assets/quotes/quote_10.png",
        "/assets/quotes/quote_11.png",
        "/assets/quotes/quote_12.png", 
    ]


  return (
    <div className="relative w-full overflow-hidden bg-background py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 20 }}
      >
        {quotes.map((_, index) => (
          <div key={index} className="flex items-center mx-4">
            {/* <span
              className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4"
              style={{
                WebkitTextStroke: "1px rgb(156 163 175)", // tailwind gray-400
              }}
            >
              Flowers & Saints
            </span> */}
            <div className="z-0 relative flex flex-col w-[200px] h-[200px] lg:w-[300px] lg:h-[250px] xl:w-[400px] xl:h-[300px] border border-[#3c3e44] rounded-2xl p-2">
            <Image className="object-cover rounded-2xl" src={quotes[index % quotes.length]} alt={`Quote ${index + 1}`} layout="fill" />
                </div>


          </div>
        ))}
      </motion.div>
    </div>
  )
}
