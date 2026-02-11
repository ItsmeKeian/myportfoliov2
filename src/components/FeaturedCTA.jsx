export default function FeaturedCTA() {
    return (
      <section
        className="p-6 bg-gradient-to-r to-white rounded-xl border border-gray-200 shadow-sm sm:p-7 from-slate-100 text-slate-900 dark:from-slate-900 dark:to-slate-800 dark:text-white dark:border-slate-700"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold sm:text-xl">
              Looking for a Web Developer?
            </h2>
  
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-200">
              I’m currently open for opportunities as a{" "}
              <span className="font-medium text-slate-900 dark:text-white">
                Junior Web Developer / IT Support
              </span>
              . I enjoy building clean UI, solving technical problems, and working
              with modern web tools.
            </p>
          </div>
  
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href="mailto:gacilloskeian02@gmail.com"
              className="inline-flex justify-center items-center px-5 py-2 w-full text-sm font-medium text-white rounded-lg transition bg-slate-900 hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 sm:w-auto"
            >
              Hire Me
            </a>
  
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center px-5 py-2 w-full text-sm font-medium bg-white rounded-lg border transition border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-white/30 dark:bg-transparent dark:text-white dark:hover:bg-white/10 sm:w-auto"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  