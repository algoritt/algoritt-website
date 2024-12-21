'use client';

import { testimonials } from '@/constants/testimonials';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const autoplayOptions = {
  delay: 3000,
  stopOnInteraction: false,
  rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
};

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: 'y',
      loop: true,
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
    <section className="h-screen bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hear what Our<br />
              Clients<br />
              Have To Say
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Join thousands of satisfied clients who have transformed their digital presence with our innovative solutions.
            </p>
            <div className="flex items-baseline space-x-4">
              <span className="text-5xl lg:text-7xl font-bold text-purple-500">
                {testimonials.length}.9K+
              </span>
              <span className="text-gray-400">
                Happy Clients<br />Worldwide
              </span>
            </div>
          </motion.div>

          {/* Right side - Testimonials Carousel */}
          <div className="relative h-[500px]">
            <div className="overflow-hidden h-full" ref={emblaRef}>
              <div className="h-full">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full flex items-center"
                  >
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 mb-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? 'text-purple-500 fill-purple-500'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        &quot;{testimonial.testimonial}&quot;
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {testimonial.role} of {testimonial.company}
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center"
                        >
                          <svg
                            className="w-4 h-4 text-purple-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-8 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? 'bg-purple-500'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
