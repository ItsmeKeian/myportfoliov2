const projects = [
  {
    title: "DTR Web App",
    subtitle: "Attendance & Time Tracking System",
    description:
      "Web-based DTR system for logging time-in/time-out, viewing attendance history, and exporting reports.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "MySQL"],
    image: "/projects/dtr-web-app.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Food Ordering System",
    subtitle: "Cart & Order Management",
    description:
      "Online food ordering platform with menu browsing, cart, and order tracking features.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    image: "/projects/food-ordering.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Portfolio",
    description:
      "Responsive portfolio site to showcase projects, skills, and work experience.",
    tech: ["React", "Tailwind CSS", "Vite"],
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
  
];

export default function Projects() {
  return (
    <section className="p-4 bg-white rounded-xl border sm:p-5 dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-4 text-lg font-semibold">Recent Projects</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex overflow-hidden flex-col text-sm bg-white rounded-lg border border-gray-200 shadow-sm transition-all group hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
          >
            {/* Image */}
            <div className="overflow-hidden relative h-28 bg-gray-100 sm:h-32 dark:bg-slate-800">
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-3 sm:p-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  {p.title}
                </h3>
                <p className="text-[11px] text-gray-500 dark:text-slate-400">
                  {p.subtitle}
                </p>
                <p className="mt-1 text-[11px] text-gray-600 dark:text-slate-300">
                  {p.description}
                </p>
              </div>

              {/* Tech stack chips */}
              <div className="mt-2 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] text-gray-700 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-2 pt-3 mt-auto">
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-lg bg-slate-900 px-3 py-1.5 text-[11px] font-medium text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
                >
                  Live Demo
                </a>
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-[11px] font-medium text-gray-800 transition hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 dark:hover:bg-slate-800"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}