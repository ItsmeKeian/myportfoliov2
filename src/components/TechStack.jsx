export default function TechStack() {
  return (
    <section className="p-6 bg-white rounded-xl shadow dark:bg-slate-900">
      <h2 className="mb-4 font-semibold">Skills & Tools</h2>

      <div className="space-y-4 text-sm">

        <div>
          <p className="mb-2 font-medium">Programming & Web</p>
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "SQL", "PHP", "MySQL"].map(skill => (
              <span key={skill} className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 font-medium">Software & Tools</p>
          <div className="flex flex-wrap gap-2">
            {[ "Cursor", "GitHub", "Microsoft Office", "CapCut", "Visual Studio Code"].map(tool => (
              <span key={tool} className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 font-medium">Technical Skills</p>
          <div className="flex flex-wrap gap-2">
            {["IT Support", "Troubleshooting", "Website Management", "Data Entry"].map(skill => (
              <span key={skill} className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
