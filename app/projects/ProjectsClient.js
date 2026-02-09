'use client';

import { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Get unique values for filters
  const allTechnologies = Array.from(
    new Set(projectsData.flatMap((p) => p.technologies))
  ).sort();
  const allCategories = Array.from(
    new Set(projectsData.map((p) => p.category))
  ).sort();
  const allDifficulties = Array.from(
    new Set(projectsData.map((p) => p.difficulty))
  );

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projectsData;

    // Apply technology filter
    if (activeFilter !== 'all' && allTechnologies.includes(activeFilter)) {
      filtered = filtered.filter((p) => p.technologies.includes(activeFilter));
    }

    // Apply category filter
    if (activeFilter !== 'all' && allCategories.includes(activeFilter)) {
      filtered = filtered.filter((p) => p.category === activeFilter);
    }

    // Apply difficulty filter
    if (activeFilter !== 'all' && allDifficulties.includes(activeFilter)) {
      filtered = filtered.filter((p) => p.difficulty === activeFilter);
    }

    // Apply sorting
    if (sortBy === 'newest') {
      filtered = [...filtered].sort((a, b) => b.id - a.id);
    } else if (sortBy === 'rating') {
      filtered = [...filtered].sort((a, b) =>
        parseFloat(b.stats.rating) - parseFloat(a.stats.rating)
      );
    } else if (sortBy === 'featured') {
      filtered = [...filtered].sort((a, b) => {
        if (a.featured === b.featured) return 0;
        return a.featured ? -1 : 1;
      });
    }

    return filtered;
  }, [activeFilter, sortBy]);

  const handleFilterClick = (filter) => {
    setActiveFilter(activeFilter === filter ? 'all' : filter);
  };

  return (
    <main className="min-h-screen px-6 py-24 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-white">My Projects</h1>
          <p className="text-base text-gray-400 max-w-2xl">
            A collection of my recent work showcasing expertise in full-stack development,
            modern web technologies, and creative problem-solving.
          </p>
        </div>

        {/* Filter & Sort Section */}
        <div className="mb-12 space-y-6">
          {/* Technology Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
              Filter by Technology
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                  activeFilter === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-gray-300 border border-white/10 hover:border-white/20'
                }`}
              >
                All
              </button>
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => handleFilterClick(tech)}
                  className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                    activeFilter === tech
                      ? 'bg-primary text-white'
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:border-white/20'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
              Filter by Category
            </h3>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterClick(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                    activeFilter === category
                      ? 'bg-primary text-white'
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:border-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
              Filter by Difficulty
            </h3>
            <div className="flex flex-wrap gap-2">
              {allDifficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => handleFilterClick(difficulty)}
                  className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                    activeFilter === difficulty
                      ? 'bg-primary text-white'
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:border-white/20'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
              Sort By
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { value: 'newest', label: 'Newest' },
                { value: 'rating', label: 'Highest Rated' },
                { value: 'featured', label: 'Featured First' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSortBy(option.value)}
                  className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                    sortBy === option.value
                      ? 'bg-primary text-white'
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:border-white/20'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-gray-400">
            Showing <span className="text-purple-400 font-semibold">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
          {activeFilter !== 'all' && (
            <button
              onClick={() => setActiveFilter('all')}
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="animate-fadeInUp">
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <svg
                className="w-16 h-16 text-gray-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="text-gray-400 text-lg mb-2">No projects found</p>
              <p className="text-gray-500 text-sm">
                Try adjusting your filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>

        {/* Stats Section */}
        {filteredProjects.length > 0 && (
          <div className="border-t border-white/10 pt-12">
            <h2 className="text-2xl font-semibold mb-8">Project Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-slate-900/40 border border-white/6 rounded-lg p-6 text-center">
                <div className="text-3xl font-semibold text-white mb-2">
                  {filteredProjects.length}
                </div>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>
              <div className="bg-slate-900/40 border border-white/6 rounded-lg p-6 text-center">
                <div className="text-3xl font-semibold text-white mb-2">
                  {Array.from(new Set(filteredProjects.flatMap((p) => p.technologies))).length}
                </div>
                <p className="text-gray-400 text-sm">Technologies</p>
              </div>
              <div className="bg-slate-900/40 border border-white/6 rounded-lg p-6 text-center">
                <div className="text-3xl font-semibold text-white mb-2">
                  {(
                    filteredProjects.reduce((sum, p) => sum + parseFloat(p.stats.rating), 0) /
                    filteredProjects.length
                  ).toFixed(1)}
                </div>
                <p className="text-gray-400 text-sm">Avg Rating</p>
              </div>
              <div className="bg-slate-900/40 border border-white/6 rounded-lg p-6 text-center">
                <div className="text-3xl font-semibold text-white mb-2">
                  {filteredProjects.reduce((sum, p) => sum + parseInt(p.stats.downloads), 0).toLocaleString()}
                </div>
                <p className="text-gray-400 text-sm">Total Downloads</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
