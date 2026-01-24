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
          <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
            Download CV
          </button>
        </div>
      </div>

      {/* RIGHT (Visual Placeholder) */}
      <div className="relative">
        <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-xl border border-white/10 flex items-center justify-center">
          <span className="text-white/60">3D Avatar / Illustration</span>
        </div>
      </div>
    </section>
  );
}
