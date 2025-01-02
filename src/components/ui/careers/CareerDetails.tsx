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
              <p className="text-lg mb-8 text-gray-300">{position.description}</p>

              <h2 className="text-2xl font-semibold mb-4 text-white">Requirements</h2>
              <ul className="space-y-2">
                {position.requirements?.map((requirement, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-purple-500 mr-2">•</span>
                    {requirement}
                  </li>
                ))}
              </ul>

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