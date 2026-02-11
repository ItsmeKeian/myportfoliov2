import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaArrowLeft, FaCertificate } from "react-icons/fa"

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

export default function AllCertifications() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-slate-950">
      {/* Background Effects */}
      <div className="overflow-hidden absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-[-250px] left-[-250px] h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-250px] right-[-250px] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* Fade Wrapper */}
      <div className="fade-up">
        <main className="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
                All Certifications & Seminars
              </h1>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Here are all the seminars and workshops that I attended and participated in.
              </p>
            </div>

            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700
              transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-md hover:border-violet-400 hover:text-violet-600
              dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-violet-500 dark:hover:text-violet-400"
            >
              <FaArrowLeft className="text-[11px]" />
              Back
            </button>
          </div>

          {/* Certifications Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="fade-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div
                    className="flex flex-col justify-between gap-3 p-5 h-full rounded-xl border border-gray-200 transition-all duration-300 group
                    bg-slate-50 hover:-translate-y-1 hover:shadow-md hover:border-violet-500/60
                    dark:border-slate-700 dark:bg-slate-900 dark:hover:border-violet-500/60
                    min-h-[130px]"
                    >
                    <div className="flex gap-3 items-start">
                        {/* Icon */}
                        <div
                        className="flex justify-center items-center w-11 h-11 bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 text-slate-700 group-hover:text-violet-500 group-hover:border-violet-500/60 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                        >
                        <FaCertificate className="text-sm" />
                        </div>

                        {/* Text */}
                        <div className="flex-1">
                        <p className="text-sm font-semibold leading-snug text-slate-900 dark:text-white">
                            {cert.title}
                        </p>
                        </div>
                    </div>

                    {/* Date (always bottom) */}
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {cert.date}
                    </p>
                    </div>

              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-16 text-xs text-center text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Keian Gacillos. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  )
}
