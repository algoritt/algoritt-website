'use client';

import { stats } from '@/constants/stats';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Create transform values for each stat
  const transformY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <section ref={containerRef} className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900" />

      <div className="container relative mx-auto px-3 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4"
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Delivering exceptional results through innovation and expertise
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              style={{ y: transformY }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300">
                <div className="relative z-10">
                  <div className="flex items-baseline space-x-1 mb-2">
                    {stat.prefix && (
                      <span className="text-gray-300 text-2xl sm:text-3xl lg:text-4xl font-bold">
                        {stat.prefix}
                      </span>
                    )}
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="text-gray-300 text-xl sm:text-2xl font-bold">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
