"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Over ons", path: "/over-ons" },
    { name: "Trainingen", path: "/trainingen" },
    { name: "Nieuws", path: "/nieuws" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className='bg-avon-black text-avon-white sticky top-0 z-50 shadow-md'>
      <div className='max-w-7xl mx-auto px-10 sm:px-10 lg:px-10'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center hover:opacity-80 transition-opacity'>
              <div className='relative h-14 w-14 md:h-16 md:w-16 mr-3 flex-shrink-0'>
                <Image
                  src='/images/avon_logo_black.jpg'
                  alt='AVON Logo'
                  fill
                  className='object-contain'
                  priority
                />
              </div>
            
            </Link>
          </div>

          {/* Desktop menu */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className='hover:bg-avon-yellow hover:text-avon-black px-3 py-2 rounded-md text-sm font-medium transition-colors'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-avon-yellow hover:text-avon-white hover:bg-avon-yellow focus:outline-none'
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className='md:hidden'
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className='block hover:bg-avon-yellow hover:text-avon-black px-3 py-2 rounded-md text-base font-medium'
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;
