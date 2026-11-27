import { ChevronDown } from 'lucide-react';

export function ShortForm() {
  return (
    <section id="short-form" aria-label="Short form" className="w-full scroll-mt-20 border-b border-[#1A1A1A] bg-[#F9F9F7] text-[#1A1A1A]">
      <details open className="group mx-auto max-w-[1720px] px-4 sm:px-8">
        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-4 text-[11px] font-bold tracking-[0.2em] uppercase focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-[13px] [&::-webkit-details-marker]:hidden">
          Short Form
          <ChevronDown size={16} aria-hidden="true" className="group-open:rotate-180" />
        </summary>
        <div className="grid items-center gap-6 border-t border-[#1A1A1A]/10 py-6 sm:grid-cols-2 sm:gap-8 sm:py-8">
          <div className="sm:justify-self-center">
            <h2 className="font-project-title text-2xl font-bold tracking-tight sm:text-4xl">DND Active</h2>
            <p className="mt-3 text-base font-semibold">≈500K views in 5 hours</p>
            <p className="mt-1 text-sm text-[#555555]">On @dndactive.co</p>
          </div>
          <iframe
            src="https://www.instagram.com/p/DgNcBoGyQkC/embed/"
            title="DND Active Reel on Instagram"
            width="360"
            height="720"
            loading="lazy"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="mx-auto block aspect-[1/2] h-auto w-full max-w-[360px] border-0 bg-white"
          />
        </div>
      </details>
    </section>
  );
}
