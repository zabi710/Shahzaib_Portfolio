import Link from 'next/link';

export default function About() {
  const skills = [
    {
      category: 'Frontend Development',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML5', 'CSS3'],
    },
    {
      category: 'Backend Development',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 002 2h10a2 2 0 002-2m-7 4h2m-6 4h12a2 2 0 002-2v-4a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2z"
          />
        </svg>
      ),
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL', 'Firebase'],
    },
    {
      category: 'Tools & Technologies',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'VS Code', 'Postman', 'GitHub'],
    },
  ];

  const experience = [
    {
      year: '2024 - Present',
      title: 'Full Stack Developer',
      company: 'Freelance',
      description: 'Building full-stack web applications with Next.js, React, and Node.js for various clients.',
    },
    {
      year: '2023 - 2024',
      title: 'MERN Stack Training',
      company: 'PNY Trainings',
      description: 'Completed comprehensive MERN stack training covering frontend, backend, and database technologies.',
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Years Experience', value: '1+' },
    { label: 'Happy Clients', value: '5+' },
    { label: 'Lines of Code', value: '50k+' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0614] via-[#1a0f2e] to-[#0b0614] text-white">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 py-24 pt-32">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            I'm a passionate full-stack developer committed to creating beautiful, 
            functional, and user-centered web applications.
          </p>
        </div>

        {/* Main Bio Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="md:col-span-2">
            <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm Shahzaib, a passionate full-stack developer with expertise in the MERN stack
                (MongoDB, Express, React, Node.js). I was trained at PNY Trainings and have been
                building clean, scalable web applications ever since.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm dedicated to transforming complex ideas into simple, intuitive digital experiences.
                My approach combines technical excellence with user-centric design principles to create
                applications that not only work flawlessly but also delight users.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source,
                or enjoying the creative process of solving challenging problems.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links Card */}
          <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-8 h-fit">
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <nav className="space-y-3">
              <Link
                href="/projects"
                className="flex items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group"
              >
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                View My Projects
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Get in Touch
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group"
              >
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
                    d="M3 12l2-3m0 0l7-4 7 4M5 5v14a1 1 0 001 1h12a1 1 0 001-1V5M9 12l3 3m0 0l3-3m-3 3V7"
                  />
                </svg>
                Back to Home
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">My Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-8 hover:border-purple-500/50 transition-colors"
            >
              <div className="text-purple-400 mb-4">{skillGroup.icon}</div>
              <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-8 relative"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-purple-400" />
                    <p className="text-purple-400 font-semibold">{exp.year}</p>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-lg text-gray-300 mb-3">{exp.company}</p>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-purple-500/50"
        >
          Get In Touch
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
        </Link>
      </div>
    </main>
  );
}
