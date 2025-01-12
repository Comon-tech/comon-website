import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <div className="fixed top-0 w-full flex justify-between p-4 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg border border-[#3c3e44]">
      <div className='flex space-x-4'>
        <Image
          className="dark:invert"
          src="/comon.png"
          alt="Next.js logo"
          width={40}
          height={40}
          priority
        />
        {/* <h1>Comon</h1> */}
      </div>

      {/* nav links */}
      <div className="flex justify-center space-x-4">

       <a className='text-white p-2 rounded-3xl' href='#'>

        <h1 className="flex items-center justify-center border border-[#3c3e44] rounded-3xl py-0 px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" >Home</h1>
       </a>
       <a className='text-white p-2 rounded-3xl' href='#'>
        <h1 className="flex items-center justify-center border border-[#3c3e44] rounded-3xl py-0 px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" >About</h1>
       </a>
       <a className='text-white p-2 rounded-3xl' href='#'>
        <h1 className="flex items-center justify-center border border-[#3c3e44] rounded-3xl py-0 px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" >Members</h1>
       </a>
       <a className='text-white p-2 rounded-3xl' href='#'>
        <h1 className="flex items-center justify-center border border-[#3c3e44] rounded-3xl py-0 px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" >Portfolio pages</h1>
       </a>
       <a className='text-white p-2 rounded-3xl' href='#'>
        <h1 className="flex items-center justify-center border border-[#3c3e44] rounded-3xl py-0 px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" >News</h1>
       </a>
       <a className='text-white p-2 rounded-3xl' href='#'>
        <h1 className="flex items-center justify-center border border-[#3c3e44] rounded-3xl py-0 px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" >Resources</h1>
       </a>
       <a className='text-white p-2 rounded-3xl' href='#'>
        <h1 className="flex items-center justify-center border border-[#3c3e44] rounded-3xl py-0 px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" >Contact</h1>
       </a>
      </div>
      <a className='text-white p-2 rounded-3xl' href='https://discord.gg/eqSU46Y7xW'>
        <h1 className="flex items-center justify-center border border-[#3c3e44] rounded-3xl py-0 px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" >Join server</h1>
      </a>
    </div>
  )
}

export default Navbar
