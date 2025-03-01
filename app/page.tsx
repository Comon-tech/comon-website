'use client'
import { useEffect, useState } from "react";
import { Actor } from "./types";


export default function Home() {
  const [topComoners, setTopComoners] = useState<Actor[] | undefined>();

  async function getTopComoners() {
    const endpoint = "/api/leaderboard";
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const res = await response.json();
      setTopComoners(res.data);
    } else {
      const error = await response.json();
      console.error(error);
    }

  }

  useEffect(() => {
    // document.title = "Comon";
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
            {topComoners?.map((actor) => (
              <div key={actor.id} className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#101010] border border-[#3c3e44] rounded-2xl border border-[#3c3e44]">
                <img className="w-[80%] rounded-2xl" src={actor.avatar_url} alt=""
                ></img>
                <p className="font-bold">{actor.display_name}</p>
                <p>Level: {actor.level}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
