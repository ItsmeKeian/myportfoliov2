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
          and an aspiring{" "}
          <span className="font-medium text-slate-900 dark:text-white">
            Full-Stack Web Developer
          </span>{" "}
          with hands-on experience in building responsive websites, interactive
          user interfaces, and database-driven web applications.
        </p>

        <p>
          I have worked on real projects using{" "}
          <span className="font-medium text-slate-900 dark:text-white">
            HTML, CSS, JavaScript, React, PHP, and MySQL
          </span>{" "}
          and I enjoy solving technical problems through clean code, efficient
          debugging, and user-focused design. I also have experience in website
          maintenance such as updating content, fixing layout issues, and
          improving performance across different browsers and devices.
        </p>

        <p>
          I’m familiar with tools and platforms such as{" "}
          <span className="font-medium text-slate-900 dark:text-white">
            Tailwind CSS, Git, GitHub, VS Code, WordPress, Hostinger, and jQuery
          </span>
          , and I continuously explore modern development practices to improve my
          skills and deliver better solutions.
        </p>

        <p>
          I’m currently looking for opportunities as a{" "}
          <span className="font-medium text-slate-900 dark:text-white">
            Junior Web Developer / IT Support
          </span>{" "}
          where I can grow professionally, contribute to a collaborative team,
          and gain more real-world experience in building and supporting web
          systems.
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
            3+
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
            Web Development
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
