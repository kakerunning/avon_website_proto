"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRunning } from "react-icons/fa";
import type { SinglePostProps } from "../../types";

const NewsCard = (props: SinglePostProps) => {
  const { title, description, date, tags, slug, thumbnail } = props;
  const [mounted, setMounted] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    const months = [
      "jan", "feb", "mrt", "apr", "mei", "jun",
      "jul", "aug", "sep", "okt", "nov", "dec",
    ];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  return (
    <motion.div
      initial={mounted ? { opacity: 0, y: 20 } : false}
      whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className='bg-white overflow-hidden group h-full flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300'
      suppressHydrationWarning
    >
      <Link href={`/nieuws/${slug}`} className='flex flex-col h-full'>
        {/* Image */}
        <div className='relative h-48 overflow-hidden flex-shrink-0'>
          {thumbnail && !imgError ? (
            <Image
              src={thumbnail}
              alt={`${title} thumbnail`}
              fill
              className='object-cover group-hover:scale-105 transition-transform duration-500'
              onError={() => setImgError(true)}
            />
          ) : (
            <div className='w-full h-full bg-ash flex flex-col items-center justify-center p-4 gap-2'>
              <FaRunning className='text-gold text-4xl' />
              <span className='text-white text-sm font-semibold text-center leading-tight'>
                {title}
              </span>
            </div>
          )}
          {/* Tags overlay */}
          <div className='absolute top-3 left-3 flex flex-wrap gap-1.5'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='bg-gold text-ink px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide'
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className='p-5 flex-1 flex flex-col border-b-2 border-transparent group-hover:border-gold transition-colors duration-300'>
          <div
            className='text-mid text-xs uppercase tracking-widest mb-3 font-semibold'
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            suppressHydrationWarning
          >
            {formatDate(date)}
          </div>
          <h3
            className='font-bold text-ink mb-2 group-hover:text-gold transition-colors leading-tight'
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "1.25rem",
            }}
          >
            {title}
          </h3>
          <p className='text-gray-500 text-sm leading-relaxed flex-1'>
            {description.length > 110
              ? `${description.substring(0, 110)}…`
              : description}
          </p>
          <div
            className='mt-4 text-gold text-xs font-bold uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-200'
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            Lees meer →
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default NewsCard;
