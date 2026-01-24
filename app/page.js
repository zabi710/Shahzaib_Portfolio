import Hero from "../app/components/Hero";
import AboutSection from "../app/components/AboutSection";
import ProjectsSection from "../app/components/ProjectSection";
import ContactSection from "../app/components/ContactSection";
import SocialSection from "../app/components/SocialSection";
// import Footer from "../app/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-black via-zinc-900 to-neutral-800 text-white">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <SocialSection />
      {/* <Footer /> */}
    </main>
  );
}
 







