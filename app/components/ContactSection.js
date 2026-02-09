'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Form submitted:', formData);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      setStatus('error');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-32 px-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24 max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-400">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-8">
            <h3 className="text-2xl font-bold mb-6">Quick Message</h3>

            {status === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-400/50 text-green-300 flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Message sent! I'll be in touch soon.
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-400/50 text-red-300 flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Error sending message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-spin"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 1v6m4-2L13.172 6.172M19 7v6m-2-4l1.414 1.414M19 19h-6m2 2l1.414-1.414M13 17v6m-4-2l1.414 1.414M7 13H1m2 2l-1.414-1.414M7 7v6m-2-4L2.586 7.586"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-between">
            {/* Quick Facts */}
            <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <svg
                    className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">your.email@example.com</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </li>
              </ul>

              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-4">Response time:</p>
                <p className="text-white font-semibold">
                  ⏱️ Usually within 24 hours
                </p>
              </div>
            </div>

            {/* CTA to Full Contact Page */}
            <Link
              href="/contact"
              className="rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 p-8 text-center transition-all duration-200 shadow-lg hover:shadow-purple-500/50"
            >
              <h3 className="text-xl font-bold mb-2">Need More Options?</h3>
              <p className="text-purple-100 mb-4">
                Visit the full contact page for additional ways to connect
              </p>
              <div className="flex items-center justify-center gap-2 text-white font-semibold">
                Go to Contact Page
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
