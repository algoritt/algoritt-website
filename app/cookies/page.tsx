'use client'

import { motion } from 'framer-motion'

export default function CookiesPolicy() {
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
              Cookie Policy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-work max-w-2xl mx-auto leading-relaxed">
              Learn about how we use cookies to enhance your browsing experience.
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
              prose-h4:text-lg prose-h4:sm:text-xl prose-h4:font-medium prose-h4:text-gray-100
              prose-p:font-work prose-p:text-gray-300 prose-p:leading-relaxed
              prose-li:font-work prose-li:text-gray-300
              prose-strong:text-purple-400
              prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300"
          >
            <div className="space-y-8">
              <p>
                This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.
              </p>
              <p>
                Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.
              </p>
              <p>
                We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.
              </p>

              <h2>Interpretation and Definitions</h2>
              <h3>Interpretation</h3>
              <p>
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>

              <h3>Definitions</h3>
              <p>For the purposes of this Cookies Policy:</p>
              <ul>
                <li><strong>Company</strong> (referred to as either &ldquo;the Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo; in this Cookies Policy) refers to Finresourcing LLC (DBA Algoritt Consulting), One World Trade Center, Suite 8500, New York, NY, 10007, United States.</li>
                <li><strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</li>
                <li><strong>Website</strong> refers to Algoritt, accessible from https://algoritt.com/</li>
                <li><strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</li>
              </ul>

              <h2>The use of the Cookies</h2>
              <h3>Type of Cookies We Use</h3>
              <p>
                Cookies can be &ldquo;Persistent&rdquo; or &ldquo;Session&rdquo; Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
              </p>
              <p>
                We use both session and persistent Cookies for the purposes set out below:
              </p>

              <h4>Necessary / Essential Cookies</h4>
              <ul>
                <li><strong>Type:</strong> Session Cookies</li>
                <li><strong>Administered by:</strong> Us</li>
                <li><strong>Purpose:</strong> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</li>
              </ul>

              <h4>Functionality Cookies</h4>
              <ul>
                <li><strong>Type:</strong> Persistent Cookies</li>
                <li><strong>Administered by:</strong> Us</li>
                <li><strong>Purpose:</strong> These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</li>
              </ul>

              <h2>Your Choices Regarding Cookies</h2>
              <p>
                If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.
              </p>
              <p>
                If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.
              </p>
              <p>
                If you&apos;d like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser:
              </p>
              <ul>
                <li><a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Chrome</a></li>
                <li><a href="http://support.microsoft.com/kb/278835" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Internet Explorer</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Safari</a></li>
              </ul>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Cookies Policy, You can contact us:
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