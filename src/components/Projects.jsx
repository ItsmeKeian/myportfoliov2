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
    featured: false,
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
    featured: false,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="p-4 bg-white rounded-xl border dark:border-slate-800 dark:bg-slate-900 sm:p-5">
      <div className="flex flex-col gap-1 mb-4">
        <h2 className="text-lg font-semibold">Projects</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Some of the systems and web apps I built recently.
        </p>
      </div>

      {/* Featured Projects */}
      <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
        Featured Projects
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        {featuredProjects.map((p) => (
          <article
            key={p.title}
            className="overflow-hidden bg-white rounded-xl border border-gray-200 shadow-sm transition group hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="overflow-hidden relative bg-gray-100 aspect-video dark:bg-slate-800">
              <img
                src={p.image}
                alt={p.title}
                className="object-cover w-full h-full transition duration-300 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay Buttons */}
              <div className="flex absolute inset-0 gap-3 justify-center items-center opacity-0 transition bg-black/40 group-hover:opacity-100">
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-slate-900"
                >
                  Live Demo
                </a>
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white px-3 py-1.5 text-xs font-medium text-white"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="p-4">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                {p.title}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {p.subtitle}
              </p>

              <p className="mt-2 text-[11px] text-slate-600 dark:text-slate-300">
                {p.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] text-gray-700 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Other Projects */}
      <h3 className="mt-6 mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
        Other Projects
      </h3>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {otherProjects.map((p) => (
          <article
            key={p.title}
            className="flex overflow-hidden flex-col p-3 bg-white rounded-lg border border-gray-200 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
          >
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {p.title}
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {p.subtitle}
            </p>
            <p className="mt-2 text-[11px] text-slate-600 dark:text-slate-300">
              {p.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] text-gray-700 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-2 mt-3">
              <a
                href={p.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-lg bg-slate-900 px-3 py-1.5 text-center text-[11px] font-medium text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
              >
                Demo
              </a>
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-center text-[11px] font-medium text-gray-800 transition hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 dark:hover:bg-slate-800"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
