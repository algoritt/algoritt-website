'use client';

import React from 'react';
import Link from 'next/link';

const WorkingAtAlgoritt: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="/assets/careers.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative flex items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work at Algoritt
          </h2>
          <p className="text-lg mb-8">
            Join our team of innovators and help shape the future of technology.
          </p>
          <Link href="/careers" className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300">
            Join Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkingAtAlgoritt;
