import React from 'react';

interface HeaderProps {
  onScrollToWork?: () => void;
  onScrollToContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToWork, onScrollToContact }) => {
  return (
    <header className="w-full bg-[#F9F9F7] border-b border-[#1A1A1A] sticky top-0 z-40">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between text-[11px] sm:text-[12px] uppercase tracking-widest leading-none text-[#1A1A1A]">
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <span className="font-bold tracking-widest text-[#1A1A1A]">
            TOM / ARTEM SAMBURA
          </span>
          <span className="text-[#888888] hidden sm:inline">·</span>
          <span className="text-[#888888] hidden sm:inline tracking-wider">
            DELTA FILM
          </span>
        </div>

        {/* Right Studio Title & Navigation */}
        <div className="flex items-center space-x-6 text-[10px] sm:text-[11px] tracking-widest">
          <button 
            onClick={onScrollToWork}
            className="text-[#666666] hover:text-[#1A1A1A] transition-colors cursor-pointer"
          >
            SELECTED WORKS
          </button>
          <button 
            onClick={onScrollToContact}
            className="text-[#666666] hover:text-[#1A1A1A] transition-colors cursor-pointer"
          >
            CONTACT
          </button>
        </div>
      </div>
    </header>
  );
};
