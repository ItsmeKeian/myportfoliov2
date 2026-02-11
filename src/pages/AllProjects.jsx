import { useNavigate } from "react-router-dom"
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa"
import { useEffect } from "react"


const projects = [
  {
    title: "DTR Web App",
    subtitle: "Attendance & Time Tracking System",
    description:
      "Web-based DTR system for logging time-in/time-out, viewing attendance history, and exporting reports.",
    tech: ["React", "Vite", "Tailwind", "Node.js", "MySQL"],
    image: "/projects/dtr-web-app.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Food Ordering System",
    subtitle: "Cart & Order Management",
    description:
      "Online food ordering platform with menu browsing, cart, and order tracking features.",
    tech: ["React", "Tailwind", "Firebase"],
    image: "/projects/food-ordering.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Portfolio",
    description:
      "Responsive portfolio site to showcase projects, skills, and work experience.",
    tech: ["React", "Tailwind", "Vite"],
    image: "/projects/portfolio.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Queuing System",
    subtitle: "Capstone Project",
    description:
      "Queue management system designed to improve service flow and reduce waiting times.",
    tech: ["React", "Node.js", "MySQL"],
    image: "/projects/queuing-system.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Inventory System",
    subtitle: "Stock & Product Monitoring",
    description:
      "A simple inventory management system for tracking products and monitoring stock levels.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    image: "/projects/inventory.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Online Voting System",
    subtitle: "Secure Voting Platform",
    description:
      "Online voting system with admin panel, candidate management, and result generation.",
    tech: ["PHP", "MySQL", "JavaScript"],
    image: "/projects/voting.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Student Portal",
    subtitle: "School System",
    description:
      "Student portal for managing grades, enrollment, and student records.",
    tech: ["React", "Node.js", "MySQL"],
    image: "/projects/student-portal.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Barangay Management System",
    subtitle: "Community Records System",
    description:
      "A system for storing barangay resident records, certificates, and announcements.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    image: "/projects/barangay.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "POS System",
    subtitle: "Point of Sale System",
    description:
      "POS system for tracking sales transactions, inventory, and generating reports.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    image: "/projects/pos.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Appointment Booking System",
    subtitle: "Scheduling Web App",
    description:
      "Online booking system for managing appointments with admin and user dashboards.",
    tech: ["React", "Node.js", "MySQL"],
    image: "/projects/appointment.png",
    demoUrl: "#",
    githubUrl: "#",
  },
]

export default function AllProjects() {
  const navigate = useNavigate()


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  return (
    <div className="relative min-h-screen text-gray-900 bg-gray-50 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100">
      {/* Background Effects */}
      <div className="overflow-hidden absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-[-250px] left-[-250px] h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-250px] right-[-250px] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* Container */}
      <div className="px-4 py-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-3 justify-between items-start mb-8 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">
              All Projects
            </h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Here are all the systems and web applications I built.
            </p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700
            transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-violet-400 hover:text-violet-600
            dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-violet-500 dark:hover:text-violet-400"
          >
            <FaArrowLeft className="text-xs" />
            Back
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-2xl border border-gray-200 transition-all duration-300 group bg-slate-50 hover:-translate-y-1 hover:shadow-lg hover:border-violet-500/60 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-violet-500/60"
            >
              {/* Image */}
              <div className="overflow-hidden relative aspect-video bg-slate-200 dark:bg-slate-800">
                <img
                  src={p.image}
                  alt={p.title}
                  className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/70 via-black/20" />

                <div className="absolute right-3 bottom-3 left-3">
                  <h2 className="text-xs font-semibold text-white">{p.title}</h2>
                  <p className="text-[10px] text-white/70">{p.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                  {p.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-700
                      dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-4">
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg
                    bg-violet-600 px-3 py-2 text-[11px] font-medium text-white
                    transition-all duration-300
                    hover:bg-violet-700 hover:-translate-y-0.5 hover:shadow-md
                    active:scale-[0.98]"
                  >
                    <FaExternalLinkAlt className="text-[10px]" />
                    Demo
                  </a>

                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg
                    border border-slate-300 bg-white px-3 py-2 text-[11px] font-medium text-slate-700
                    transition-all duration-300
                    hover:-translate-y-0.5 hover:shadow-md hover:border-violet-400 hover:text-violet-600
                    active:scale-[0.98]
                    dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-violet-500 dark:hover:text-violet-400"
                  >
                    <FaGithub className="text-[12px]" />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="py-10 text-xs text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Keian Gacillos. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
