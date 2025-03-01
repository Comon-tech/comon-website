'use client'
import { useEffect, useState } from "react";
import { Actor } from "./types";

export default function Home() {
  const [topComoners, setTopComoners] = useState<Actor[] | undefined>();
  const [loading, setLoading] = useState(true);

  async function getTopComoners() {
    const endpoint = "/api/leaderboard";

    setLoading(true);
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const res = await response.json();
      setTopComoners(res.data.slice(0, 10));
      setLoading(false);
    } else {
      const error = await response.json();
      console.error(error);
    }

  }

  useEffect(() => {
    getTopComoners();
  }
    , []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 row-start-2 items-center sm:items-start pb-4 border-b-2 border-b-[#3c3e44]">

        <div className="">
          <h1 className="text-[80px]">Welcome to Comon</h1>

          <div className="flex flex-row items-center justify-center gap-2">
            <a href="https://discord.gg/eqSU46Y7xW" className="w-full p-2 text-center rounded-3xl border border-[#3c3e44] px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" >Join Comon server</a>
            <a href="" className="w-full p-2 text-center rounded-3xl border border-[#3c3e44] px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" >Explore Comon first</a>
          </div>

        </div>
        <div className="border border-[#3c3e44] rounded-2xl p-4">
          <p className="font-bold">Top Comoners....</p>

          <div className="grid grid-cols-5 gap-2 w-full">
            {loading ? (
              Array.from({ length: 10 }).map((_, index:number) => (
              <div key={index} className="relative animate-pulse space-x-4 flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#101010] border border-[#3c3e44] rounded-2xl p-2">
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
                <div key={actor.id} className="relative flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#101010] border border-[#3c3e44] rounded-2xl">
                <img className="w-[80%] rounded-2xl" src={actor.diplay_avatar_url} alt="" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-2xl duration-300">
                  <p className="font-bold">{actor.display_name}</p>
                  <p>{actor.level}</p>
                </div>
                </div>
            )))}
          </div>
        </div>
      </main>
    </div>
  );
}
