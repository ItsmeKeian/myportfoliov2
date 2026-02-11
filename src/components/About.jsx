export default function About() {
  return (
    <section
      id="about"
      className="p-5 bg-white rounded-xl border shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6"
    >
      <h2 className="mb-3 text-lg font-semibold">About Me</h2>

      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        I’m a BSIT graduate and aspiring Web Developer with hands-on experience
        in building responsive websites, interactive user interfaces, and
        database-driven web applications. I have worked on real projects using{" "}
        <span className="font-medium text-slate-900 dark:text-white">
          HTML, CSS, JavaScript, React, PHP, and MySQL
        </span>
        , and I enjoy solving problems through clean code and modern tools.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        I’m passionate about continuous learning, improving system performance,
        and creating user-friendly web experiences. I’m currently looking for
        opportunities as a{" "}
        <span className="font-medium text-slate-900 dark:text-white">
          Junior Web Developer / IT Support
        </span>{" "}
        where I can grow and contribute to a productive team.
      </p>

      {/* Quick highlights */}
      <div className="grid gap-3 mt-5 sm:grid-cols-3">
        <div className="p-3 text-center rounded-lg border bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            3+
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Years Experience
          </p>
        </div>

        <div className="p-3 text-center rounded-lg border bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            Full-Stack
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Web Development
          </p>
        </div>

        <div className="p-3 text-center rounded-lg border bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            IT Support
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Troubleshooting
          </p>
        </div>
      </div>
    </section>
  );
}
