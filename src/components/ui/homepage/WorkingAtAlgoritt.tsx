'use client';

import React from 'react';
import Link from 'next/link';

const WorkingAtAlgoritt: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="/assets/careers.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Work at Algoritt
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto">
            Join our team of innovators and help shape the future of technology.
          </p>
          <Link 
            href="/careers" 
            className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300 text-lg"
          >
            Join Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkingAtAlgoritt;
