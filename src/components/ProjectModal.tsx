import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  projects: Project[];
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  projects,
  onClose,
  onSelectProject,
}) => {
  const [selectedImgIndex, setSelectedImgIndex] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, projects]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      setSelectedImgIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + projects.length) % projects.length;
    onSelectProject(projects[nextIdx]);
    setSelectedImgIndex(0);
  };
  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % projects.length;
    onSelectProject(projects[nextIdx]);
    setSelectedImgIndex(0);
  };

  const galleryImages = project.stills && project.stills.length > 0
    ? project.stills
    : [project.stillUrl];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#090909]/92 backdrop-blur-sm text-[#F9F9F7] p-2 sm:p-6 overflow-y-auto">
        
        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 8 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1560px] bg-[#111111] border border-white/10 my-auto flex flex-col max-h-[96vh] overflow-hidden"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 text-[11px] uppercase tracking-widest text-[#888888] bg-[#141414]">
            <div className="flex items-center gap-4">
              <span className="text-white font-bold tracking-[0.2em]">DELTA FILM</span>
              <span>/</span>
              <span className="text-white">PROJECT #{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="hidden sm:inline text-[#888888]">/ {project.category}</span>
            </div>

            {/* Navigation & Close */}
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="p-1 hover:text-white text-[#888888] cursor-pointer transition-colors"
                  title="Previous (Left Arrow)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[10px] text-[#888888] px-1 font-mono-spec">
                  {currentIndex + 1} / {projects.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-1 hover:text-white text-[#888888] cursor-pointer transition-colors"
                  title="Next (Right Arrow)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="h-3 w-px bg-white/20"></div>

              <button
                onClick={onClose}
                className="flex items-center gap-1.5 text-white hover:text-neutral-400 cursor-pointer transition-colors font-bold text-[10px] tracking-widest"
              >
                <span>CLOSE</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Main Single Page Content Area */}
          <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left 8 Cols: YouTube Video + Image Stills on ONE unified page */}
            <div className="lg:col-span-8 bg-[#090909] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col p-4 sm:p-6 space-y-6">
              
              {/* 1. Main YouTube Player */}
              <div className="relative aspect-video w-full bg-black border border-white/10 overflow-hidden shadow-2xl">
                {project.youtubeId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0`}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <img
                    src={project.stillUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              {/* 2. Gallery / Stills under the video */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#888888]">
                  <span>STILLS & VISUALS</span>
                  <span className="font-mono-spec">0{selectedImgIndex + 1} / 0{galleryImages.length}</span>
                </div>

                {/* Main Selected Still */}
                <div className="relative aspect-video w-full bg-black border border-white/10 overflow-hidden">
                  <img
                    src={galleryImages[selectedImgIndex]}
                    alt={`${project.title} still ${selectedImgIndex + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Thumbnails row if more than 1 */}
                {galleryImages.length > 1 && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 pt-1">
                    {galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImgIndex(idx)}
                        className={`relative aspect-video border overflow-hidden cursor-pointer transition-all ${
                          selectedImgIndex === idx
                            ? 'border-white opacity-100 ring-1 ring-white'
                            : 'border-white/20 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt="thumbnail"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Right 4 Cols: Clean Direct Metadata */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-8 bg-[#111111] overflow-y-auto">
              <div className="space-y-6">
                
                {/* Title & Role */}
                <div className="border-b border-white/10 pb-5">
                  <div className="text-[10px] uppercase tracking-widest text-[#888888] mb-1 font-mono-spec">
                    {project.category}
                  </div>
                  <h2 className="text-[22px] sm:text-[26px] font-medium tracking-tight text-white leading-tight mb-2">
                    {project.title}
                  </h2>
                  <p className="text-[13px] text-neutral-300">
                    {project.role}
                  </p>
                  {project.client && (
                    <p className="text-[11px] text-[#888888] mt-2 uppercase tracking-widest">
                      CLIENT: {project.client}
                    </p>
                  )}
                </div>

                {/* Synopsis / Director Note */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#888888] block">
                    PROJECT NOTE
                  </span>
                  <p className="text-[13px] leading-relaxed text-neutral-300">
                    {project.synopsis}
                  </p>
                </div>

                {/* Technical Specifications (Only Camera / Core Gear) */}
                {project.specs && project.specs.camera && (
                  <div className="border-t border-white/10 pt-5 space-y-3 text-[10px] uppercase tracking-widest">
                    <span className="text-[10px] text-[#888888] block mb-2">
                      CAMERA SYSTEM
                    </span>
                    <div className="text-neutral-200 font-mono-spec">
                      {project.specs.camera}
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
