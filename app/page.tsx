"use client";
import Header from "./components/Header";
import Marquee from "./components/Marqee";

export default function Home() {

  return (
    <>
      <div className="min-h-screen pt-8 font-[family-name:var(--font-geist-sans)]">
        <main className="pb-4 ">

          <Header />

          <div className="flex flex-col md:flex-row items-center justify-between w-full p-6">
            <div className="text-center p-4 *:">
              <h1 className="font-bold text-xl">{"("}Community Highligt{")"}</h1>
              <p>Get to know the amazing members of the Comon Society! This section showcases the personalities, talents, and stories that make our community so vibrant and welcoming. From coding wizards to anime enthusiasts, you{"'"}ll find a diverse group of people who are passionate about learning, sharing, and having fun together!</p>
            </div>

            <div className="text-center p-4">
              <h1 className="font-bold text-xl">{"("}Projects Highligt{")"}</h1>
              <p>Explore the innovative projects that are being developed within the Comon Society! This section features collaborative coding projects, creative endeavors, and other exciting initiatives that demonstrate the skills and ingenuity of our members. Get inspired and join the next big thing!</p>
            </div>

            <div className="text-center p-4">
              <h1 className="font-bold text-xl">{"("}News Highligt{")"}</h1>
              <p>Stay up-to-date on the latest happenings in the Comon Society! This section delivers important announcements, community updates, and exciting news from around the server. Don{"'"}t miss out on the fun – check back often for the inside scoop!</p>
            </div>
          </div>
      <div>
        <Marquee />
      </div>
        </main>
      </div>

      <footer className="row-start-3">
        <p className="text-center text-[12px] sm:text-[14px]">© 2025 Comon. All rights reserved</p>
      </footer>

    </>
  );
}
