export default function About() {
  return (
    <main className="min-h-screen bg-[#0b0614] text-white px-6 py-24 pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        <p className="text-gray-300 leading-relaxed">
          I'm Shahzaib, a MERN Stack Developer trained at PNY Trainings,
          passionate about building clean and scalable applications. I enjoy
          transforming ideas into digital experiences that are fast, responsive,
          and user-friendly.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2">Frontend</h3>
            <p className="text-gray-400">React, Next.js, Tailwind CSS</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2">Backend</h3>
            <p className="text-gray-400">Node.js, Express, MongoDB</p>
          </div>
        </div>
      </div>
    </main>
  );
}
