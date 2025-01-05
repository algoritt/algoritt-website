'use client';

import React, { useCallback, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/constants/services';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const ServicesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const [showControls, setShowControls] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const autoplayOptions = {
    delay: 3000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
      skipSnaps: false,
      dragFree: false,
      duration: 30,
    },
    [Autoplay(autoplayOptions)]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', onSelect);
    
    const checkOverflow = () => {
      const { slidesInView } = emblaApi;
      setShowControls(slidesInView().length < services.length);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      emblaApi.off('select', onSelect);
      window.removeEventListener('resize', checkOverflow);
    };
  }, [emblaApi, onSelect]);

  const ServiceCard = ({ service }: { service: typeof services[0] }) => (
    <div className="w-full h-full px-3">
      <Link href={`/services/${service.id}`}>
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0 }}
          className="group h-[400px] bg-gray-800/40 backdrop-blur rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
        >
          <div className="relative h-44 w-full overflow-hidden">
            <Image
              src={service.media.thumbnail || service.media.url}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
          </div>

          <div className="p-5 flex flex-col h-[calc(400px-176px)]">
            <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-3">
              {service.description}
            </p>
            <div className="mt-auto pt-4 flex items-center text-purple-400 text-sm font-medium">
              Learn more
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );

  return (
    <section ref={containerRef} className="relative py-24 bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your business needs and drive sustainable growth
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden -mx-4" ref={emblaRef}>
            <div className="flex">
              {services.map((service) => (
                <div key={service.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] xl:flex-[0_0_25%]">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            {showControls && (
              <button
                onClick={scrollPrev}
                className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700/50 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            <div className="flex gap-3 md:hidden">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex 
                      ? 'w-6 bg-purple-500' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {showControls && (
              <button
                onClick={scrollNext}
                className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700/50 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
