import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaBolt,
  FaVideo,
} from "react-icons/fa"

import {
  SiTailwindcss,
  SiMysql,
  SiOracle,
  SiCanva,
  SiNodedotjs,
  SiHostinger,
} from "react-icons/si"

import { TbBrandVscode } from "react-icons/tb"


const skills = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript (ES6+)", icon: <FaJs /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
  ],

  Backend: [
    { name: "PHP", icon: <FaPhp /> },
    { name: "AJAX", icon: <FaBolt /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
  ],

  Database: [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Oracle (Basic)", icon: <SiOracle /> },
  ],

  Tools: [
    { name: "VS Code", icon: <TbBrandVscode /> },
    { name: "Cursor", icon: <TbBrandVscode /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ],

  Platforms: [
    { name: "WordPress", icon: <FaWordpress /> },
    { name: "Hostinger", icon: <SiHostinger /> },
    { name: "Canva", icon: <SiCanva /> },
    { name: "CapCut", icon: <FaVideo /> },
  ],
}

export default function TechStack() {
  return (
    <section
      id="skills"
      className="p-5 bg-white rounded-xl border shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6"
    >
      <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
        Skills & Tools
      </h2>

      <div className="space-y-6 text-sm">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <p className="mb-3 text-sm font-medium text-slate-800 dark:text-slate-200">
              {category}
            </p>

            <div className="flex flex-wrap gap-3">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="flex gap-2 items-center px-4 py-2 text-sm rounded-xl border transition-all duration-300 cursor-pointer group bg-slate-50 border-slate-200 text-slate-700 hover:-translate-y-1 hover:shadow-md hover:border-violet-400 hover:bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-850 dark:hover:border-violet-500"
                >
                  <span className="text-lg transition duration-300 text-slate-500 group-hover:text-violet-600 dark:text-slate-400 dark:group-hover:text-violet-400">
                    {item.icon}
                  </span>

                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
