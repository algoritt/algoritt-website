'use client'

import { motion } from 'framer-motion'
import { JobPosition } from '@/types'

interface Props {
  position: JobPosition
}

export default function DetailsSection({ position }: Props) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="space-y-12"
    >
      {/* Role Overview */}
      <div className="space-y-6">
        <motion.h2 
          variants={item}
          className="text-2xl font-bold text-white"
        >
          Role Overview
        </motion.h2>
        <motion.p
          variants={item}
          className="text-gray-300"
        >
          {position.roleOverview}
        </motion.p>
      </div>

      {/* Key Responsibilities */}
      <div className="space-y-6">
        <motion.h2 
          variants={item}
          className="text-2xl font-bold text-white"
        >
          Key Responsibilities
        </motion.h2>
        <ul className="space-y-4">
          {position.keyResponsibilities.map(resp => (
            <motion.li
              key={resp}
              variants={item}
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
              <span className="text-gray-300">{resp}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="space-y-6">
        <motion.h2 
          variants={item}
          className="text-2xl font-bold text-white"
        >
          Requirements
        </motion.h2>

        {/* Education */}
        {position.requirements.education && (
          <div className="space-y-4">
            <motion.h3
              variants={item}
              className="text-xl font-semibold text-purple-400"
            >
              Education
            </motion.h3>
            <ul className="space-y-4">
              {position.requirements.education.map(edu => (
                <motion.li
                  key={edu}
                  variants={item}
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
                  <span className="text-gray-300">{edu}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Experience */}
        {position.requirements.experience && (
          <div className="space-y-4">
            <motion.h3
              variants={item}
              className="text-xl font-semibold text-purple-400"
            >
              Experience
            </motion.h3>
            <ul className="space-y-4">
              {position.requirements.experience.map(exp => (
                <motion.li
                  key={exp}
                  variants={item}
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
                  <span className="text-gray-300">{exp}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Technical Skills */}
        {position.requirements.technical && (
          <div className="space-y-4">
            <motion.h3
              variants={item}
              className="text-xl font-semibold text-purple-400"
            >
              Technical Skills
            </motion.h3>
            <ul className="space-y-4">
              {position.requirements.technical.map(tech => (
                <motion.li
                  key={tech}
                  variants={item}
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
                  <span className="text-gray-300">{tech}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Soft Skills */}
        {position.requirements.soft && (
          <div className="space-y-4">
            <motion.h3
              variants={item}
              className="text-xl font-semibold text-purple-400"
            >
              Soft Skills
            </motion.h3>
            <ul className="space-y-4">
              {position.requirements.soft.map(soft => (
                <motion.li
                  key={soft}
                  variants={item}
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
                  <span className="text-gray-300">{soft}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  )
}