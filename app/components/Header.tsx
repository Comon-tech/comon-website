import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='flex flex-col items-center'>
      <div className="relative w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
       <Image
        // className="dark:invert"
        src="/comon.png"
        alt="Next.js logo"
        layout="fill"
        style={{ objectFit: 'contain' }}
        priority
      />
      </div>
      <h1 className="text-[20px] sm:text-[30px] md:text-[40px] font-bold text-center text-gray-900 dark:text-white">
        Welcome to Comon Tech
      </h1>
      </div>
  )
}

export default Header
