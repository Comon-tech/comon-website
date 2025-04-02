import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='grid items-center justify-items-center gap-16'>
      <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]">
       <Image
        // className="dark:invert"
        src="/assets/logos/logo-nobg.png"
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
