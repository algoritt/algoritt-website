'use client';

import { testimonials } from '@/constants/testimonials';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full py-16 lg:min-h-[80vh] bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-purple-600/5 to-gray-900/0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Join the ranks of leading financial institutions who trust our expertise in risk management
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="h-[320px] md:h-[280px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 flex flex-col"
              >
                <div className="absolute -top-4 right-8 text-7xl text-purple-500/20">&quot;</div>
                
                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="flex-grow overflow-y-auto scrollbar-hide">
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                      {testimonials[currentIndex].testimonial}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-700/50">
                    <h4 className="text-white font-semibold text-xl mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-16">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 text-white transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 text-white transition-all duration-300 backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-purple-500'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center items-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-purple-500">50+</p>
            <p className="text-gray-400 text-sm md:text-base mt-1">Financial Institutions</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-purple-500">100%</p>
            <p className="text-gray-400 text-sm md:text-base mt-1">Client Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
