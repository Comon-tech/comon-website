import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <div className="fixed top-0 w-full flex justify-between p-6">
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
        <ul className="flex justify-center space-x-4">

          <li>Home</li>
          <li>About</li>
          <li>Members</li>
          <li>Portfolio pages</li>
          <li>News</li>
          <li>Resources</li>
          <li>Contact</li>
        </ul>
<a className='border-1 boder-blue-500 text-white p-2 rounded-3xl' href='#'>
        <h1>Join server</h1>
</a>
    </div>
  )
}

export default Navbar
