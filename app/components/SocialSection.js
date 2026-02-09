export default function SocialSection() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.428-.659 1.19-1.599 2.894-1.599 2.114 0 3.696 1.382 3.696 4.352v5.6zM5.337 9.432c-1.144 0-1.915-.761-1.915-1.712 0-.951.77-1.712 1.954-1.712 1.184 0 1.915.761 1.915 1.712 0 .951-.73 1.712-1.954 1.712zm1.581 11.02H3.656V8.704h3.262v11.748zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: 'from-gray-700 to-gray-800',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
        </svg>
      ),
      color: 'from-sky-400 to-sky-500',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
        </svg>
      ),
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section className="py-32 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-purple-400 text-sm uppercase tracking-widest font-semibold mb-2">
            Connect With Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Stay Connected
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Follow me on social media for updates, insights, and behind-the-scenes looks at my projects.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative px-6 py-3 rounded-lg bg-gradient-to-r ${social.color} text-white font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 flex items-center gap-2`}
              title={`Follow on ${social.name}`}
            >
              {social.icon}
              <span className="hidden sm:inline">{social.name}</span>
              <span className="absolute -inset-1.5 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-lg group-hover:-z-10 transition duration-300"></span>
            </a>
          ))}
        </div>

        {/* Alternative minimal layout */}
        <div className="mt-20 pt-20 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${social.color} text-white group-hover:scale-110 transition-transform`}>
                  {social.icon}
                </div>
                <span className="text-sm font-semibold text-white text-center">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
