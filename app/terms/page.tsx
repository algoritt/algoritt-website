'use client'

import { motion } from 'framer-motion'

export default function TermsAndConditions() {
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
              Terms and Conditions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-work max-w-2xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our services.
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
              <h2>Interpretation and Definitions</h2>
              <h3>Interpretation</h3>
              <p>
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>

              <h3>Definitions</h3>
              <p>For the purposes of these Terms and Conditions:</p>
              <ul>
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &ldquo;control&rdquo; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong>Country</strong> refers to: New York, United States</li>
                <li><strong>Company</strong> (referred to as either &ldquo;the Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo; in this Agreement) refers to Finresourcing LLC (DBA Algoritt Consulting), One World Trade Center, Suite 8500, New York, NY, 10007, United States.</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Terms and Conditions</strong> (also referred as &ldquo;Terms&rdquo;) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
                <li><strong>Website</strong> refers to Algoritt, accessible from https://algoritt.com/</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>

              <h2>Acknowledgement</h2>
              <p>
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              </p>
              <p>
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
              </p>
              <p>
                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
              </p>
              <p>
                You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
              </p>

              <h2>Links to Other Websites</h2>
              <p>
                Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. The Company has no control over and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
              </p>

              <h2>Termination</h2>
              <p>
                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven&apos;t purchased anything through the Service.
              </p>

              <h2>Governing Law</h2>
              <p>
                The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms and Conditions, You can contact us:
              </p>
              <ul>
                <li>By email: <a href="mailto:info@algoritt.com" className="text-purple-400 hover:text-purple-300">info@algoritt.com</a></li>
                <li>By visiting our contact page: <a href="/contact" className="text-purple-400 hover:text-purple-300">https://algoritt.com/contact</a></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 