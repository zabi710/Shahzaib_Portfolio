export default function Social() {
  return (
    <main className="min-h-screen bg-[#0b0614] px-6 py-24 text-white">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Find Me Online</h1>

        <div className="space-y-4">
          <a
            className="block p-4 rounded-xl bg-white/5 hover:bg-white/10"
            href="#"
          >
            GitHub
          </a>
          <a
            className="block p-4 rounded-xl bg-white/5 hover:bg-white/10"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="block p-4 rounded-xl bg-white/5 hover:bg-white/10"
            href="#"
          >
            Email
          </a>
        </div>
      </div>
    </main>
  );
}
