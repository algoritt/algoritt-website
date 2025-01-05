'use client';

import { AboutSection } from '@/constants/about';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface AboutBannerProps {
  section: AboutSection;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function AboutBanner({ section }: AboutBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yParallax = useParallax(scrollYProgress, 50);
  const yParallaxText = useParallax(scrollYProgress, 30);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const mediaVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      x: section.alignment === 'left' ? 20 : -20
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };

  return (
    <div ref={containerRef} className="relative w-full py-32 overflow-hidden bg-gray-900 font-worksans">
      {/* Background Pattern with Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"
        style={{ opacity }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
          {section.alignment === 'left' ? (
            <>
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                    style={{ y: yParallax }}
                  >
                    {section.title}
                  </motion.h2>
                  <div className="w-20 h-1 bg-purple-600 rounded-full" />
                </div>
                <motion.p 
                  className="text-gray-400 text-lg md:text-xl max-w-2xl"
                  style={{ y: yParallaxText }}
                >
                  {section.description}
                </motion.p>
              </motion.div>

              <motion.div
                variants={mediaVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10" />
                {section.media.type === 'image' ? (
                  <Image
                    src={section.media.src}
                  alt={section.media.alt || section.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  >
                    <source src={section.media.src} type="video/mp4" />
                  </video>
                )}
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                variants={mediaVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10" />
                {section.media.type === 'image' ? (
                  <Image
                    src={section.media.src}
                    alt={section.media.alt || section.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  >
                    <source src={section.media.src} type="video/mp4" />
                  </video>
                )}
              </motion.div>

              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                    style={{ y: yParallax }}
                  >
                    {section.title}
                  </motion.h2>
                  <div className="w-20 h-1 bg-purple-600 rounded-full" />
                </div>
                <motion.p 
                  className="text-gray-400 text-lg md:text-xl max-w-2xl"
                  style={{ y: yParallaxText }}
                >
                  {section.description}
                </motion.p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
