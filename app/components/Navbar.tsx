'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoMdMenu } from 'react-icons/io';
import { LiaTimesSolid } from 'react-icons/lia';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [btnClicked, setBtnClicked] = useState<string>();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleBtnClicked = (buttonName: string) => {
    setBtnClicked(buttonName);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed top-0 w-full flex flex-col md:flex-row justify-between p-4 rounded-2xl bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg border border-[#3c3e44] z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${isOpen && 'backdrop-blur-lg'}`}
    >
      <div className="flex justify-between items-center">
        <Link href={"/"} className="flex space-x-4 items-center">
          <Image
            // className="dark:invert"
            src="/assets/logos/logo-nobg.png"
            alt="Comon logo"
            width={40}
            height={40}
            priority
          />
        </Link>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <LiaTimesSolid size={24} /> : <IoMdMenu size={24} />}
        </button>
      </div>

      <div
        className={`flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 ${
          isOpen ? 'flex justify-start w-1/2' : 'hidden'
        } md:flex`}
      >
        <a
          className="text-white p-2 rounded-3xl"
          href="#"
          onClick={() => toggleBtnClicked('home')}
        >
          <h1
            className={`flex items-center justify-center  py-0 px-4  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ${
              btnClicked === 'home' &&
              'border rounded-3xl border-[#3c3e44] bg-gray-300 text-white'
            }  ${isOpen && 'px-1'}`}
          >
            Home
          </h1>
        </a>
        <Link
          className="text-white p-2 rounded-3xl"
          href="/community"
          onClick={() => toggleBtnClicked('about')}
        >
          <h1
            className={`flex items-center justify-center py-0 px-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ${
              btnClicked === 'about' &&
              'border rounded-3xl border-[#3c3e44] bg-gray-300 text-white'
            }`}
          >
            Community
          </h1>
        </Link>
        <a
          className="text-white p-2 rounded-3xl"
          href="#"
          onClick={() => toggleBtnClicked('portfolios')}
        >
          <h1
            className={`flex items-center justify-center py-0 px-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ${
              btnClicked === 'portfolios' &&
              'border rounded-3xl border-[#3c3e44] bg-gray-300 text-white'
            }`}
          >
            Portfolios
          </h1>
        </a>
        <a
          className="text-white p-2 rounded-3xl"
          href="#"
          onClick={() => toggleBtnClicked('contact')}
        >
          <h1
            className={`flex items-center justify-center py-0 px-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ${
              btnClicked === 'contact' &&
              'border rounded-3xl border-[#3c3e44] bg-gray-300 text-white'
            }`}
          >
            Contact
          </h1>
        </a>
        <a
          className="text-white w-full p-2 rounded-3xl mt-4 md:mt-0"
          href="https://discord.gg/eqSU46Y7xW"
        >
          <h1 className="flex items-center justify-center border border-[#3c3e44] rounded-3xl py-0 px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            Join server
          </h1>
        </a>
      </div>
    </div>
  );
}

export default Navbar;