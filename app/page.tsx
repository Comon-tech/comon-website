import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid gap-8 row-start-2 items-center sm:items-start h-[1000px]"> 

            <div className="">
            <h1 className="text-[140px]">Welcome to Comon</h1>

            <div className="flex flex-row items-center justify-center gap-2">
            <a href="" className="w-full p-4 rounded-3xl border border-gray-200" >Join Comon server</a>
            <a href="" className="w-full p-4 rounded-3xl border border-gray-200" >Explore Comon first</a>
            </div>

            </div>
      </main>
    </div>
  );
}
