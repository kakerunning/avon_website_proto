"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NewsCard from "./NewsCard";
import { NewsListProps } from "@/types";
import Image from "next/image";


interface NewsClientProps {
  data: NewsListProps;
}

export default function NewsClient ({ data }: NewsClientProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const { newsposts, allTags } = data;
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-avon-black via-gray-900 to-avon-black overflow-hidden">
        <div className='absolute inset-0'>
          <Image
            src='/images/entrance_emma.jpg'
            alt='AVON Heerlen Entree'
            fill
            className='object-cover opacity-60'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-avon-black to-transparent'></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={mounted ? { opacity: 0, y: 30 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.8 }}
              className="mb-6"
              suppressHydrationWarning
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Nieuws
              </h1>
              <div className="w-24 h-1 bg-avon-yellow mx-auto mb-6 rounded-full"></div>
            </motion.div>
            <motion.p
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-avon-yellow font-medium leading-relaxed"
              suppressHydrationWarning
            >
              Blijf op de hoogte van het laatste nieuws van AVON Heerlen
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* News List Grid */}
        <section>
          <motion.div
            initial={mounted ? { opacity: 0 } : false}
            animate={mounted ? { opacity: 1 } : false}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr items-stretch"
            suppressHydrationWarning
          >
            {newsposts.map((post) => (
              <div key={post.id} className="h-full">
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
          </motion.div>
        </section>
      </main>
    </div>
  );
};
// Hard-coded Dutch news
// const nieuwsLijst = [
//   {
//     id: 1,
//     slug: "clubkampioenschappen-2025",
//     title: "Clubkampioenschappen succesvol afgesloten!",
//     date: "2025-06-01",
//     excerpt: "De jaarlijkse clubkampioenschappen van AVON Heerlen leverden spannende wedstrijden en veel sportplezier op.",
//     thumbnail: undefined
//   },
//   {
//     id: 2,
//     slug: "nieuwe-trainingsschema-juni",
//     title: "Nieuw trainingsschema juni online",
//     date: "2025-05-28",
//     excerpt: "Vanaf juni starten we met een vernieuwd trainingsschema. Kijk snel wat er verandert!",
//     thumbnail: undefined
//   },
//   {
//     id: 3,
//     slug: "avon-loop-vooruitblik",
//     title: "Vooruitblik: AVON Loop 2025",
//     date: "2025-05-20",
//     excerpt: "De voorbereidingen voor de jaarlijkse AVON Loop zijn gestart. Blijf ons volgen voor updates!",
//     thumbnail: undefined
//   }
// ];

