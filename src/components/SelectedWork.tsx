import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight, Play, Eye } from 'lucide-react';

interface SelectedWorkProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ projects, onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories = ['ALL', 'MUSIC', 'SHOW', 'COMMERCIAL'];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="selected-work" className="w-full bg-[#F9F9F7] py-12 sm:py-20 border-b border-[#1A1A1A]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-3 mb-8 sm:mb-12 border-b border-[#1A1A1A] gap-4">
          <div className="flex items-baseline gap-4">
            <h2 className="text-[11px] sm:text-[13px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]">
              SELECTED WORKS
            </h2>
          </div>

          {/* Minimalist Filter Navigation */}
          <div className="flex items-center gap-2 sm:gap-4 text-[10px] uppercase tracking-widest text-[#888888] overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`cursor-pointer transition-colors whitespace-nowrap px-2.5 py-1 ${
                  activeFilter === cat
                    ? 'text-[#1A1A1A] font-bold border-b border-[#1A1A1A]'
                    : 'hover:text-[#1A1A1A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Aligned 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-12 sm:gap-y-16">
          {filteredProjects.map((project, idx) => {
            return (
              <div
                key={project.id}
                className="group cursor-pointer space-y-3"
                onClick={() => onSelectProject(project)}
              >
                {/* Visual Frame in strict 16:9 Aspect Ratio */}
                <div className="relative aspect-video bg-[#EAEAEA] border border-[#1A1A1A]/10 overflow-hidden">
                  <img
                    src={project.stillUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100 transition-all duration-500 ease-out origin-center ${
                      project.id === 'alyona-alyona-pushka'
                        ? 'scale-[1.34] group-hover:scale-[1.38]'
                        : 'group-hover:scale-[1.03]'
                    }`}
                    loading="lazy"
                  />

                  {/* Top-left Index Slate */}
                  <div className="absolute top-3 left-3 text-[9px] uppercase tracking-widest font-mono-spec text-white/90 bg-black/75 px-2 py-0.5 border border-white/10 flex items-center gap-1.5">
                    <span>0{idx + 1} / {project.category}</span>
                  </div>

                  {/* Subtle Viewfinder Play on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-black/25">
                    <div className="w-11 h-11 bg-[#F9F9F7] text-[#1A1A1A] flex items-center justify-center font-bold text-[10px] tracking-widest shadow-md">
                      <Play className="w-4 h-4 fill-[#1A1A1A] ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Minimalist Project Info */}
                <div className="space-y-1 pt-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <div className="text-[11px] sm:text-[13px] tracking-wider uppercase font-bold text-[#1A1A1A] group-hover:text-black">
                      {project.title}
                    </div>
                    <div className="text-[10px] tracking-widest text-[#888888] font-mono-spec flex items-center gap-1 group-hover:text-[#1A1A1A] transition-colors whitespace-nowrap">
                      <span>VIEW</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-[10px] text-[#888888] font-mono-spec">
                    <span>{project.role}</span>
                    {project.highlightBadge && (
                      <span className="text-[#1A1A1A] font-bold text-[9px] uppercase tracking-wider bg-black/5 px-1.5 py-0.5 border border-black/10">
                        {project.highlightBadge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
