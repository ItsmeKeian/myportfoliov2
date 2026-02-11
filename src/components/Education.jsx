export default function Education() {
  return (
    <section
      id="education"
      className="p-5 bg-white rounded-xl border shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6"
    >
      <h2 className="mb-4 text-lg font-semibold">Education</h2>

      <div className="p-4 rounded-lg border border-gray-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
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

        {/* Optional Highlights */}
        <div className="mt-3">
          <p className="text-xs font-medium text-slate-700 dark:text-slate-200">
            Highlights
          </p>

          <ul className="pl-4 mt-2 space-y-1 text-xs list-disc text-slate-600 dark:text-slate-300">
            <li>Completed projects involving web development and database systems.</li>
            <li>Developed a capstone project focused on system management solutions.</li>
            <li>Strengthened skills in frontend development, backend logic, and troubleshooting.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
