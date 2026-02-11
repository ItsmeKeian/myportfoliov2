const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Bootstrap"],
  Backend: ["PHP", "AJAX", "Node.js"],
  Database: ["MySQL", "SQL", "Oracle (Basic)"],
  Tools: ["VS Code", "Cursor", "Git", "GitHub"],
  Platforms: ["WordPress", "Hostinger", "Canva", "CapCut"],
};

export default function TechStack() {
  return (
    <section
      id="skills"
      className="p-5 bg-white rounded-xl border shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6"
    >
      <h2 className="mb-4 text-lg font-semibold">Skills & Tools</h2>

      <div className="space-y-5 text-sm">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <p className="mb-2 text-sm font-medium text-slate-800 dark:text-slate-200">
              {category}
            </p>

            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs rounded-full border border-gray-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
