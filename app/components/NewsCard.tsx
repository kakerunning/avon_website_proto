"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCalendar, FaTag } from "react-icons/fa";
import type { SinglePostProps } from "../../types";

const NewsCard = (props: SinglePostProps) =>  {
  const { title, description, date, tags, slug, thumbnail} = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    // Use a consistent format that works the same on server and client
    const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 
                    'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <motion.div
      initial={mounted ? { opacity: 0, y: 20 } : false}
      whileInView={mounted ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.5}}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col"
      suppressHydrationWarning
    >
      <Link href={`/nieuws/${slug}`}>
        <div className="relative h-48 overflow-hidden">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={`${title} thumbnail`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-avon-black to-gray-800 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">AVON</span>
            </div>
          )}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-avon-yellow text-avon-black px-3 py-1 rounded-full text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <FaCalendar className="mr-2" />
            <span suppressHydrationWarning>{formatDate(date)}</span>
          </div>
          <h3 className="text-xl font-bold text-avon-black mb-3 group-hover:text-avon-yellow transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed flex-1">
            {description.length > 120 
              ? `${description.substring(0, 120)}...` 
              : description
            }
          </p>
          <div className="mt-4 text-avon-yellow font-semibold group-hover:translate-x-2 transition-transform">
            Lees meer →
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default NewsCard; 