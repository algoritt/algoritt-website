'use client';

import React from 'react';
import Link from 'next/link';

const WorkingAtAlgoritt: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="/assets/careers.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
          Work at Algoritt
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-10 mx-auto">
          At Algoritt, collaboration and innovation drive everything we do. Join our inclusive, dynamic environment where diverse perspectives thrive, professional growth is prioritized, and every voice contributes to meaningful impact.
        </p>
        <Link 
          href="/careers" 
          className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300 text-lg group"
        >
          Join Our Team
          <svg 
            className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6" 
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default WorkingAtAlgoritt;
