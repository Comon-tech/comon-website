"use client"

import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    "Home",
    "About",
    "Members",
    "Portfolio Pages",
    "News",
    "Resources",
    "Contact",
  ];

  return (
    <div className="fixed top-0 w-full flex flex-wrap justify-between items-center p-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg border border-[#3c3e44] z-50">

      {/* Logo */}
      <div className="flex space-x-4">
        <Image
          className="dark:invert"
          src="/comon.png"
          alt="Next.js logo"
          width={40}
          height={40}
          priority
        />
      </div>

      {/* Nav Links */}
      <div className="hidden lg:flex flex-wrap justify-center gap-2 mx-auto">
        {links.map((item) => (
          <a key={item} className="text-white" href="#">
            <h1 className="flex items-center justify-center whitespace-nowrap border border-[#3c3e44] rounded-3xl py-1 px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
              {item}
            </h1>
          </a>
        ))}
      </div>

      {/* Join Server Button - Only show on larger screens */}
      <a
        className="hidden lg:flex text-white ml-auto"
        href="https://discord.gg/eqSU46Y7xW"
      >
        <h1 className="flex items-center justify-center whitespace-nowrap border border-[#3c3e44] rounded-3xl py-1 px-6 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          Join Server
        </h1>
      </a>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white p-2 ml-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={28} />
      </button>

      <div
        className={`absolute top-16 left-0 w-full bg-black bg-opacity-95 p-4 flex flex-col space-y-4 lg:hidden transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {links.map((item) => (
          <a
            key={item}
            className="text-white text-center flex items-center justify-center min-w-[120px] whitespace-nowrap p-2 rounded-3xl"
            href="#"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            {item}
          </a>
        ))}
        <a
          className="text-white text-center flex items-center justify-center min-w-[120px] whitespace-nowrap p-2 rounded-3xl"
          href="https://discord.gg/eqSU46Y7xW"
          onClick={() => setIsOpen(false)}
        >
          Join
        </a>
      </div>
    </div>
  );
}

export default Navbar;