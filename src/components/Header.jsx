export default function Header({ dark, setDark }) {
  return (
    <header className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex gap-4 justify-between items-start px-4 py-6 mx-auto max-w-screen-2xl sm:px-6 lg:px-10">
        
        {/* Profile */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
          
          {/* Avatar */}
          <img
            src="./src/images/profile.jpg"
            alt="Profile"
            className="object-cover w-24 h-24 rounded-2xl border border-gray-200 shadow-sm dark:border-slate-700 sm:h-28 sm:w-28"
          />

          {/* Info */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 items-center">
              <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
                Keian Gacillos
              </h1>

              <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600 dark:border-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                Available for Work
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              📍 Eastern Samar, Philippines
            </p>

            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              BSIT Graduate | Web Developer & IT Support
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-2 mt-4 sm:flex-row sm:gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center px-4 py-2 w-full text-sm font-medium text-white rounded-lg shadow-sm transition bg-slate-900 hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white sm:w-auto"
              >
                View Resume
              </a>

              <a
                href="mailto:gacilloskeian02@gmail.com"
                className="inline-flex justify-center items-center px-4 py-2 w-full text-sm font-medium bg-white rounded-lg border transition border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 sm:w-auto"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-2 text-sm bg-white rounded-full border border-gray-200 shadow-sm transition hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-100 dark:hover:text-slate-900"
          aria-label="Toggle dark mode"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
