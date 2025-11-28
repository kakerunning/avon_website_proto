"use client";

import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import { motion } from "framer-motion";
import { FaCalendar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import type { PostProps } from "@/types/index";

interface NewsPostsClientProps {
  data: PostProps;
}

export default function NewsPostsClient({ data }: NewsPostsClientProps ) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const { post } = data;
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
    
      {/* Article Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={mounted ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-lg overflow-hidden"
          suppressHydrationWarning
        >
          {/* Date and Title Header */}
          <div className="px-6 md:px-12 pt-8 md:pt-12 pb-6 md:pb-8 border-b border-gray-200">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              {/* Date Block */}
              {(() => {
                const dateObj = new Date(post.metadata.date);
                const year = dateObj.getFullYear();
                const month = String(dateObj.getMonth() + 1).padStart(2, '0');
                const day = String(dateObj.getDate()).padStart(2, '0');
                
                return (
                  <div className="bg-gray-700 text-white px-4 py-3 flex flex-col items-center justify-center min-w-[80px] rounded-lg shadow-md flex-shrink-0">
                    <div className="text-xs font-medium mb-0.5">{year}</div>
                    <div className="text-2xl font-bold">{month}</div>
                    <div className="text-xs font-medium">/{day}</div>
                  </div>
                );
              })()}
              
              {/* Title */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {post.metadata.title}
                </h1>
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <div className="px-6 md:px-12 py-8 md:py-12">
            <div className="prose prose-lg prose-gray max-w-none 
              prose-headings:font-bold prose-headings:text-gray-900
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-avon-yellow prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-ul:text-gray-700 prose-ol:text-gray-700
              prose-li:my-2
              prose-img:rounded-lg prose-img:shadow-md prose-img:my-6
              prose-blockquote:border-l-4 prose-blockquote:border-avon-yellow prose-blockquote:pl-4 prose-blockquote:italic
              prose-code:text-gray-800 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100">
              <Markdown>
                {post.markdown}
              </Markdown>
            </div>
          </div>
        </motion.div>
        
        {/* Back to News Button */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={mounted ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 md:mt-12 text-center"
          suppressHydrationWarning
        >
          <Link
            href="/nieuws"
            className="inline-flex items-center gap-2 bg-avon-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
          >
            ← Terug naar nieuws
          </Link>
        </motion.div>
      </main>
    </div>
  );
} 