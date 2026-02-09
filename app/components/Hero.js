import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-24 px-6 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT - Content */}
          <div className="space-y-8">
            {/* Tagline */}
            <div className="mt-8">
              <p className="text-purple-400 tracking-wide text-xs font-medium uppercase mb-4">
                WELCOME
              </p>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
                Hi, I'm <span className="text-purple-300">Shahzaib</span>
              </h1>

              <p className="text-2xl md:text-2xl font-medium text-gray-300 mb-6">
                Full Stack Developer
              </p>
            </div>

            {/* Description */}
            <p className="text-base text-gray-400 leading-relaxed max-w-xl">
              I build modern, scalable, and user-focused web applications using the MERN stack
              and Next.js. Passionate about creating digital experiences that are fast, responsive,
              and absolutely delightful.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link
                href="/projects"
                className="group px-6 py-3 rounded-lg bg-primary text-white font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                View Projects
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </Link>

              <a
                href="/resume.pdf"
                download="Shahzaib-Resume.pdf"
                className="group px-6 py-3 rounded-lg border border-white/10 text-white font-medium transition-colors duration-200 hover:bg-white/4 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download CV
              </a>

              <Link
                href="/contact"
                className="group px-6 py-3 rounded-lg border border-purple-500/20 text-purple-300 hover:text-white font-medium transition-colors duration-200 hover:bg-purple-500/6 flex items-center justify-center gap-2"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Get in Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 pt-12 border-t border-white/6">
              <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  10+
                </p>
                <p className="text-gray-400 text-sm mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  1+
                </p>
                <p className="text-gray-400 text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  5+
                </p>
                <p className="text-gray-400 text-sm mt-1">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* RIGHT - Profile Image & Floating Elements */}
          <div className="relative h-[500px] hidden md:flex items-center justify-center">
            {/* Animated background blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>

            {/* Profile Image Container */}
            <div className="relative w-64 h-64 group">
              {/* Glowing border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500 to-blue-500 p-1 group-hover:p-1.5 transition-all duration-300">
                <div className="w-full h-full rounded-3xl bg-gradient-to-b from-[#0b0614] via-[#1a0f2e] to-[#0b0614] overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Shahzaib - Full Stack Developer"
                    width={300}
                    height={300}
                    priority
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -bottom-6 -left-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl animate-bounce" style={{ animationDelay: '0s' }}>
                <p className="text-white font-semibold text-sm">React</p>
                <p className="text-purple-400 text-xs">Frontend</p>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -top-4 -right-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl animate-bounce" style={{ animationDelay: '0.2s' }}>
                <p className="text-white font-semibold text-sm">Node.js</p>
                <p className="text-purple-400 text-xs">Backend</p>
              </div>

              {/* Floating Card 3 */}
              <div className="absolute bottom-12 -right-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl animate-bounce" style={{ animationDelay: '0.4s' }}>
                <p className="text-white font-semibold text-sm">Next.js</p>
                <p className="text-purple-400 text-xs">Full Stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
