export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0b0614] px-6 py-24 pt-32 text-white">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>

        <form className="space-y-4">
          <input
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20"
            placeholder="Name"
          />
          <input
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20"
            placeholder="Email"
          />
          <textarea
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20"
            placeholder="Message"
          />

          <button className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
