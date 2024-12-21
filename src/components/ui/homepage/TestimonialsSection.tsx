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
    <section className="relative w-full py-24 lg:h-screen overflow-hidden bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-6 sm:py-8 lg:py-0">
        {/* Desktop and Tablet Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
              Hear what Our<br />
              Clients<br />
              Have To Say
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl">
              Join thousands of satisfied clients who have transformed their digital presence with our innovative solutions.
            </p>
            <div className="flex items-baseline space-x-4">
              <span className="text-4xl sm:text-5xl lg:text-7xl font-bold text-purple-500">
                {testimonials.length}.9K+
              </span>
              <span className="text-gray-400 text-sm sm:text-base">
                Happy Clients<br />Worldwide
              </span>
            </div>
          </motion.div>

          {/* Testimonials Carousel for Desktop/Tablet */}
          <div className="relative h-[350px] sm:h-[400px] lg:h-[500px]">
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
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 mb-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 sm:w-5 sm:h-5 ${
                              i < testimonial.rating
                                ? 'text-purple-500 fill-purple-500'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                        &quot;{testimonial.testimonial}&quot;
                      </p>
                      <div>
                        <div className="text-white font-semibold">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {testimonial.role} of {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-1.5 sm:w-2 h-6 sm:h-8 rounded-full transition-all duration-300 ${
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

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-4">
          {/* Title Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">
              Hear what Our Clients Have To Say
            </h2>
          </motion.div>

          {/* Stats and CTA Row */}
          <div className="grid grid-cols-2 gap-3 text-center">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center items-center"
            >
              <span className="text-2xl sm:text-3xl font-bold text-purple-500">
                {testimonials.length}.9K+
              </span>
              <span className="text-gray-400 text-xs sm:text-sm">
                Happy Clients Worldwide
              </span>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center items-center"
            >
              <p className="text-gray-400 text-xs sm:text-sm">
                Join thousands of satisfied clients who trust our solutions.
              </p>
            </motion.div>
          </div>

          {/* Testimonials Carousel for Mobile */}
          <div className="relative h-[300px] sm:h-[320px]">
            <div className="overflow-hidden h-full" ref={emblaRef}>
              <div className="h-full">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full flex items-center px-1"
                  >
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                              i < testimonial.rating
                                ? 'text-purple-500 fill-purple-500'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                        &quot;{testimonial.testimonial}&quot;
                      </p>
                      <div>
                        <div className="text-white font-semibold text-sm sm:text-base">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-400 text-xs sm:text-sm">
                          {testimonial.role} of {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-1.5 h-6 rounded-full transition-all duration-300 ${
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
