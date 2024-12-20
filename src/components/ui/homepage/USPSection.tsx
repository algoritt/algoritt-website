'use client';

import { usps } from '@/constants/usps';
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const autoplayOptions = {
  delay: 4000,
  stopOnInteraction: false,
  rootNode: (emblaRoot: any) => emblaRoot.parentElement,
};

export default function USPSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'center',
      loop: true,
      skipSnaps: false,
      dragFree: true,
      containScroll: 'trimSnaps',
    },
    [AutoPlay(autoplayOptions)]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover what sets us apart and makes us your ideal technology partner
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {usps.map((usp, index) => (
              <div
                key={usp.id}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 h-full border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src={usp.icon}
                        alt={usp.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {usp.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{usp.description}</p>
                      {usp.stats && (
                        <div className="flex items-baseline space-x-2">
                          <span className="text-2xl font-bold text-purple-400">
                            {usp.stats.value}
                          </span>
                          <span className="text-sm text-gray-400">
                            {usp.stats.label}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators for mobile */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {usps.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'bg-purple-500 scale-110'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
