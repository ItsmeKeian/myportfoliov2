import { FaMoon, FaCog } from "react-icons/fa"

export default function Header({ dark, setDark }) {
  const defaultImage = dark
    ? "/profile.jpg"
    : "/profile.jpg"

  const hoverImage = dark
    ? "/SUNG1.jpg"
    : "/SUNGG.jpg"

  return (
    <header className="w-full bg-white border-b border-slate-200 dark:border-slate-800 dark:bg-slate-950">
      
      {/* SAME CONTAINER STYLE AS MAIN */}
      <div className="flex justify-between items-start px-4 py-6 w-full sm:px-6 lg:px-10">

        {/* LEFT SIDE */}
        <div className="flex gap-6 items-start sm:items-center">
          
          {/* Avatar */}
          <div className="overflow-hidden relative w-36 h-36 rounded-2xl border shadow-sm border-slate-200 dark:border-slate-700 sm:w-40 sm:h-40 group">
            
            <img
              src={defaultImage}
              alt="Profile"
              className="object-cover absolute inset-0 w-full h-full opacity-100 transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
            />

            <img
              src={hoverImage}
              alt="Profile Hover"
              className="object-cover absolute inset-0 w-full h-full opacity-0 transition-all duration-500 scale-110 group-hover:opacity-100 group-hover:scale-100"
            />
          </div>

          {/* Info */}
          <div>
            <div className="flex flex-wrap gap-2 items-center">
              <h1 className="text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">
                Keian Gacillos
              </h1>

              <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600
                dark:border-blue-800 dark:bg-blue-900/40 dark:text-blue-300"
              >
                Available for Hire
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Eastern Samar, Philippines
            </p>

            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              BSIT Graduate | Aspiring Full-Stack Web Developer
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              <a
                href="/keiancamposanogacillosresume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center px-5 py-2.5 text-sm font-semibold text-white bg-violet-600 rounded-xl shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md hover:bg-violet-700 active:scale-[0.98]"
              >
                View Resume
              </a>

              <a
                  href="mailto:contact@keiancamposanogacillos.online?subject=Portfolio%20Inquiry"
                  className="inline-flex justify-center items-center px-5 py-2.5 text-sm font-semibold bg-white rounded-xl border border-slate-300 text-slate-700 shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-md hover:border-violet-400 hover:bg-slate-50 active:scale-[0.98]
                  dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:border-violet-500"
                >
                  Send Email
                </a>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Theme Toggle) */}
        <button
          onClick={() => setDark(!dark)}
          type="button"
          aria-label="Toggle Theme"
          className="transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div
            className={`relative w-14 h-7 flex items-center rounded-full transition-colors duration-300
            ${dark ? "bg-violet-600" : "bg-slate-400"}`}
          >
            <span
              className={`absolute flex justify-center items-center w-6 h-6 rounded-full shadow-md
              bg-white transition-all duration-300
              ${dark ? "translate-x-7" : "translate-x-1"}`}
            >
              {dark ? (
                <FaCog className="text-sm text-violet-600" />
              ) : (
                <FaMoon className="text-sm text-slate-700" />
              )}
            </span>
          </div>
        </button>

      </div>
    </header>
  )
}
