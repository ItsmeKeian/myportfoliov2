export default function Experience() {
  return (
    <section className="rounded-xl bg-white dark:bg-slate-900 p-6 shadow">
      <h2 className="font-semibold mb-4">Experience</h2>

      <div className="space-y-6 text-sm">

        {/* Cebu Belmont Inc */}
        <div>
          <p className="font-medium">Cebu Belmont Inc.</p>
          <p className="text-slate-600 dark:text-slate-400">
            Web Developer · March 2025 – October 2025
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Designed, developed, and maintained responsive websites</li>
            <li>Used HTML, CSS, JavaScript, PHP, and MySQL</li>
            <li>Performed website maintenance and bug fixing</li>
            <li>Optimized websites for mobile and performance</li>
            <li>Handled database management and system backups</li>
          </ul>
        </div>

        {/* ESPIO */}
        <div>
          <p className="font-medium">
            Eastern Samar Provincial Information Office
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            IT Support / Media Support · July 2024 – Jan 2025
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Website management and content updates</li>
            <li>IT support and troubleshooting</li>
            <li>Video editing, photography, and media assistance</li>
            <li>Coverage of provincial government events</li>
          </ul>
        </div>

        {/* Infiniteloop */}
        <div>
          <p className="font-medium">
            Infiniteloop Software Development Services
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            Working Student / Programmer · Oct 2022 – Sept 2023
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Created graphic designs and system layouts</li>
            <li>Developed system programs based on client requirements</li>
            <li>Assisted in client meetings and university visits</li>
            <li>Collaborated with developers for knowledge sharing</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
