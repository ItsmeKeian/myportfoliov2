const experience = [
  {
    company: "Cebu Belmont Inc.",
    role: "Web Developer",
    date: "March 2025 – October 2025",
    bullets: [
      "Designed, developed, and maintained responsive websites using HTML, CSS, JavaScript, PHP, and MySQL.",
      "Handled bug fixing, website updates, and performance optimization for better user experience.",
      "Managed MySQL databases for storing client and program records.",
      "Performed system maintenance including backups and monitoring uptime.",
    ],
  },
  {
    company: "Eastern Samar Provincial Information Office",
    role: "Web Maintenance / IT Support",
    date: "July 2024 – January 2025",
    bullets: [
      "Updated and maintained website content including text, images, and page layouts.",
      "Fixed minor layout and functionality issues to improve usability and performance.",
      "Provided IT support and troubleshooting assistance during office operations.",
      "Assisted in media-related tasks such as photography and video editing.",
    ],
  },
  {
    company: "Eastern Samar State University (Main Campus)",
    role: "Faculty Intern",
    date: "February 2024 – May 2024",
    bullets: [
      "Assisted students with inquiries and supported office processes in the Dean’s Office.",
      "Created visual materials for events using Photoshop and video editing tools.",
      "Helped organize administrative tasks and communication support.",
    ],
  },
  {
    company: "Infiniteloop Software Development Services",
    role: "Working Student / Programmer",
    date: "October 2022 – September 2023",
    bullets: [
      "Developed and maintained responsive web pages using HTML, CSS, and JavaScript.",
      "Implemented interactive UI components based on design requirements.",
      "Improved website performance and code readability using clean coding practices.",
      "Collaborated with developers and assisted in client-related meetings.",
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="p-5 bg-white rounded-xl border shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6"
    >
      <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
        Experience
      </h2>

      <div className="space-y-6">
        {experience.map((job) => (
          <div
            key={job.company}
            className="p-4 rounded-lg border border-gray-200 transition-all duration-300 bg-slate-50 hover:-translate-y-1 hover:border-violet-500/60 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-violet-500/60"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {job.company}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300">
                {job.role} • {job.date}
              </p>
            </div>

            <ul className="pl-4 mt-3 space-y-2 text-xs list-disc text-slate-700 dark:text-slate-200">
              {job.bullets.map((b, idx) => (
                <li key={idx} className="leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
