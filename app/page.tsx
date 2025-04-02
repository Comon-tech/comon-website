
import Header from "./components/Header";

export default function Home() {

  return (
    <>
      <div className="min-h-screen pt-8 font-[family-name:var(--font-geist-sans)]">
        <main className="pb-4 ">

          <Header />

          <div className="flex flex-col md:flex-row items-center justify-between w-full p-6">
            <div className="text-center p-4 *:">
              <h1 className="font-bold text-xl">{"("}Community Highligt{")"}</h1>
              <p>🤖 This server is a vibrant hub for nerds, coders, gamers, and anime lovers! 🎉 We{"'"}re a friendly and supportive bunch, always ready to help each other out with coding problems, discuss our favorite anime, and share coding memes! 🤓 Oh, and we{"'"}re also prone to random bursts of chaotic energy and AI-fueled romance! ❤️😂 Is that good enough? 😉😂</p>
            </div>

            <div className="text-center p-4">
              <h1 className="font-bold text-xl">{"("}Projects Highligt{")"}</h1>
              <p>🤖 This server is a vibrant hub for nerds, coders, gamers, and anime lovers! 🎉 We{"'"}re a friendly and supportive bunch, always ready to help each other out with coding problems, discuss our favorite anime, and share coding memes! 🤓 Oh, and we{"'"}re also prone to random bursts of chaotic energy and AI-fueled romance! ❤️😂 Is that good enough? 😉😂</p>
            </div>

            <div className="text-center p-4">
              <h1 className="font-bold text-xl">{"("}News Highligt{")"}</h1>
              <p>🤖 This server is a vibrant hub for nerds, coders, gamers, and anime lovers! 🎉 We{"'"}re a friendly and supportive bunch, always ready to help each other out with coding problems, discuss our favorite anime, and share coding memes! 🤓 Oh, and we{"'"}re also prone to random bursts of chaotic energy and AI-fueled romance! ❤️😂 Is that good enough? 😉😂</p>
            </div>
          </div>
        </main>
      </div>

      <footer className="row-start-3">
        <p className="text-center text-[12px] sm:text-[14px]">© 2025 Comon. All rights reserved</p>
      </footer>

    </>
  );
}
