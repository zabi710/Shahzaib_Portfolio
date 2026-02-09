import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projectsData, getFeaturedProjects } from "../data/projects";

export default function ProjectsSection() {
  // Get featured projects using helper function
  const featuredProjects = getFeaturedProjects();

  // Get all unique technologies
  const allTechs = Array.from(new Set(projectsData.flatMap((p) => p.technologies))).slice(0, 6);

  return (
    <section className="py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-purple-400 text-xs  uppercase tracking-wide font-medium mb-3">MY WORK</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-white">Featured Projects</h2>
          <p className="text-base text-gray-400 max-w-2xl">
            Explore a selection of recent projects that demonstrate clean architecture, performance, and attention to detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div key={project.id} className="animate-fadeInUp">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Tech Stack Preview */}
        <div className="mb-8 p-6 rounded-2xl bg-slate-900/40 border border-white/6">
          <h3 className="text-base font-semibold text-white mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {allTechs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-white/4 border border-white/8 text-sm text-gray-200 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* View All Projects Link */}
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium transition-colors duration-150"
          >
            Explore All {projectsData.length} Projects
            <svg
              className="w-5 h-5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
