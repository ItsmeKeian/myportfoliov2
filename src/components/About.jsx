import {
  FaUserAlt,
  FaLaptopCode,
  FaTools,
  FaCode,
} from "react-icons/fa"

export default function About() {
  return (
    <section
      id="about"
      className="p-6 bg-white rounded-2xl border shadow-sm border-slate-200 dark:border-slate-800 dark:bg-slate-900 sm:p-6"
    >
      <h2 className="flex gap-2 items-center mb-4 text-lg font-semibold text-slate-900 dark:text-white">
        <FaUserAlt className="text-violet-600 dark:text-violet-400" />
        About Me
      </h2>

      <div className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <p>
                I’m a{" "}
                <span className="font-medium text-slate-900 dark:text-white">
                  BSIT graduate
                </span>{" "}
                and an{" "}
                <span className="font-medium text-slate-900 dark:text-white">
                  Aspiring Full-Stack Web Developer
                </span>{" "}
                with hands-on experience building responsive websites, interactive user
                interfaces, and database-driven web applications. I enjoy creating modern
                web solutions that are clean, functional, and easy to use.
              </p>

              <p>
                I have worked on real-world projects using{" "}
                <span className="font-medium text-slate-900 dark:text-white">
                  HTML, CSS, JavaScript, React, PHP, and MySQL
                </span>
                , where I handled both frontend and backend development. I’m comfortable
                building responsive layouts, creating dynamic features, and connecting web
                applications to databases to manage and display real data efficiently.
              </p>

              <p>
                I enjoy solving technical problems through clean code, logical debugging,
                and user-focused design. I also have experience maintaining websites by
                updating content, fixing layout and functionality issues, improving page
                performance, and ensuring compatibility across different browsers and
                devices.
              </p>

              <p>
                I have practical experience using{" "}
                <span className="font-medium text-slate-900 dark:text-white">
                  Tailwind CSS, Git, GitHub, VS Code, WordPress, Hostinger, jQuery, and AJAX
                </span>{" "}
                in building and managing projects. I use Git and GitHub for version control,
                collaboration, and deployment workflows, and I apply modern development
                practices to keep projects organized, scalable, and maintainable.
              </p>

              <p>
                I’m currently{" "}
                <span className="font-medium text-slate-900 dark:text-white">
                  available for freelance projects
                </span>{" "}
                and open to full-time opportunities where I can contribute as a Full-Stack
                Web Developer. My goal is to continue growing professionally while building
                reliable, efficient, and user-friendly web applications for clients and
                teams.
              </p>
            </div>




      {/* Quick highlights */}
      <div className="grid gap-4 mt-6 sm:grid-cols-3">
        
        {/* Experience */}
        <div className="p-4 text-center rounded-xl border transition-all duration-300 cursor-pointer group bg-slate-50 border-slate-200 text-slate-700 hover:-translate-y-1 hover:shadow-md hover:border-violet-400 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-850 dark:hover:border-violet-500">
          <div className="flex justify-center mb-2 text-lg transition duration-300 text-slate-500 group-hover:text-violet-600 dark:text-slate-400 dark:group-hover:text-violet-400">
            <FaLaptopCode />
          </div>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            1+
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Years Experience
          </p>
        </div>

        {/* Full-Stack */}
        <div className="p-4 text-center rounded-xl border transition-all duration-300 cursor-pointer group bg-slate-50 border-slate-200 text-slate-700 hover:-translate-y-1 hover:shadow-md hover:border-violet-400 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-850 dark:hover:border-violet-500">
          <div className="flex justify-center mb-2 text-lg transition duration-300 text-slate-500 group-hover:text-violet-600 dark:text-slate-400 dark:group-hover:text-violet-400">
            <FaCode />
          </div>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            Full-Stack
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Web Developer
          </p>
        </div>

        {/* IT Support */}
        <div className="p-4 text-center rounded-xl border transition-all duration-300 cursor-pointer group bg-slate-50 border-slate-200 text-slate-700 hover:-translate-y-1 hover:shadow-md hover:border-violet-400 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-850 dark:hover:border-violet-500">
          <div className="flex justify-center mb-2 text-lg transition duration-300 text-slate-500 group-hover:text-violet-600 dark:text-slate-400 dark:group-hover:text-violet-400">
            <FaTools />
          </div>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            IT Support
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Troubleshooting
          </p>
        </div>

      </div>
    </section>
  )
}
