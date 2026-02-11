import { Link } from "react-router-dom"
import { FaCertificate } from "react-icons/fa"

const certifications = [
  {
    title:
      "Facilitator during the Seminar-Workshop on Visualization Towards Methodological Skills in Research",
    date: "April 2023",
  },
  {
    title: "Seminar Workshop on Website User Interface Designing",
    date: "September 2023",
  },
  {
    title:
      "Facilitator during the Seminar-Workshop on Data Science and Big Data Analytics with Data Visualization and Website Integration",
    date: "December 2023",
  },
]

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="p-5 bg-white rounded-xl border shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6"
    >
      {/* Header */}
      <div className="flex gap-3 justify-between items-start mb-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Certifications & Seminars
          </h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Workshops and seminars that strengthened my technical and professional
            skills.
          </p>
        </div>

        {/* View All */}
        <Link
          to="/certifications"
          className="text-xs font-medium text-violet-600 transition hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
        >
          View All →
        </Link>
      </div>

      <div className="space-y-3">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="flex gap-3 items-start p-4 rounded-lg border border-gray-200 transition-all duration-300 group bg-slate-50 hover:-translate-y-1 hover:shadow-md hover:border-violet-500/60 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-violet-500/60"
          >
            {/* Icon */}
            <div className="flex justify-center items-center w-10 h-10 bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-300 text-slate-700 group-hover:text-violet-500 group-hover:border-violet-500/60 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200">
              <FaCertificate className="text-sm" />
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-sm font-medium leading-snug text-slate-900 dark:text-white">
                {cert.title}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
