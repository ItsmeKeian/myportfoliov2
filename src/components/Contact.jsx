import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaFileDownload,
} from "react-icons/fa"

export default function Contact() {
  const contacts = [
    {
      label: "Phone",
      value: "0953 788 2603",
      href: "tel:+639537882603",
      icon: <FaPhoneAlt />,
    },
    {
      label: "Email",
      value: "gacilloskeian02@gmail.com",
      href: "mailto:gacilloskeian02@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      label: "Location",
      value: "Borongan City, Eastern Samar",
      href: null,
      icon: <FaMapMarkerAlt />,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/keian-gacillos",
      href: "https://www.linkedin.com/in/keian-gacillos-787b6b34b",
      icon: <FaLinkedin />,
    },
    {
      label: "GitHub",
      value: "github.com/ItsmeKeian",
      href: "https://github.com/ItsmeKeian",
      icon: <FaGithub />,
    },
    {
      label: "Portfolio",
      value: "keiancamposanogacillos.online",
      href: "https://www.keiancamposanogacillos.online",
      icon: <FaGlobe />,
    },
  ]

  return (
    <section
      id="contact"
      className="p-5 bg-white rounded-xl border shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Contact
          </h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Feel free to reach out for opportunities or collaboration.
          </p>
        </div>
      </div>

      {/* Contact Grid */}
      <div className="grid gap-3 sm:grid-cols-2">
        {contacts.map((item) => (
          <div
            key={item.label}
            className="flex gap-3 items-center p-3 rounded-xl border border-gray-200 transition-all duration-300 group bg-slate-50 hover:-translate-y-1 hover:shadow-md hover:border-violet-500/60 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-violet-500/60"
          >
            {/* Icon */}
            <div
              className="flex justify-center items-center w-10 h-10 bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-300 text-slate-700 group-hover:text-violet-500 group-hover:border-violet-500/60 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200"
            >
              {item.icon}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                {item.label}
              </p>

              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="block text-sm font-semibold truncate transition text-slate-900 hover:text-violet-600 dark:text-white dark:hover:text-violet-400"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-semibold truncate text-slate-900 dark:text-white">
                  {item.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 mt-5 sm:flex-row">
        <a
          href="mailto:gacilloskeian02@gmail.com"
          className="group inline-flex justify-center items-center gap-2 px-5 py-2.5 w-full text-sm font-medium text-white rounded-lg
          transition-all duration-300
          bg-violet-600 hover:bg-violet-700 hover:-translate-y-0.5 hover:shadow-md
          active:scale-[0.98]
          sm:w-auto"
        >
          <FaEnvelope className="text-xs opacity-90 group-hover:opacity-100" />
          Send Email
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex justify-center items-center gap-2 px-5 py-2.5 w-full text-sm font-medium rounded-lg
          border border-slate-300 bg-white text-slate-700
          transition-all duration-300
          hover:-translate-y-0.5 hover:shadow-md hover:border-violet-400 hover:text-violet-600
          active:scale-[0.98]
          dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-violet-500 dark:hover:text-violet-400
          sm:w-auto"
        >
          <FaFileDownload className="text-xs opacity-80 group-hover:opacity-100" />
          Download Resume
        </a>
      </div>
    </section>
  )
}
