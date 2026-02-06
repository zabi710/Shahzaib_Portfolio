import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
      {/* LEFT */}
      <div>
        <p className="text-purple-400 tracking-widest mb-3">
          WELCOME TO MY WORLD ✨
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Hi, I’m <span className="text-purple-400">Shahzaib</span>
          <br />
          Full Stack Developer
        </h1>

        <p className="mt-6 text-gray-300 max-w-xl">
          I build modern, scalable, and user-focused web applications using MERN
          Stack and Next.js.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white"
          >
            View Projects
          </Link>

          <button className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
            Download CV
          </button>
        </div>
      </div>

      {/* RIGHT - Profile Image */}
      <div className="relative">
        <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src="/profile.jpg"
            alt="Shahzaib - Full Stack Developer"
            width={500}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient overlay effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/20 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
