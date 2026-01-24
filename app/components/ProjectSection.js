export default function ProjectsSection() {
  return (
    <section className="py-24 min-h-screen px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
              <p className="text-gray-400">
                MERN stack project with authentication, APIs, and clean UI.
              </p>
            </div>
          ))}
        </div>

        <a
          href="/projects"
          className="inline-block mt-10 text-purple-400 hover:underline"
        >
          View all projects →
        </a>
      </div>
    </section>
  );
}
