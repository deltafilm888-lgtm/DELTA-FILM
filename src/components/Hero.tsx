import React from 'react';

interface HeroProps {
  onOpenFeaturedProject?: () => void;
  onScrollToWork?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenFeaturedProject, onScrollToWork }) => {
  return (
    <section className="relative w-full border-b border-[#1A1A1A] bg-[#F9F9F7] overflow-hidden">
      {/* Centered Large Bold Title Section */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-8 sm:pb-10 text-center border-b border-[#1A1A1A]/10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight uppercase text-[#1A1A1A] leading-[0.95]">
          DIRECTOR / PRODUCER
        </h1>
        <p className="text-[12px] sm:text-[14px] uppercase tracking-[0.25em] text-[#666666] mt-4 font-mono-spec">
          MUSIC VIDEOS · COMMERCIALS · ENTERTAINMENT
        </p>
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
                  Artem Sambura is a director and creative producer behind landmark music videos, visual identities for major entertainment formats, and commercial films for major tech and telecom enterprises.
                </p>
              </div>

              <div className="pt-2 border-t border-[#1A1A1A]/10">
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A] mb-1">
                  DIRECT CONTACT
                </div>
                <a
                  href="mailto:hello@deltafilm.com"
                  className="text-[12px] text-[#555555] hover:text-[#1A1A1A] transition-colors block font-mono-spec"
                >
                  hello@deltafilm.com
                </a>
              </div>

            </div>

            {/* Quick Action Button */}
            <div className="pt-6 border-t border-[#1A1A1A]/10">
              <button
                onClick={onScrollToWork}
                className="w-full py-3.5 border border-[#1A1A1A] bg-[#1A1A1A] text-[#F9F9F7] hover:bg-transparent hover:text-[#1A1A1A] text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-150 cursor-pointer flex items-center justify-between px-4"
              >
                <span>SELECTED WORKS</span>
                <span className="text-[10px]">↓</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
