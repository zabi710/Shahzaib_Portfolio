'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '../../data/projects';

export default function ProjectDetailPage({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Get related projects (same or similar technologies)
  const relatedProjects = projectsData
    .filter(
      (p) =>
        p.id !== project.id &&
        p.technologies.some((tech) => project.technologies.includes(tech))
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0614] via-[#1a0f2e] to-[#0b0614] text-white">
      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-8 pt-32">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>
      </div>

      {/* Project Hero Section */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="rounded-2xl overflow-hidden h-96 md:h-[500px] bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 mb-8">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-24 h-24 mx-auto mb-4 opacity-30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="m4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-500">No image available</p>
              </div>
            </div>
          )}
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 mb-6">{project.description}</p>

          {/* Project Timeline */}
          <div className="flex items-center gap-3 text-gray-400 mb-8">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{project.timeline}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-purple-500/50"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                View Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white font-semibold transition-all duration-200 hover:bg-white/5"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Content */}
          <div className="md:col-span-2">
            {/* About Project */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">About This Project</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                {project.longDescription}
              </p>
            </section>

            {/* Key Features */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-gray-400 group"
                  >
                    <svg
                      className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div>
            {/* Technologies Card */}
            <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details Card */}
            <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">
                    Timeline
                  </p>
                  <p className="text-white mt-1">{project.timeline}</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">
                    Category
                  </p>
                  <p className="text-white mt-1">Web Application</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">
                    Status
                  </p>
                  <p className="text-white mt-1">
                    <span className="inline-block px-2 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm">
                      Live
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Share Card */}
            <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6">
              <h3 className="text-lg font-bold mb-4">Share Project</h3>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/20 hover:border-white/40 text-white transition-colors text-sm font-medium">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                  </svg>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/20 hover:border-white/40 text-white transition-colors text-sm font-medium">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 9h-1.5v6H18a3 3 0 003-3v-0a3 3 0 00-3-3z" />
                    <path d="M9 9H7.5A1.5 1.5 0 006 10.5v3A1.5 1.5 0 007.5 15H9" />
                    <circle cx="9" cy="15" r="6" />
                    <circle cx="18" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="mt-20 pt-12 border-t border-white/10">
            <h2 className="text-3xl font-bold mb-8">Related Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((relProject) => (
                <Link
                  key={relProject.id}
                  href={`/projects/${relProject.slug}`}
                  className="group rounded-lg overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className="relative h-40 bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <svg
                        className="w-12 h-12 opacity-20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="m4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white group-hover:text-purple-400 transition-colors">
                      {relProject.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                      {relProject.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to Projects Link */}
        <div className="mt-20 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/20 hover:border-white/40 text-white font-semibold transition-all duration-200 hover:bg-white/10"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
