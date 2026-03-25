"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import NewsCard from "./NewsCard";
import { HomeProps } from "../../types";
import { useState, useRef, useEffect } from "react";

interface HomeClientProps {
  data: HomeProps;
}

export default function HomeClient({ data }: HomeClientProps) {
  const { fourposts } = data;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const userScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.innerWidth < 640;
    if (!isMobile || fourposts.length <= 1) return;

    const scrollToNext = () => {
      if (!scrollContainerRef.current || isPaused) return;
      const container = scrollContainerRef.current;
      const containerWidth = container.offsetWidth;
      const cardWidth = containerWidth * 0.85 + 16;
      const currentScrollLeft = container.scrollLeft;
      const currentIndex = Math.round(currentScrollLeft / cardWidth);
      const nextIndex = (currentIndex + 1) % fourposts.length;
      const scrollPosition = nextIndex * cardWidth;
      container.scrollTo({ left: scrollPosition, behavior: "smooth" });
      setActiveIndex(nextIndex);
    };

    autoScrollIntervalRef.current = setInterval(scrollToNext, 5000);

    return () => {
      if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current);
      if (userScrollTimeoutRef.current) clearTimeout(userScrollTimeoutRef.current);
    };
  }, [isPaused, fourposts.length]);

  const handleUserScroll = () => {
    setIsPaused(true);
    if (userScrollTimeoutRef.current) clearTimeout(userScrollTimeoutRef.current);
    userScrollTimeoutRef.current = setTimeout(() => setIsPaused(false), 3000);
  };

  const features = [
    {
      num: "01",
      title: "100 Jaar\nErvaring",
      desc: "Al een eeuw lang zijn wij toonaangevend in de atletiekwereld van Limburg.",
    },
    {
      num: "02",
      title: "Succesvolle\nAtleten",
      desc: "Talloze nationale en internationale successen door onze getalenteerde atleten.",
    },
    {
      num: "03",
      title: "Professionele\nBegeleiding",
      desc: "Ervaren trainers die jou helpen je doelen te bereiken, ongeacht je niveau.",
    },
    {
      num: "04",
      title: "Moderne\nFaciliteiten",
      desc: "Uitstekende trainingsfaciliteiten voor alle atletiekdisciplines.",
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* ── Hero ── */}
      <section className='relative min-h-screen bg-ink overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/images/entrance_emma.jpg'
            alt='AVON Heerlen Atletiekbaan'
            fill
            className='object-cover opacity-35'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-transparent' />
          <div className='absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent' />
        </div>

        {/* Year watermark */}
        <div className='absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none pr-4 hidden lg:flex'>
          <span
            className='font-bold text-white/[0.04] leading-none'
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "22vw",
            }}
          >
            1924
          </span>
        </div>

        <div className='relative max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex flex-col justify-center py-24'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.1 }}
            className='flex items-center gap-3 mb-6'
          >
            <div className='h-px w-10 bg-gold flex-shrink-0' />
            <span
              className='text-gold text-xs uppercase tracking-[0.3em] font-semibold'
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Atletiekvereniging · Heerlen · Limburg
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.2 }}
            className='text-white font-bold uppercase leading-[0.88] mb-6'
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "clamp(4.5rem, 13vw, 10rem)",
            }}
          >
            AVON<br />
            <span className='text-gold'>Heerlen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.38 }}
            className='hidden md:block text-white/60 text-xl max-w-md mb-10 leading-relaxed'
          >
            De oudste atletiekvereniging van Limburg. Al 100 jaar het hart van atletiek in de regio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className='flex flex-col gap-3 w-full max-w-xs sm:max-w-none sm:flex-row'
          >
            <Link href='/contact' className='btn-primary text-center'>
              Aanmelden
            </Link>
            <Link href='/over-ons' className='btn-secondary text-center'>
              Over ons
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.75 }}
            className='hidden md:flex gap-12 border-t border-white/15 pt-6 mt-16'
          >
            {[
              { value: "100+", label: "Jaar" },
              { value: "7", label: "Trainingsdagen" },
              { value: "1924", label: "Opgericht" },
            ].map((stat) => (
              <div key={stat.label}>
                <span
                  className='font-bold text-gold leading-none'
                  style={{
                    fontFamily: "var(--font-barlow-condensed), sans-serif",
                    fontSize: "2.5rem",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className='block text-white/40 text-xs uppercase tracking-widest mt-1'
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── News ── */}
      <section className='py-20 bg-smoke'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <div className='flex justify-between items-end mb-12'>
            <div>
              <div className='flex items-center gap-3 mb-3'>
                <div className='h-px w-8 bg-gold flex-shrink-0' />
                <span
                  className='text-mid text-xs uppercase tracking-[0.25em] font-semibold'
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  Nieuws
                </span>
              </div>
              <h2
                className='font-bold text-ink uppercase leading-[0.9]'
                style={{
                  fontFamily: "var(--font-barlow-condensed), sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                }}
              >
                Laatste<br />Nieuws
              </h2>
            </div>
            <Link
              href='/nieuws'
              className='hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-ink transition-colors group'
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Alles zien
              <span className='group-hover:translate-x-1 transition-transform'>→</span>
            </Link>
          </div>

          {/* Mobile: Horizontal scroll carousel */}
          <div
            className='sm:hidden'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
          >
            <div
              ref={scrollContainerRef}
              className='flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 scrollbar-hide'
              onScroll={(e) => {
                const container = e.currentTarget;
                const cardWidth = container.offsetWidth * 0.85 + 16;
                const newIndex = Math.min(
                  Math.round(container.scrollLeft / cardWidth),
                  fourposts.length - 1
                );
                setActiveIndex(newIndex);
                handleUserScroll();
              }}
            >
              {fourposts.map((post) => (
                <div key={post.id} className='flex-shrink-0 w-[85vw] snap-start'>
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
            <div className='flex justify-center gap-2 mt-4'>
              {fourposts.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-gold w-6" : "bg-mid/40 w-2"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Grid */}
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

      {/* ── About ── */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={mounted ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='relative h-[440px] overflow-hidden'>
                <Image
                  src='/images/entrance.jpeg'
                  alt='AVON Heerlen Geschiedenis'
                  fill
                  className='object-cover'
                />
              </div>
              {/* Gold corner accent */}
              <div className='absolute bottom-0 right-0 w-16 h-16 bg-gold' />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={mounted ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='h-px w-8 bg-gold flex-shrink-0' />
                <span
                  className='text-mid text-xs uppercase tracking-[0.25em] font-semibold'
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  Ons verhaal
                </span>
              </div>
              <h2
                className='font-bold text-ink uppercase leading-[0.9] mb-6'
                style={{
                  fontFamily: "var(--font-barlow-condensed), sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                }}
              >
                Over AVON<br />Heerlen
              </h2>
              <p className='text-lg mb-4 text-gray-600 leading-relaxed'>
                AVON Heerlen is de oudste atletiekvereniging van Limburg,
                opgericht in 1924. Al 100 jaar zijn wij een thuis voor atleten
                van alle niveaus.
              </p>
              <p className='text-lg mb-8 text-gray-600 leading-relaxed'>
                Onze vereniging biedt een breed scala aan atletiekdisciplines
                aan, van sprint tot marathon, van verspringen tot kogelstoten.
                Met ervaren trainers en moderne faciliteiten helpen we onze
                leden hun doelen te bereiken.
              </p>
              <Link href='/over-ons' className='btn-primary'>
                Lees meer over ons
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className='py-20 bg-ink'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='h-px w-8 bg-gold flex-shrink-0' />
            <span
              className='text-white/40 text-xs uppercase tracking-[0.25em] font-semibold'
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Waarom AVON
            </span>
          </div>
          <h2
            className='font-bold text-white uppercase leading-[0.9] mb-16'
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            Waarom AVON<br />Heerlen?
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10'>
            {features.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className='bg-ash p-8 group hover:bg-white/5 transition-colors'
              >
                <div
                  className='text-gold/25 font-bold leading-none mb-4 group-hover:text-gold/40 transition-colors'
                  style={{
                    fontFamily: "var(--font-barlow-condensed), sans-serif",
                    fontSize: "5rem",
                  }}
                >
                  {item.num}
                </div>
                <h3
                  className='text-white font-bold uppercase mb-3 leading-tight whitespace-pre-line'
                  style={{
                    fontFamily: "var(--font-barlow-condensed), sans-serif",
                    fontSize: "1.5rem",
                  }}
                >
                  {item.title}
                </h3>
                <p className='text-white/45 text-sm leading-relaxed'>{item.desc}</p>
                <div className='mt-6 h-px w-8 bg-gold/40 group-hover:w-14 group-hover:bg-gold transition-all duration-300' />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
