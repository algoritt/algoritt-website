import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Algoritt',
  description: 'Get in touch with us for any inquiries or collaboration opportunities.',
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900 text-white">
      <section className="relative w-full pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-0 sm:px-6 lg:px-8">
          <div className="max-w-full mx-auto">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-12">
              Have a question or want to work with us? Get in touch!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Contact Information</h2>
                <div className="space-y-2">
                  <p><strong>USA Address:</strong> One World Trade Center, Suite 8500, New York, NY, 10007, United States</p>
                  <p><strong>India Address:</strong> MM Towers, Plot No. 8 & 9, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana, India</p>
                  <p><strong>Email:</strong> info@algoritt.com, admin@algoritt.com</p>
                  <p><strong>Contact:</strong> +1-212-220-7213, +1-551-399-8572</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
