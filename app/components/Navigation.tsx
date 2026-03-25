"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
    <nav className='bg-ink text-white sticky top-0 z-50 border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-6 lg:px-10'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-3 hover:opacity-80 transition-opacity'>
            <div className='relative h-10 w-10 flex-shrink-0'>
              <Image
                src='/images/avon_logo_black.jpg'
                alt='AVON Logo'
                fill
                className='object-contain'
                priority
              />
            </div>
            <div className='hidden sm:block leading-none'>
              <span
                className='block font-bold text-lg uppercase tracking-widest text-white leading-none'
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                AVON
              </span>
              <span
                className='block text-[10px] text-gold tracking-[0.22em] uppercase font-semibold mt-0.5'
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                Heerlen
              </span>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className='hidden md:flex items-center gap-1'>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className='relative px-4 py-2 text-sm font-medium uppercase tracking-wider text-white/70 hover:text-white transition-colors group'
              >
                {item.name}
                <span className='absolute bottom-0 left-4 right-4 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left' />
              </Link>
            ))}
            <Link
              href='/contact'
              className='ml-4 bg-gold text-ink px-5 py-2 text-sm font-bold uppercase tracking-widest hover:brightness-90 transition-all'
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Word lid
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 text-gold hover:text-white transition-colors'
            aria-label='Toggle menu'
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='md:hidden bg-ash border-t border-white/10'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className='px-6 py-4 space-y-1'>
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className='block py-3 border-b border-white/10 text-white/70 hover:text-gold transition-colors font-medium uppercase tracking-wider text-sm'
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className='pt-4'>
                <Link
                  href='/contact'
                  className='block text-center bg-gold text-ink py-3 font-bold uppercase tracking-widest text-sm'
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  onClick={() => setIsOpen(false)}
                >
                  Word lid
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
