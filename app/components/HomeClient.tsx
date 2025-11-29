"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaRunning, FaUsers, FaHistory } from "react-icons/fa";
import NewsCard from "./NewsCard";
import { HomeProps } from "../../types";
import { useState, useRef, useEffect } from "react";

interface HomeClientProps {
  data: HomeProps;
}

export default function HomeClient({ data }: HomeClientProps) {
  const { fourposts, allTags } = data;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const userScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-scroll feature
  useEffect(() => {
    // Execute only on client side
    if (typeof window === 'undefined') return;
    
    // Enable auto-scroll for mobile only
    const isMobile = window.innerWidth < 640; // sm breakpoint
    if (!isMobile || fourposts.length <= 1) return;

    const scrollToNext = () => {
      if (!scrollContainerRef.current || isPaused) return;

      const container = scrollContainerRef.current;
      const containerWidth = container.offsetWidth;
      const cardWidth = containerWidth * 0.85 + 16; // 85vw + gap (16px)
      
      // Calculate next index from current scroll position
      const currentScrollLeft = container.scrollLeft;
      const currentIndex = Math.round(currentScrollLeft / cardWidth);
      const nextIndex = (currentIndex + 1) % fourposts.length;
      const scrollPosition = nextIndex * cardWidth;

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });

      setActiveIndex(nextIndex);
    };

    // Auto-scroll every 5 seconds
    autoScrollIntervalRef.current = setInterval(scrollToNext, 5000);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current);
      }
    };
  }, [isPaused, fourposts.length]);

  // Pause and resume when user manually scrolls
  const handleUserScroll = () => {
    setIsPaused(true);

    // Clear existing timeout
    if (userScrollTimeoutRef.current) {
      clearTimeout(userScrollTimeoutRef.current);
    }

    // Resume auto-scroll after 3 seconds
    userScrollTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative h-72 md:h-screen bg-avon-black'>
        <div className='absolute inset-0'>
          <Image
            src='/images/entrance_emma.jpg'
            alt='AVON Heerlen Atletiekbaan'
            fill
            className='object-cover opacity-60'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-avon-black to-transparent'></div>
        </div>
        <div className='relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 h-full flex items-center'>
          <div className='text-center md:text-left max-w-2xl flex flex-col items-center md:block'>
            <motion.h1
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.8 }}
              className='text-5xl md:text-7xl font-bold text-avon-white mb-4'
              suppressHydrationWarning
            >
              AVON Heerlen
            </motion.h1>
            <motion.p
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-2xl md:text-3xl text-avon-yellow mb-6'
              suppressHydrationWarning
            >
              De oudste atletiekvereniging van Limburg – sinds 1924
            </motion.p>
            <motion.p
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-xl text-avon-white mb-8'
              suppressHydrationWarning
            >
              Waar de geschiedenis van atletiek begon. Een eeuw vol sportieve
              verhalen.
            </motion.p>
            <motion.div
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='flex flex-col gap-3 w-full max-w-sm mx-auto sm:max-w-none sm:flex-row sm:justify-center md:justify-start md:mx-0'
              suppressHydrationWarning
            >
              <Link
                href='/contact'
                className='bg-avon-yellow text-avon-black px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors text-center w-full sm:w-auto sm:px-8'
              >
                Aanmelden
              </Link>
              <Link
                href='/over-ons'
                className='border-2 border-avon-yellow text-avon-yellow px-6 py-3 rounded-full font-bold hover:bg-avon-yellow hover:text-avon-black transition-colors text-center w-full sm:w-auto sm:px-8'
              >
                Over ons
              </Link>
              <Link
                href='/contact'
                className='border-2 border-avon-yellow text-avon-yellow px-6 py-3 rounded-full font-bold hover:bg-avon-yellow hover:text-avon-black transition-colors text-center w-full sm:w-auto sm:px-8'
              >
                Contact
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className='py-16 bg-avon-white'>
        <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-3xl font-bold text-avon-black'>
              Laatste Nieuws
            </h2>
            <Link
              href='/nieuws'
              className='text-avon-yellow hover:text-avon-black transition-colors font-semibold'
            >
              Bekijk alle nieuws →
            </Link>
          </div>
          {/* Mobile version: Horizontal scroll carousel */}
          <div 
            className='sm:hidden'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => {
              setTimeout(() => setIsPaused(false), 3000);
            }}
          >
            <div
              ref={scrollContainerRef}
              className='flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-2 sm:-mx-4 lg:-mx-8 px-2 sm:px-4 lg:px-8 scrollbar-hide'
              onScroll={(e) => {
                const container = e.currentTarget;
                const scrollLeft = container.scrollLeft;
                const containerWidth = container.offsetWidth;
                const cardWidth = containerWidth * 0.85 + 16; // 85vw + gap (16px)
                const newIndex = Math.min(
                  Math.round(scrollLeft / cardWidth),
                  fourposts.length - 1
                );
                setActiveIndex(newIndex);
                handleUserScroll();
              }}
            >
              {fourposts.map((post, index) => (
                <div
                  key={post.id}
                  className='flex-shrink-0 w-[85vw] snap-start'
                >
                  <NewsCard
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    tags={post.tags}
                    slug={post.slug}
                    thumbnail={post.thumbnail}
                  />
                </div>
              ))}
            </div>
            {/* Scroll indicator */}
            <div className='flex justify-center gap-2 mt-4 sm:hidden'>
              {fourposts.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-avon-yellow w-6'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop version: Grid layout */}
          <div className='hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {fourposts.map((post) => (
              <NewsCard
                key={post.id}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
                slug={post.slug}
                thumbnail={post.thumbnail}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className='py-16 bg-gray-100'>
        <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center'>
            <motion.div
              initial={mounted ? { opacity: 0, x: -20 } : false}
              whileInView={mounted ? { opacity: 1, x: 0 } : undefined}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='relative h-96 rounded-lg overflow-hidden shadow-xl'
              suppressHydrationWarning
            >
              <Image
                src='/images/entrance.jpeg'
                alt='AVON Heerlen Geschiedenis'
                fill
                className='object-cover'
              />
            </motion.div>
            <motion.div
              initial={mounted ? { opacity: 0, x: 20 } : false}
              whileInView={mounted ? { opacity: 1, x: 0 } : undefined}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              suppressHydrationWarning
            >
              <h2 className='text-3xl font-bold text-avon-black mb-4'>
                Over AVON Heerlen
              </h2>
              <p className='text-lg mb-4'>
                AVON Heerlen is de oudste atletiekvereniging van Limburg,
                opgericht in 1924. Al 100 jaar zijn wij een thuis voor atleten
                van alle niveaus.
              </p>
              <p className='text-lg mb-6'>
                Onze vereniging biedt een breed scala aan atletiekdisciplines
                aan, van sprint tot marathon, van verspringen tot kogelstoten.
                Met ervaren trainers en moderne faciliteiten helpen we onze
                leden hun doelen te bereiken.
              </p>
              <Link
                href='/over-ons'
                className='bg-avon-yellow text-avon-black px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors inline-block'
              >
                Lees meer over ons
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 bg-avon-white'>
        <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-avon-black mb-4'>
              Waarom AVON Heerlen?
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Ontdek wat AVON Heerlen uniek maakt en waarom wij al 100 jaar
              toonaangevend zijn in de atletiekwereld.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <motion.div
              initial={mounted ? { opacity: 0, y: 20 } : false}
              whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='text-center'
              suppressHydrationWarning
            >
              <div className='bg-avon-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <FaHistory className='text-avon-yellow text-2xl' />
              </div>
              <h3 className='text-xl font-bold text-avon-black mb-2'>
                100 Jaar Ervaring
              </h3>
              <p className='text-gray-600'>
                Al een eeuw lang zijn wij toonaangevend in de atletiekwereld
                van Limburg.
              </p>
            </motion.div>
            <motion.div
              initial={mounted ? { opacity: 0, y: 20 } : false}
              whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className='text-center'
              suppressHydrationWarning
            >
              <div className='bg-avon-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <FaTrophy className='text-avon-yellow text-2xl' />
              </div>
              <h3 className='text-xl font-bold text-avon-black mb-2'>
                Succesvolle Atleten
              </h3>
              <p className='text-gray-600'>
                Talloze nationale en internationale successen door onze
                getalenteerde atleten.
              </p>
            </motion.div>
            <motion.div
              initial={mounted ? { opacity: 0, y: 20 } : false}
              whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-center'
              suppressHydrationWarning
            >
              <div className='bg-avon-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <FaUsers className='text-avon-yellow text-2xl' />
              </div>
              <h3 className='text-xl font-bold text-avon-black mb-2'>
                Professionele Begeleiding
              </h3>
              <p className='text-gray-600'>
                Ervaren trainers die jou helpen je doelen te bereiken, ongeacht
                je niveau.
              </p>
            </motion.div>
            <motion.div
              initial={mounted ? { opacity: 0, y: 20 } : false}
              whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className='text-center'
              suppressHydrationWarning
            >
              <div className='bg-avon-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <FaRunning className='text-avon-yellow text-2xl' />
              </div>
              <h3 className='text-xl font-bold text-avon-black mb-2'>
                Moderne Faciliteiten
              </h3>
              <p className='text-gray-600'>
                Uitstekende trainingsfaciliteiten voor alle atletiekdisciplines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

