// import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import SocialSection from "../components/SocialSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-black via-zinc-900 to-neutral-800 text-white">
      {/* <Navbar /> */}
      <Hero />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <SocialSection />
      <Footer />
    </main>
  );
}
