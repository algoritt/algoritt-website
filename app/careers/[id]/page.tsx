'use client';

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { openPositions } from '@/constants/careers'
import Link from 'next/link'
import ApplicationForm from '@/components/ui/careers/ApplicationForm'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.45, 0.32, 0.9]
    }
  }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function CareerPositionPage() {
  const { id } = useParams() as { id: string };
  const position = openPositions.find(p => p.id === id);

  if (!position) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Position Not Found</h1>
          <Link 
            href="/careers"
            className="text-purple-400 hover:text-purple-300"
          >
            View all positions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-gray-900" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400">
                {position.department}
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                {position.openings} {position.openings === 1 ? 'Opening' : 'Openings'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {position.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-gray-300 mb-8">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {position.location}
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {position.type}
              </span>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              {position.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={container}
                  className="space-y-12"
                >
                  {/* Requirements */}
                  <motion.div variants={fadeIn} className="space-y-6">
                    <h2 className="text-2xl font-bold text-white">Requirements</h2>
                    <ul className="space-y-4">
                      {position.requirements.map((req, index) => (
                        <motion.li
                          key={index}
                          variants={fadeIn}
                          className="flex items-start"
                        >
                          <svg
                            className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-gray-300">{req}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* What We Offer */}
                  <motion.div variants={fadeIn} className="space-y-6">
                    <h2 className="text-2xl font-bold text-white">What We Offer</h2>
                    <ul className="space-y-4">
                      {[
                        'Competitive salary and equity package',
                        'Flexible working hours and remote work options',
                        'Health, dental, and vision insurance',
                        'Professional development opportunities',
                        'Modern tech stack and tools',
                        'Collaborative and inclusive work environment'
                      ].map((benefit, index) => (
                        <motion.li
                          key={index}
                          variants={fadeIn}
                          className="flex items-start"
                        >
                          <svg
                            className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-300">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>

              {/* Application Form Sidebar */}
              <div className="lg:col-span-2">
                <div className="sticky top-24">
                  <ApplicationForm position={position} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Positions */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={container}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold text-white text-center">Similar Positions</h2>
              <div className="grid gap-6">
                {openPositions
                  .filter(p => p.department === position.department && p.id !== position.id)
                  .slice(0, 2)
                  .map((pos, index) => (
                    <motion.div
                      key={pos.id}
                      variants={fadeIn}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={`/careers/${pos.id}`}
                        className="block p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all"
                      >
                        <h3 className="text-xl font-bold text-white mb-2">{pos.title}</h3>
                        <p className="text-gray-400 text-sm line-clamp-2 mb-4">{pos.description}</p>
                        <div className="flex gap-4 text-sm text-gray-400">
                          <span>{pos.location}</span>
                          <span>•</span>
                          <span>{pos.type}</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 