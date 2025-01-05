'use client'

import { motion } from 'framer-motion'

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-gray-900" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 font-work tracking-tight">
              Disclaimer
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-work max-w-2xl mx-auto leading-relaxed">
              Important information about the use of our website and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto prose prose-invert prose-lg 
              prose-headings:font-work 
              prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:font-bold prose-h2:text-purple-400 prose-h2:mb-6
              prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:font-semibold prose-h3:text-gray-200 prose-h3:mt-8
              prose-p:font-work prose-p:text-gray-300 prose-p:leading-relaxed
              prose-li:font-work prose-li:text-gray-300
              prose-strong:text-purple-400
              prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300"
          >
            <div className="space-y-8">
              <p className="text-lg sm:text-xl leading-relaxed">
                Algoritt is a leading global consulting firm offering specialized services and solutions to the financial services industry. Founded in 2018, Algoritt is a trusted partner to some of the world's largest banks, insurance companies, asset managers, and other financial institutions. Our deep domain expertise in financial services, combined with advanced analytics and new-age technologies, has enabled us to accelerate value creation for our clients across their entire enterprise.
              </p>

              <div className="space-y-6">
                <h2>General Disclaimer</h2>
                <p>
                  The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.
                </p>

                <h2>No Professional Advice</h2>
                <p>
                  The information on this website should not be considered as professional advice. Any reliance you place on such information is strictly at your own risk. You should always seek professional advice specific to your needs before making any decisions based on the content of this website.
                </p>

                <h2>Third-Party Links</h2>
                <p>
                  This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                  In no event shall Algoritt be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of the website or the information contained therein.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Disclaimer, please contact us:
                </p>
                <ul>
                  <li>By email: <a href="mailto:info@algoritt.com" className="text-purple-400 hover:text-purple-300">info@algoritt.com</a></li>
                  <li>By visiting our contact page: <a href="/contact" className="text-purple-400 hover:text-purple-300">https://algoritt.com/contact</a></li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 