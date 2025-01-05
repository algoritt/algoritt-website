'use client'

import { JobPosition } from '@/constants/careers'
import ApplicationForm from '@/components/ui/careers/ApplicationForm'

interface Props {
  position: JobPosition
}

export default function CareerDetails({ position }: Props) {
  return (
    <main className="flex min-h-screen flex-col bg-gray-950">
      <section className="relative w-full pt-24 md:pt-32 pb-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-white">{position.title}</h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-8">
              <span>{position.department}</span>
              <span>•</span>
              <span>{position.location}</span>
              <span>•</span>
              <span>{position.type}</span>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg mb-8 text-gray-300">{position.roleOverview}</p>

              <h2 className="text-2xl font-semibold mb-4 text-white">Key Responsibilities</h2>
              <ul className="space-y-2">
                {position.keyResponsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start">
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
                    <span className="text-gray-300">{resp}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">Requirements</h2>
              {position.requirements.education && (
                <>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Education</h3>
                  <ul className="space-y-2 mb-4">
                    {position.requirements.education.map((edu, index) => (
                      <li key={index} className="flex items-start">
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
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {position.requirements.experience && (
                <>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Experience</h3>
                  <ul className="space-y-2 mb-4">
                    {position.requirements.experience.map((exp, index) => (
                      <li key={index} className="flex items-start">
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
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {position.requirements.technical && (
                <>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Technical Skills</h3>
                  <ul className="space-y-2 mb-4">
                    {position.requirements.technical.map((tech, index) => (
                      <li key={index} className="flex items-start">
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
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {position.requirements.soft && (
                <>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Soft Skills</h3>
                  <ul className="space-y-2">
                    {position.requirements.soft.map((soft, index) => (
                      <li key={index} className="flex items-start">
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
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="mt-12">
                <ApplicationForm position={position} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 