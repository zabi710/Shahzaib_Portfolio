import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Navigation: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Contact', href: '/contact' },
    ],
    Resources: [
      { label: 'Blog', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'GitHub Repos', href: 'https://github.com' },
      { label: 'Resume', href: '/resume.pdf' },
    ],
    Connect: [
      { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
      { label: 'GitHub', href: 'https://github.com', external: true },
      { label: 'Twitter', href: 'https://twitter.com', external: true },
      { label: 'Instagram', href: 'https://instagram.com', external: true },
    ],
  };

  const socialIcons = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.428-.659 1.19-1.599 2.894-1.599 2.114 0 3.696 1.382 3.696 4.352v5.6zM5.337 9.432c-1.144 0-1.915-.761-1.915-1.712 0-.951.77-1.712 1.954-1.712 1.184 0 1.915.761 1.915 1.712 0 .951-.73 1.712-1.954 1.712zm1.581 11.02H3.656V8.704h3.262v11.748zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0b0614] via-[#0a0510] to-black">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-24 border-t border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Section */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
              Shahzaib
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Full-stack developer creating beautiful and functional web experiences with modern technologies.
            </p>
            <p className="text-gray-500 text-xs">
              © {currentYear} Shahzaib. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {link.label}
                        <svg
                          className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          {/* Social Links */}
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50 flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-200 group hover:bg-white/10"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Bottom Text */}
            <div className="text-gray-500 text-sm text-center sm:text-right">
              <p>
                Designed & Built with{' '}
                <span className="text-red-500">♥</span> using Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/50">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4\">
          <p>
            Made by <span className="text-purple-400 font-semibold">Shahzaib</span>
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            <sup>•</sup>
            <Link href="#" className="hover:text-purple-400 transition-colors">
              Terms of Service
            </Link>
            <sup>•</sup>
            <Link href="/sitemap.xml" className="hover:text-purple-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
