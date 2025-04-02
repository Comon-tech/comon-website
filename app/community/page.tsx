'use client'
import { useEffect, useState } from "react";
import { Actor } from "@/app/types";
import Image from 'next/image';
import React from 'react'

function Page() {

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
            console.log(error);
        }

    }

    useEffect(() => {
        getTopComoners();
    }
        , []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center pt-12 font-[family-name:var(--font-geist-sans)]">
            <div className=" px-12 pt-8">
                {/* <p className="font-bold">Top Comoners....</p> */}

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">
                    {loading ? (
                        Array.from({ length: 10 }).map((_, index: number) => (
                            <div key={index} className="relative animate-pulse space-x-4 flex flex-col items-center justify-center w-[300px] h-[120px] sm:w-[300px] sm:h-[200px] bg-[#101010] border border-[#3c3e44] rounded-2xl p-2">
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
                            <div key={actor.id} className="border-2 flex flex-col items-center justify-center gap-6 bg-[#101010] border-[#3c3e44] rounded-xl p-2">
                                <div  className="z-0 relative flex flex-col items-center justify-center w-[300px] h-[120px] sm:w-[300px] sm:h-[200px] bg-[#101010] border border-[#3c3e44] rounded-2xl p-2">
                                    <Image className="w-[80%] rounded-2xl border border-[#3c3e44]" src={actor.display_avatar_url} alt="" layout="fill" objectFit="cover" />
                                </div>
                                    <div className="flex flex-row justify-between w-full">
                                        
                                        <div className="flex flex-col items-start">
                                    <p className="font-bold text-center">{actor.display_name}</p>
                                    <p className="font-bold text-center">{actor.name}</p>
                                        </div>

                                        <div>
                                    <p className="text-center">LV {actor.level}</p>
                                    <p className="text-center">{actor.rank}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-center">
                                                Joined {(() => {
                                                    const joinedDate = new Date(actor.joined_at);
                                                    const now = new Date();
                                                    const diffInMs = now.getTime() - joinedDate.getTime();
                                                    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

                                                    if (diffInDays >= 365) {
                                                        const years = Math.floor(diffInDays / 365);
                                                        return `${years} year${years > 1 ? 's' : ''} ago`;
                                                    } else if (diffInDays >= 30) {
                                                        const months = Math.floor(diffInDays / 30);
                                                        return `${months} month${months > 1 ? 's' : ''} ago`;
                                                    } else {
                                                        return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
                                                    }
                                                })()}
                                            </p>
                                        </div>

                                    
                            </div>
                        )))}
                </div>
            </div>
        </div>
    )
}

export default Page
