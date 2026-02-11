import { Link } from "react-router-dom"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
  },

  // Other projects
  {
    title: "Inventory System",
    subtitle: "Stock & Product Monitoring",
    description:
      "A simple inventory management system for tracking products and monitoring stock levels.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    image: "/projects/inventory.png",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
  },
]

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4)
  const otherProjects = projects.filter((p) => !p.featured).slice(0, 6)

  return (
    <section
      id="projects"
      className="p-5 bg-white rounded-xl border shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6"
    >
      {/* Header */}
      <div className="flex gap-3 justify-between items-start mb-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Projects
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Some of the systems and web apps I built recently.
          </p>
        </div>

        {/* View All Link */}
        <Link
          to="/projects"
          className="text-xs font-medium text-violet-600 transition hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
        >
          View All →
        </Link>
      </div>

      {/* Featured Projects */}
      <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
        Featured Projects
      </h3>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProjects.map((p) => (
          <article
            key={p.title}
            className="overflow-hidden rounded-xl border border-gray-200 transition-all duration-300 group bg-slate-50 hover:-translate-y-1 hover:shadow-lg hover:border-violet-500/60 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-violet-500/60"
          >
            {/* Image */}
            <div className="overflow-hidden relative aspect-video bg-slate-200 dark:bg-slate-900">
              <img
                src={p.image}
                alt={p.title}
                className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/70 via-black/20" />

              <div className="absolute right-3 bottom-3 left-3">
                <h4 className="text-xs font-semibold text-white">{p.title}</h4>
                <p className="text-[10px] text-white/70">{p.subtitle}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-3">
              <p className="text-[10px] leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                {p.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-1 mt-3">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[9px] font-medium text-slate-700
                    dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-3">
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg
                  bg-violet-600 px-2 py-2 text-[10px] font-medium text-white
                  transition-all duration-300
                  hover:bg-violet-700 hover:-translate-y-0.5 hover:shadow-md
                  active:scale-[0.98]"
                >
                  <FaExternalLinkAlt className="text-[9px]" />
                  Demo
                </a>

                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg
                  border border-slate-300 bg-white px-2 py-2 text-[10px] font-medium text-slate-700
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-md hover:border-violet-400 hover:text-violet-600
                  active:scale-[0.98]
                  dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-violet-500 dark:hover:text-violet-400"
                >
                  <FaGithub className="text-[11px]" />
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Other Projects */}
      <h3 className="mt-7 mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
        Other Projects
      </h3>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col p-4 rounded-xl border border-gray-200 transition-all duration-300 group bg-slate-50 hover:-translate-y-1 hover:shadow-md hover:border-violet-500/60 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-violet-500/60"
          >
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              {p.title}
            </h4>

            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {p.subtitle}
            </p>

            <p className="mt-2 text-[11px] leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
              {p.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-700
                  dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
