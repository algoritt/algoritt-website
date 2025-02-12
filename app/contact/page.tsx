'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { submitContactForm } from '@/actions/forms';
import type { ContactFormData } from '@/types/forms';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    full_name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string | null;
  }>({ type: null, message: null });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: null });

    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message. We will get back to you soon!'
        });
        setFormData({ full_name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-900 font-worksans">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center pt-24">
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
              Get in <span className="text-purple-500">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Let&apos;s discuss how we can help transform your business with our expert solutions and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                  Ready to take the next step? Reach out to us through any of these channels or fill out the form.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 text-gray-300 hover:text-purple-500 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <div className="flex flex-col">
                    <a href="mailto:info@algoritt.com" className="hover:text-purple-500">info@algoritt.com</a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 text-gray-300 hover:text-purple-500 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  <div className="flex flex-col">
                    <a href="tel:+12122207213">+1-212-220-7213</a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 text-gray-300"
                >
                  <MapPin className="w-6 h-6 mt-1" />
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-white mb-1">USA Address</h3>
                      <p>One World Trade Center, Suite 8500, New York, NY, 10007, United States</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">India Address</h3>
                      <p>MM Towers, Plot No. 8 & 9, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana, India</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex items-center px-8 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
                  disabled={isSubmitting}
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </motion.button>
              </form>

              {submitStatus.message && (
                <div className={`mt-4 p-4 rounded ${
                  submitStatus.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                }`}>
                  {submitStatus.message}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
