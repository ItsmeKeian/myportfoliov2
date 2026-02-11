const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "I build responsive and modern web applications using React, PHP, Node.js, and MySQL.",
      icon: "💻",
    },
    {
      title: "Responsive UI Development",
      description:
        "I create clean and mobile-friendly layouts with Tailwind CSS and modern UI practices.",
      icon: "📱",
    },
    {
      title: "Database Management",
      description:
        "I design and manage MySQL databases for storing records, system data, and user information.",
      icon: "🗄️",
    },
    {
      title: "Website Maintenance & Bug Fixing",
      description:
        "I handle updates, bug fixes, performance improvements, and content management for websites.",
      icon: "🛠️",
    },
    {
      title: "IT Support & Troubleshooting",
      description:
        "I provide technical support, solve computer/network issues, and assist in office IT operations.",
      icon: "🔧",
    },
    {
      title: "Content & Media Support",
      description:
        "I also support basic editing, photography assistance, and content updates when needed.",
      icon: "🎬",
    },
  ];
  
  export default function Services() {
    return (
      <section
        id="services"
        className="p-5 bg-white rounded-xl border shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6"
      >
        <div className="mb-4">
          <h2 className="text-lg font-semibold">What I Can Do</h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Services and skills I can offer as a Web Developer and IT Support.
          </p>
        </div>
  
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-gray-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex gap-3 items-start">
                <div className="flex justify-center items-center w-10 h-10 text-lg bg-white rounded-lg shadow-sm dark:bg-slate-900">
                  {service.icon}
                </div>
  
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  