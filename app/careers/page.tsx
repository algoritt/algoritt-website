'use client';

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button/button'
import { careerSections, openPositions } from '@/constants/careers'
import CareerSection from '@/components/ui/careers/CareerSection'

const companyStats = [
  { value: '50+', label: 'Team Members' },
  { value: '12+', label: 'Clients' },
  { value: '96%', label: 'Employee Satisfaction' },
  { value: '900+', label: 'Models Developed' },
]

// Group positions by department
const departments = [...new Set(openPositions.map(p => p.department))];

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 10
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: [0.21, 0.45, 0.32, 0.9]
    }
  }),
  hover: {
    y: -4,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
};

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const filteredPositions = selectedDepartment
    ? openPositions.filter(p => p.department === selectedDepartment)
    : openPositions;

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Pitch */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center pt-24 bg-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-gray-900" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white mb-8">
              Join Our <span className="text-purple-500">Mission</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Together, we will navigate challenges, seize opportunities, and achieve milestones that propel both your career and our collective success. Join us in a journey of mutual growth and accomplishment
            </p>
            <Button variant="default" size="lg" className="bg-purple-600 hover:bg-purple-500">
              <Link href="#open-positions">
                Explore Opportunities
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Sections */}
      {careerSections.map((section, index) => (
        <CareerSection key={section.id} section={section} index={index} />
      ))}

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-gray-50 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                Open Positions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
              >
                Join our team and be part of something extraordinary
              </motion.p>
            </div>
            
            {/* Department Filters */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-3 justify-center mb-12"
            >
              <button
                onClick={() => setSelectedDepartment(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDepartment === null
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All Departments
              </button>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedDepartment === dept
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </motion.div>

            {/* Positions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <Link
                    href={`/careers/${position.id}`}
                    className="group flex flex-col h-full p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <motion.span
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400"
                          >
                            {position.department}
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400"
                          >
                            {position.openings} {position.openings === 1 ? 'Opening' : 'Openings'}
                          </motion.span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {position.title}
                        </h3>
                      </div>
                      <motion.svg
                        className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {position.roleOverview}
                    </p>
                    
                    <div className="mt-auto flex flex-wrap gap-3 text-sm text-gray-400">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                        {position.workMode}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredPositions.length === 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg mb-4">No positions found in this department</p>
                <button
                  onClick={() => setSelectedDepartment(null)}
                  className="text-purple-400 hover:text-purple-300"
                >
                  View all positions
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
