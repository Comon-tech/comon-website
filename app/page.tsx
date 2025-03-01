

export default function Home() {
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
            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#101010] border border-[#3c3e44] rounded-2xl border border-[#3c3e44]">
              <img className="w-[80%] rounded-2xl" src="https://cdn.discordapp.com/avatars/883879177021972531/019a75fff7e3e1f53b6bcdede789b072.png?size=1024"></img>
              {/* <p className="font-bold text-center">wiferily</p> */}
            </div>

            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#101010] border border-[#3c3e44] rounded-2xl">
              <img className="w-[80%] rounded-2xl" src="https://cdn.discordapp.com/avatars/1184356402274246781/12a9fe422f5b59c23c0322683da0741e.png?size=1024"></img>
              {/* <p className="font-bold text-center">user.abcd_</p> */}
            </div>

            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#101010] border border-[#3c3e44] rounded-2xl">
              <img className="w-[80%] rounded-2xl" src="https://cdn.discordapp.com/avatars/886682601228750938/a252526145b64110ba8d0b4c0563e3d5.png?size=1024"></img>
              {/* <p className="font-bold text-center">fallenpolarity</p> */}
            </div>

            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#101010] border border-[#3c3e44] rounded-2xl">
              <img className="w-[80%] rounded-2xl" src="https://cdn.discordapp.com/avatars/1006904559437893642/359b5786c9b4462eae438edd0e2c7ef2.png?size=1024"></img>
              {/* <p className="font-bold text-center">kuki0771</p> */}
            </div>

            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#101010] border border-[#3c3e44] rounded-2xl">
              <img className="w-[80%] rounded-2xl" src="https://cdn.discordapp.com/avatars/998345861585186836/1770d533a84f3b23430c34d549eea1ae.png?size=1024"></img>
              {/* <p className="font-bold text-center">c_o_m_o_n</p> */}
            </div>
            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#101010] border border-[#3c3e44] rounded-2xl">
              <img className="w-[80%] rounded-2xl" src="https://cdn.discordapp.com/avatars/1119892993936216075/02846d6fb6307c8befba1e77a203e270.png?size=1024"></img>
              {/* <p className="font-bold text-center">strang3r.d</p> */}
            </div>
            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#101010] border border-[#3c3e44] rounded-2xl">
              <img className="w-[80%] rounded-2xl" src="https://cdn.discordapp.com/avatars/1240524216055365633/45604db7f5342074e9e7c8018252139d.png?size=1024"></img>
              {/* <p className="font-bold text-center">5hark_byte</p> */}
            </div>
            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#101010] border border-[#3c3e44] rounded-2xl">
              <img className="w-[80%] rounded-2xl" src="https://cdn.discordapp.com/avatars/952424932871143445/b6103f66f2b3b3acb0fe0ec9c974bd47.png?size=1024"></img>
              {/* <p className="font-bold text-center">sleepisrelivant</p> */}
            </div>
            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#101010] border border-[#3c3e44] rounded-2xl">
              <img className="w-[80%] rounded-2xl" src="https://cdn.discordapp.com/avatars/304721494276308992/ad7d844a8ef9b1dc10bc9570e4bb328e.png?size=1024"></img>
              {/* <p className="font-bold text-center">ambratolm</p> */}
            </div>
            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#101010] border border-[#3c3e44] rounded-2xl">
              <img className="w-[80%] rounded-2xl" src="https://cdn.discordapp.com/avatars/1278340604899889214/abbfc2c576f4eeb2332538477963b022.png?size=1024"></img>
              {/* <p className="font-bold text-center">d9_checkmatesolutions</p> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
