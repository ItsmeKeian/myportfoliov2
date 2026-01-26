export default function Header({ dark, setDark }) {
  return (
    <header className="border-b border-gray-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
     <div className="px-6 py-6 mx-auto max-w-8xl">
        {/* Top bar: logo card + dark mode toggle */}
        <div className="flex gap-4 justify-between items-start">
          {/* Profile card */}
          <div className="flex-1">
          <div className="w-full flex gap-4 items-center ...">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src="./src/images/profile.jpg"
                  className="object-cover w-40 h-40 rounded-2xl border border-gray-200 shadow-sm dark:border-slate-700"
                  alt="Profile"
                />
              </div>

              {/* Text content */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 items-center">
                  <h1 className="text-xl font-semibold sm:text-2xl text-slate-900 dark:text-slate-50">
                    Keian Gacillos
                  </h1>
                  {/* “Verified” badge style icon */}
                  <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-0.5 text-xs font-medium border border-blue-100 dark:border-blue-800">
                    ✓
                  </span>
                </div>

                {/* Location */}
                <div className="flex gap-1 items-center mt-1 text-sm text-slate-500 dark:text-slate-400">
                  <span className="text-lg">📍</span>
                  <span>Eastern Samar, Philippines</span>
                </div>

                {/* Role / headline */}
                <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                  BSIT Graduate / Aspiring Software Developer
                </p>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href="#"
                    className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-white rounded-lg shadow-sm transition-colors bg-slate-900 dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-white"
                  >
                    View Resume
                  </a>
                  <a
                    href="mailto:youremail@example.com"
                    className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium bg-white rounded-lg border transition-colors border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-2 mt-1 text-sm bg-white rounded-full border border-gray-200 shadow-sm transition-colors dark:bg-slate-800 text-slate-700 dark:text-slate-200 dark:border-slate-700 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900"
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}