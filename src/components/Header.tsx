import React from 'react';

interface HeaderProps {
  onScrollToWork?: () => void;
  onScrollToContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToWork, onScrollToContact }) => {
  return (
    <header className="w-full bg-[#F9F9F7] border-b border-[#1A1A1A] sticky top-0 z-40">
      <div className="max-w-[1720px] mx-auto px-3 min-[380px]:px-4 sm:px-8 py-2 sm:py-3 flex items-center justify-between gap-3 text-[11px] sm:text-[12px] uppercase tracking-widest leading-none text-[#1A1A1A]">
        {/* Left Branding */}
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <a href="/" aria-label="DELTA FILM home" className="shrink-0">
            <img src="/favicon.svg?v=monogram" alt="" width="48" height="48" className="h-11 w-11 sm:h-12 sm:w-12" />
          </a>
          <span className="font-bold tracking-widest leading-tight text-[#1A1A1A]">
            TOMMY / ARTEM SAMBURA
          </span>
          <span className="text-[#888888] hidden sm:inline">·</span>
          <span className="text-[#888888] hidden sm:inline tracking-wider">
            DELTA FILM
          </span>
        </div>

        {/* Right Studio Title & Navigation */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-6 whitespace-nowrap text-[10px] sm:text-[11px] tracking-wider min-[380px]:tracking-widest">
          <a
            href="#selected-work"
            onClick={onScrollToWork}
            className="text-[#666666] hover:text-[#1A1A1A] transition-colors cursor-pointer"
          >
            SELECTED WORKS
          </a>
          <a
            href="#contact"
            onClick={onScrollToContact}
            className="text-[#666666] hover:text-[#1A1A1A] transition-colors cursor-pointer"
          >
            CONTACT
          </a>
        </div>
      </div>
    </header>
  );
};
