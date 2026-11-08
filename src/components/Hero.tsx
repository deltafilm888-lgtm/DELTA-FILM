import React from 'react';
import { editEnquiryLinks } from '../data/editEnquiries';

const enquiry = editEnquiryLinks();

interface HeroProps {
  onOpenFeaturedProject?: () => void;
  onScrollToWork?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenFeaturedProject, onScrollToWork }) => {
  return (
    <section className="relative w-full border-b border-[#1A1A1A] bg-[#F9F9F7] overflow-hidden">
      {/* Centered Large Bold Title Section */}
      <div id="book-an-edit" className="scroll-mt-20 max-w-[1720px] mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-8 sm:pb-10 text-center border-b border-[#1A1A1A]/10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight uppercase text-[#1A1A1A] leading-[0.95]">
          <span className="sr-only">Artem Sambura (Tom) — DELTA FILM: </span>
          DIRECTOR / PRODUCER
        </h1>
        <p className="text-[12px] sm:text-[14px] uppercase tracking-[0.25em] text-[#666666] mt-4 font-mono-spec">
          MUSIC VIDEOS · COMMERCIALS · ENTERTAINMENT
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a href={enquiry.email} className="inline-flex min-h-11 items-center justify-center border border-[#1A1A1A] bg-[#1A1A1A] px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-[#F9F9F7] hover:bg-transparent hover:text-[#1A1A1A] focus-visible:outline-2 focus-visible:outline-offset-4">
            Get an edit quote
          </a>
          <a href={enquiry.whatsapp} className="inline-flex min-h-11 items-center px-1 text-[12px] text-[#444444] underline decoration-[#888888] underline-offset-4 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4" aria-label="Request an edit quote on WhatsApp">
            WhatsApp
          </a>
        </div>
      </div>

      {/* Main Hero Visual Section */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Cinematic Visual (Left 8 Cols) */}
          <div className="lg:col-span-8 flex flex-col space-y-3">
            <div 
              className="relative w-full aspect-video bg-black group overflow-hidden cursor-pointer border border-[#1A1A1A]/10"
              onClick={onOpenFeaturedProject}
            >
              {/* Background Cinematic Visual / Video Loop */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-[1.02]"
                poster="https://i.ytimg.com/vi/IINnt0YfCuQ/maxresdefault.jpg"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-man-in-a-darkened-room-41972-large.mp4" type="video/mp4" />
              </video>

              {/* Viewfinder Border */}
              <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>

              {/* Featured Project Label */}
              <div className="absolute bottom-6 left-6 text-white text-left select-none">
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-mono-spec bg-black/75 backdrop-blur-xs px-3 py-1.5 border border-white/20 text-white font-medium">
                  FEATURED WORK
                </div>
              </div>

              {/* Hover Badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#F9F9F7] text-[#1A1A1A] text-[9px] uppercase tracking-widest px-3 py-1.5 font-bold">
                VIEW PROJECT
              </div>
            </div>

            {/* Clean minimalist caption */}
            <div className="flex items-center justify-end text-[11px] tracking-wider uppercase text-[#888888] font-mono-spec">
              <span>CREATIVE DIRECTOR & PRODUCER</span>
            </div>
          </div>

          {/* Right Column: Statement & Direct Actions */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-1 lg:pt-2 space-y-8">
            <div className="space-y-6">
              
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#444444]">
                  I’m Artem Sambura (Tom), director and editor at DELTA FILM. I cut music videos and brand films, handle the grade and sound design, and deliver social versions from the same footage. My work includes campaigns for MTS and Sberbank.
                </p>
              </div>

              <div className="pt-2 border-t border-[#1A1A1A]/10">
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A] mb-1">
                  DIRECT CONTACT
                </div>
                <a
                  href="mailto:hello@delta-film.com"
                  className="text-[12px] text-[#555555] hover:text-[#1A1A1A] transition-colors block font-mono-spec"
                >
                  hello@delta-film.com
                </a>
              </div>

            </div>

            {/* Quick Action Button */}
            <div className="pt-6 border-t border-[#1A1A1A]/10">
              <a
                href="#selected-work"
                onClick={onScrollToWork}
                className="w-full py-3.5 border border-[#1A1A1A] bg-[#1A1A1A] text-[#F9F9F7] hover:bg-transparent hover:text-[#1A1A1A] text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-150 cursor-pointer flex items-center justify-between px-4"
              >
                <span>SELECTED WORKS</span>
                <span className="text-[10px]">↓</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
