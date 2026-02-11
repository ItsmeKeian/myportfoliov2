import { FaGraduationCap } from "react-icons/fa"

export default function Education() {
  return (
    <section
      id="education"
      className="p-5 bg-white rounded-xl border shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6"
    >
      <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
        Education
      </h2>

      <div
        className="p-4 rounded-lg border border-gray-200 transition-all duration-300 group bg-slate-50 hover:-translate-y-1 hover:shadow-md hover:border-violet-500/60 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-violet-500/60"
      >
        <div className="flex gap-3 items-start">
          {/* Icon */}
          <div
            className="flex justify-center items-center w-11 h-11 bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-300 text-slate-700 group-hover:text-violet-500 group-hover:border-violet-500/60 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200"
          >
            <FaGraduationCap />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Bachelor of Science in Information Technology
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Eastern Samar State University
                </p>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 sm:text-right">
                2020 – 2024
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-4">
              <p className="text-xs font-medium text-slate-700 dark:text-slate-200">
                Highlights
              </p>

              <ul className="pl-4 mt-2 space-y-2 text-xs list-disc text-slate-600 dark:text-slate-300">
                <li>
                  Completed projects involving web development and database
                  systems.
                </li>
                <li>
                  Developed a capstone project focused on system management
                  solutions.
                </li>
                <li>
                  Strengthened skills in frontend development, backend logic, and
                  troubleshooting.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
