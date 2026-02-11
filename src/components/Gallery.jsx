import { useMemo } from "react"
import { FaImages } from "react-icons/fa"

const galleryImages = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
]

export default function Gallery() {
  const images = useMemo(() => [...galleryImages, ...galleryImages], [])

  return (
    <section id="gallery" className="px-4 pb-8 w-full sm:px-6 lg:px-10">
      <div className="overflow-hidden p-5 bg-white rounded-xl border shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
        
        {/* Header */}
        <div className="flex gap-3 items-center mb-5">
          <div
            className="flex justify-center items-center w-10 h-10 bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-300 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            <FaImages className="text-sm" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Gallery
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Some snapshots and moments from my journey.
            </p>
          </div>
        </div>

        {/* Auto Scroll Gallery */}
        <div className="overflow-hidden relative w-full">
          
          {/* Fade edges */}
          <div className="absolute top-0 left-0 z-10 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none dark:from-slate-900" />
          <div className="absolute top-0 right-0 z-10 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none dark:from-slate-900" />

          {/* IMPORTANT: padding to prevent border cut */}
          <div className="py-3">
            <div className="flex gap-4 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="group relative h-[150px] w-[240px] flex-shrink-0 overflow-hidden rounded-xl
                  border border-slate-700/60 bg-slate-800/50 shadow-sm
                  transition-all duration-300
                  hover:-translate-y-2 hover:border-violet-500/70 hover:shadow-lg
                  dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-violet-500/70"
                >
                  <img
                    src={src}
                    alt="Gallery"
                    className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* overlay gradient for aesthetics */}
                  <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition duration-300 from-black/40 via-black/10 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
