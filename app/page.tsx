'use client'
// import { useEffect, useState } from "react";
// import { Actor } from "./types";
// import Image from 'next/image';
import Header from "./components/Header";

export default function Home() {
  // const [topComoners, setTopComoners] = useState<Actor[] | undefined>();
  // const [loading, setLoading] = useState(true);

  // async function getTopComoners() {
  //   const endpoint = "/api/leaderboard";

    // setLoading(true);
    // const response = await fetch(endpoint, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // if (response.ok) {
    //   const res = await response.json();
      // setTopComoners(res.data.slice(0, 10));
      // setLoading(false);
    // } else {
    //   const error = await response.json();
    //   console.error(error);
    // }

  /*   try {
      const res = await response.json();
      setTopComoners(res.data.slice(0, 10));
      setLoading(false);
    } catch (error) {
      console.error(error);
      
    } */

  // }

  // useEffect(() => {
  //   getTopComoners();
  // }
  //   , []);

  return (
    <>
    <div className="grid  items-center justify-items-center min-h-screen gap-16  font-[family-name:var(--font-geist-sans)]">
      <main className="pb-4 ">

<Header />

      {/* <div className="">
        <h1 className="text-[40px] sm:text-[60px] md:text-[80px]">Welcome to Comon</h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
        <a href="https://discord.gg/eqSU46Y7xW" className="w-full p-2 text-center rounded-3xl border border-[#3c3e44] px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" >Join Comon server</a>
        <a href="/activa" className="w-full p-2 text-center rounded-3xl border border-[#3c3e44] px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" >Explore Activa</a>
        </div>

      </div>
      <div className="border border-[#3c3e44] rounded-2xl p-4">
        <p className="font-bold">Top Comoners....</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 w-full">
        {loading ? (
          Array.from({ length: 10 }).map((_, index:number) => (
          <div key={index} className="relative animate-pulse space-x-4 flex flex-col items-center justify-center w-[120px] h-[120px] sm:w-[100px] sm:h-[100px] bg-[#101010] border border-[#3c3e44] rounded-2xl p-2">
          <div className="flex flex-col gap-2 w-full">
          <div className="size-10 rounded-full bg-[#3c3e44]"></div>
          <div className="col-span-2 h-2 rounded bg-[#3c3e44]"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-[#3c3e44]"></div>
            <div className="col-span-1 h-2 rounded bg-[#3c3e44]"></div>
          </div>
          </div>
          </div>
          ))

        ) : (
          topComoners?.map((actor) => (
          <div key={actor.id} className="z-0 relative flex flex-col items-center justify-center w-[120px] h-[120px] sm:w-[100px] sm:h-[100px] bg-[#101010] border border-[#3c3e44] rounded-2xl p-2">
            <Image className="w-[80%] rounded-2xl border border-[#3c3e44]" src={actor.display_avatar_url} alt="" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-2xl duration-300">
            <p className="font-bold text-center">{actor.display_name}</p>
            <p className="text-center">{actor.level}</p>
            </div>
          </div>
        )))}
        </div>
        
      </div> */}


      </main>

{/* see server chats */}
      {/* <div className="flex flex-col gap-4 row-start-3">
        <h2 className="text-[24px] sm:text-[32px]">Server Chats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border border-[#3c3e44] rounded-2xl p-4">
          <p className="font-bold">General</p>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex flex-row items-center gap-2">
              <div className="size-10 rounded-full bg-[#3c3e44]"></div>
              <p className="text-[12px] sm:text-[14px]">Collins Omondi</p>
            </div>
            <p className="text-[12px] sm:text-[14px]">Hello Comoners, welcome to Comon</p>
          </div>
        </div>
        <div className="border border-[#3c3e44] rounded-2xl p-4">
          <p className="font-bold">General</p>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex flex-row items-center gap-2">
              <div className="size-10 rounded-full bg-[#3c3e44]"></div>
              <p className="text-[12px] sm:text-[14px]">Collins Omondi</p>
            </div>
            <p className="text-[12px] sm:text-[14px]">Hello Comoners, welcome to Comon</p>
          </div>
        </div>
        </div>
      </div> */}


{/* end of server chats */}

    </div>

    {/* I want to add a screenshot of the server with chats */}
    {/* <div className="flex flex-col gap-4">
      <h2 className="text-[24px] sm:text-[32px]">Server Chats</h2>
      
      <div className="relative w-full h-64">
        <Image src="/assets/shot1.png" layout="fill" objectFit="cover" className="rounded-2xl" alt="" />
      </div>
      </div> */}



      <footer className="row-start-3">
        <p className="text-center text-[12px] sm:text-[14px]">© 2025 Comon. All rights reserved</p>
      </footer>
      
      </>
  );
}
