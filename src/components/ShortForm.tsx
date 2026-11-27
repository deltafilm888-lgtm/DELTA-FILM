import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const reelUrl = 'https://www.instagram.com/reel/DgNcBoGyQkC/';
const videoUrl = '/short-form/dnd-active-reel.mp4';
const posterUrl = '/short-form/dnd-active-poster.jpg';
const frameClass = 'mx-auto block aspect-[9/16] h-auto w-full max-w-[360px] bg-[#1A1A1A]';

export function ShortForm() {
  const [playbackFailed, setPlaybackFailed] = useState(false);

  return (
    <section id="short-form" aria-label="Short form" className="w-full scroll-mt-20 border-b border-[#1A1A1A] bg-[#F9F9F7] text-[#1A1A1A]">
      <details
        open
        onToggle={({ currentTarget }) => {
          if (!currentTarget.open) currentTarget.querySelector('video')?.pause();
        }}
        className="group mx-auto max-w-[1720px] px-4 sm:px-8"
      >
        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-4 text-[11px] font-bold tracking-[0.2em] uppercase focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-[13px] [&::-webkit-details-marker]:hidden">
          Short Form
          <ChevronDown size={16} aria-hidden="true" className="group-open:rotate-180" />
        </summary>
        <div className="grid items-center gap-6 border-t border-[#1A1A1A]/10 py-6 sm:grid-cols-2 sm:gap-8 sm:py-8">
          <div className="sm:justify-self-center">
            <h2 className="font-project-title text-2xl font-bold tracking-tight sm:text-4xl">DND Active</h2>
            <p className="mt-3 text-base font-semibold">1M views in 17 hours</p>
            <p className="mt-2 max-w-sm text-base leading-relaxed text-[#555555]">
              Viral reel for activewear brand DND Active, styled as a retro TV infomercial.
            </p>
            <a href={reelUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm text-[#555555] underline underline-offset-4">
              On @dndactive.co
            </a>
          </div>
          {playbackFailed ? (
            <a
              href={videoUrl}
              download
              className={`relative text-white focus-visible:outline-2 focus-visible:outline-offset-4 ${frameClass}`}
            >
              <img src={posterUrl} alt="" className="h-full w-full object-cover" />
              <span className="absolute inset-x-0 bottom-0 bg-[#1A1A1A] px-4 py-3 text-center text-sm">
                Download Reel (MP4)
              </span>
            </a>
          ) : (
            <video
              src={videoUrl}
              poster={posterUrl}
              aria-label="DND Active campaign"
              width={360}
              height={640}
              controls
              playsInline
              preload="none"
              onError={() => setPlaybackFailed(true)}
              className={frameClass}
            />
          )}
        </div>
      </details>
    </section>
  );
}
