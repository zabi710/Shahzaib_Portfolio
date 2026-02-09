import Link from 'next/link';

export default function AboutSection() {
  const skills = [
    {
      title: 'Frontend',
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
      description: 'React, Next.js, TypeScript, Tailwind CSS',
    },
    {
      title: 'Backend',
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
      description: 'Node.js, Express, MongoDB, PostgreSQL',
    },
    {
      title: 'Tools',
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
      description: 'Git, Docker, AWS, Vercel, GitHub',
    },
  ];

  return (
    <section className="py-32 px-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24 max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-400">
            I'm a full-stack developer with expertise in the MERN stack, passionate about
            creating clean, scalable applications that make a real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio Section */}
          <div>
            <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm Shahzaib, a passionate full-stack developer with a strong foundation in the MERN stack.
                I was trained at PNY Trainings and have been building beautiful, functional web applications ever since.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I love transforming complex ideas into intuitive digital experiences. My focus is on writing clean,
                maintainable code while delivering solutions that users genuinely love.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white font-semibold transition-all duration-200 hover:bg-white/5"
            >
              Read Full Story
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

          {/* Skills Grid */}
          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 hover:border-purple-500/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-purple-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    {skill.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-white mb-2">{skill.title}</h4>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <p className="text-sm text-gray-400">Projects</p>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              1+
            </div>
            <p className="text-sm text-gray-400">Years</p>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <p className="text-sm text-gray-400">Clients</p>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              50k+
            </div>
            <p className="text-sm text-gray-400">Lines</p>
          </div>
        </div>
      </div>
    </section>
  );
}
