export default function FeaturedCTA() {
  return (
    <section className="p-6 bg-white rounded-2xl border shadow-sm border-slate-200 dark:border-slate-800 dark:bg-slate-900 sm:p-7">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-lg">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
            Looking for a Full-Stack Web Developer?
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            I’m currently open for opportunities as a{" "}
            <span className="font-medium text-slate-900 dark:text-white">
              Junior Full-Stack Web Developer
            </span>
            . I enjoy building clean UI, solving technical problems, and working with modern tools
            to deliver responsive and user-friendly web applications.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="mailto:gacilloskeian02@gmail.com"
            className="inline-flex justify-center items-center px-6 py-2.5 w-full text-sm font-semibold text-white bg-violet-600 rounded-xl shadow-md
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg hover:bg-violet-700 active:scale-[0.98]
            sm:w-auto"
          >
            Hire Me
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center items-center px-6 py-2.5 w-full text-sm font-semibold rounded-xl border shadow-sm
            transition-all duration-300
            border-slate-300 text-slate-700 bg-white
            hover:-translate-y-1 hover:shadow-md hover:border-violet-400 hover:bg-slate-50
            dark:border-slate-700 dark:text-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:hover:border-violet-500
            active:scale-[0.98] sm:w-auto"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
