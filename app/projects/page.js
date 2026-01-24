const projects = [
  {
    title: "Productivity Tracker",
    desc: "A MERN app for managing daily tasks and productivity.",
    tech: "MongoDB • Express • React • Node",
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio built with Next.js and Tailwind.",
    tech: "Next.js • Tailwind",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#0b0614] px-6 py-24 pt-32 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">My Projects</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500 transition"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-400 mt-2">{p.desc}</p>
              <p className="text-purple-400 text-sm mt-4">{p.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
