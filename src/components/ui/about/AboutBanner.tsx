'use client';

import { AboutSection } from '@/constants/about';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface AboutBannerProps {
  section: AboutSection;
}

export default function AboutBanner({ section }: AboutBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className="relative w-full py-24 overflow-hidden bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
          {section.alignment === 'left' ? (
            <>
              <motion.div style={{ y }} className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {section.title}
                </h2>
                <p className="text-xl leading-8 text-gray-300">
                  {section.description}
                </p>
              </motion.div>

              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
                {section.media.type === 'image' ? (
                  <Image
                    src={section.media.src}
                    alt={section.media.alt || section.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={section.media.src} type="video/mp4" />
                  </video>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
                {section.media.type === 'image' ? (
                  <Image
                    src={section.media.src}
                    alt={section.media.alt || section.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={section.media.src} type="video/mp4" />
                  </video>
                )}
              </div>

              <motion.div style={{ y }} className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {section.title}
                </h2>
                <p className="text-xl leading-8 text-gray-300">
                  {section.description}
                </p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
