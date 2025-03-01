import Image from "next/image";
import React from "react";
import { FaReact } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import { RiNextjsFill, RiNodejsLine } from "react-icons/ri";
import { SiDjango, SiFlask } from "react-icons/si";

function page() {
  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-center gap-12 w-full border border-[#3c3e44] rounded-2xl p-2">
        <div className="border border-[#3c3e44] rounded-2xl p-2  max-w-[500px]">
          <Image
            src="/assets/collins.png"
            width={350}
            height={350}
            className="rounded-2xl"
            alt=""
          />
          <p className="font-bold">Collins Omondi</p>
          <p>
            A passionate full-stack developer from Kenya, having 5 years of
            Experiences
          </p>

          <div className="">
            <div className="flex flex-row items-center justify-center gap-2">
              <a
                href="https://discord.gg/eqSU46Y7xW"
                className="w-full p-2 text-center rounded-xl border border-[#3c3e44] px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
              >
                Book a call
              </a>
              <a
                href=""
                className="w-full p-2 text-center rounded-xl border border-[#3c3e44] px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
              >
                Get intouch
              </a>
            </div>
          </div>
        </div>

        <div className="border border-[#3c3e44] rounded-2xl p-2 max-w-[500px]">
          <p className="font-bold">My Expert Area</p>
          <div className="grid grid-cols-3 gap-2 p-4 items-center">
            <div className="flex flex-col items-center justify-center w-[150px] h-[100px] bg-[#101010] rounded-2xl border border-[#3c3e44]">
              <RiNextjsFill size={30} />
              <p>NextJs</p>
            </div>
            <div className="flex flex-col items-center justify-center w-[150px] h-[100px] bg-[#101010] rounded-2xl border border-[#3c3e44]">
              <FaReact size={30} />
              <p>React</p>
            </div>
            <div className="flex flex-col items-center justify-center w-[150px] h-[100px] bg-[#101010] rounded-2xl border border-[#3c3e44]">
              <RiNodejsLine size={30} />
              <p>Node</p>
            </div>
            <div className="flex flex-col items-center justify-center w-[150px] h-[100px] bg-[#101010] rounded-2xl border border-[#3c3e44]">
              <SiDjango size={30} />
              <p>Django</p>
            </div>
            <div className="flex flex-col items-center justify-center w-[150px] h-[100px] bg-[#101010] rounded-2xl border border-[#3c3e44]">
              <SiFlask size={30} />
              <p>Flask</p>
            </div>
            <div className="flex flex-col items-center justify-center w-[150px] h-[100px] bg-[#101010] rounded-2xl border border-[#3c3e44]">
              <SiFlask size={30} />
              <p>Flask</p>
            </div>
          </div>

          <p>
            As a product designer, I specialize in creating magical visual
            identities for digital products. I believe that a stunning design
            starts with common values, open communication, and respect for your
            audience.
          </p>

          <div className="flex flex-row items-center justify-center gap-2 p-4 animate-marquee">
            <div className="flex flex-row items-center justify-center gap-2 p-2 text-center rounded-xl border border-[#3c3e44] px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
              <GoDot />
              <p>Code</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 p-2 text-center rounded-xl border border-[#3c3e44] px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
              <GoDot />
              <p>Code</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 p-2 text-center rounded-xl border border-[#3c3e44] px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
              <GoDot />
              <p>Code</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 p-2 text-center rounded-xl border border-[#3c3e44] px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
              <GoDot />
              <p>Code</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 p-2 text-center rounded-xl border border-[#3c3e44] px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 font-bold">
              <GoDot />
              <p>Code</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default page;
