import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS } from './data/projects';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleScrollToWork = () => {
    const el = document.getElementById('selected-work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenFeaturedProject = () => {
    setSelectedProject(PROJECTS[0]);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#1A1A1A] flex flex-col selection:bg-[#1A1A1A] selection:text-[#F9F9F7]">
      {/* 35mm Subtle Ambient Film Grain */}
      <div className="fixed inset-0 pointer-events-none film-grain opacity-25 z-30"></div>

      {/* 1. HEADER */}
      <Header
        onScrollToWork={handleScrollToWork}
        onScrollToContact={handleScrollToContact}
      />

      <main className="flex-1 w-full">
        {/* 2. HERO */}
        <Hero
          onOpenFeaturedProject={handleOpenFeaturedProject}
          onScrollToWork={handleScrollToWork}
        />

        {/* 3. SELECTED WORK */}
        <SelectedWork
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 4. CONTACT */}
        <Contact />
      </main>

      {/* 5. FOOTER */}
      <Footer />

      {/* LIGHTWEIGHT MODAL VIEWER */}
      <ProjectModal
        project={selectedProject}
        projects={PROJECTS}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />
    </div>
  );
}
