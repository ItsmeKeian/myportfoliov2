export default function Header({ dark, setDark }) {
  return (
    <header className="border-b border-gray-200 dark:border-slate-800">
      <div className="flex justify-between items-center p-4 mx-auto max-w-8xl">
        <div className="flex gap-4 items-center">
          <img
            src="./src/images/profile.jpg"
            className="w-16 h-16 rounded-xl border"
            alt="Profile"
          />
          <div>
            <h1 className="font-semibold">Keian Gacillos</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Web Developer / IT Support
            </p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-2 text-sm rounded-lg border transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <a className="px-4 py-2 text-sm rounded-lg border transition hover:bg-black hover:text-white">
            View Resume
          </a>
        </div>
      </div>
    </header>
  );
}
