import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Algoritt',
  description: 'Get in touch with us for any inquiries or collaboration opportunities.',
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative w-full pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Have a question or want to work with us? Get in touch!
            </p>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
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
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
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
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
