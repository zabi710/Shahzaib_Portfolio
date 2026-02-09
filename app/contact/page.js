'use client';

import { useState } from 'react';

export const metadata = {
  title: 'Contact Shahzaib - Full Stack Developer',
  description: 'Get in touch with me for projects, collaborations, or inquiries. I respond within 24 hours.',
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setStatus('');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});

      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      setStatus('error');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.428-.659 1.19-1.599 2.894-1.599 2.114 0 3.696 1.382 3.696 4.352v5.6zM5.337 9.432c-1.144 0-1.915-.761-1.915-1.712 0-.951.77-1.712 1.954-1.712 1.184 0 1.915.761 1.915 1.712 0 .951-.73 1.712-1.954 1.712zm1.581 11.02H3.656V8.704h3.262v11.748zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" /></svg>,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0614] via-[#1a0f2e] to-[#0b0614] px-6 py-24 pt-32 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-400">
            Have a project or question? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="group rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-white mb-1">{method.label}</h3>
                  <p className="text-gray-400 text-sm group-hover:text-purple-300 transition-colors">
                    {method.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Main Contact Form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-8">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-400/50 text-green-300 flex items-center gap-2 animate-slideInDown">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Message sent successfully! I'll be in touch soon.
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-400/50 text-red-300 flex items-center gap-2 animate-slideInDown">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Error sending message. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name {!formData.name && <span className="text-red-400">*</span>}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border transition-all ${
                      errors.name
                        ? 'border-red-400/50 focus:ring-red-500/20'
                        : 'border-white/20 focus:border-purple-500/50 focus:ring-purple-500/20'
                    } focus:outline-none focus:ring-2 text-white placeholder-gray-500`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email {!formData.email && <span className="text-red-400">*</span>}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border transition-all ${
                      errors.email
                        ? 'border-red-400/50 focus:ring-red-500/20'
                        : 'border-white/20 focus:border-purple-500/50 focus:ring-purple-500/20'
                    } focus:outline-none focus:ring-2 text-white placeholder-gray-500`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject {!formData.subject && <span className="text-red-400">*</span>}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border transition-all ${
                      errors.subject
                        ? 'border-red-400/50 focus:ring-red-500/20'
                        : 'border-white/20 focus:border-purple-500/50 focus:ring-purple-500/20'
                    } focus:outline-none focus:ring-2 text-white placeholder-gray-500`}
                    placeholder="What is this about?"
                  />
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message {!formData.message && <span className="text-red-400">*</span>}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border transition-all ${
                      errors.message
                        ? 'border-red-400/50 focus:ring-red-500/20'
                        : 'border-white/20 focus:border-purple-500/50 focus:ring-purple-500/20'
                    } focus:outline-none focus:ring-2 text-white placeholder-gray-500 resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v6m4-2L13.172 6.172M19 7v6m-2-4l1.414 1.414M19 19h-6m2 2l1.414-1.414M13 17v6m-4-2l1.414 1.414M7 13H1m2 2l-1.414-1.414M7 7v6m-2-4L2.586 7.586" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-between">
            {/* Quick Info */}
            <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Why Reach Out?</h3>
              <ul className="space-y-4">
                {[
                  'Interested in project collaboration',
                  'Want to discuss web development',
                  'Have general inquiry or feedback',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-8">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 text-white"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            ⏱️ I typically respond to inquiries within{' '}
            <span className="text-purple-400 font-semibold">24 hours</span>
          </p>
        </div>
      </div>
    </main>
  );
}
