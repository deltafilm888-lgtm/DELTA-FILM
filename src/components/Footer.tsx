import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#F9F9F7] py-6 border-t border-[#1A1A1A] text-[11px] text-[#1A1A1A]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Links */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 font-mono-spec text-[11px] tracking-tight">
          <a
            href="mailto:hello@delta-film.com"
            className="text-[#1A1A1A] hover:text-[#888888] transition-colors lowercase inline-flex items-center"
          >
            hello@delta-film.com
          </a>
          <a
            href="https://wa.me/84862659753"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888888] hover:text-[#1A1A1A] transition-colors inline-flex items-center"
          >
            +84 86 265 9753
          </a>
          <a
            href="https://instagram.com/film.delta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888888] hover:text-[#1A1A1A] transition-colors lowercase inline-flex items-center"
          >
            @film.delta
          </a>
        </div>

        {/* Center / Right Copyright */}
        <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest">
          <div className="text-[9px] text-[#888888] tracking-[0.2em]">
            © {currentYear} DELTA FILM
          </div>
          <button
            onClick={scrollToTop}
            className="text-[9px] text-[#888888] hover:text-[#1A1A1A] tracking-widest cursor-pointer transition-colors"
          >
            [ TOP ↑ ]
          </button>
        </div>

      </div>
    </footer>
  );
};
