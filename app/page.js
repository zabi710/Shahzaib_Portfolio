import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import SocialSection from "./components/SocialSection";
import Footer from "./components/Footer";

export const metadata = {
  title: "Shahzaib - Full Stack Developer | Home",
  description: "Welcome to my portfolio. Explore my projects and expertise in MERN Stack and Next.js development.",
};

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-[#0b0614] via-[#1a0f2e] to-[#0b0614] text-white relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <SocialSection />
        <Footer />
      </div>
    </main>
  );
}
 







