const certifications = [
    {
      title:
        "Facilitator during the Seminar-Workshop on Visualization Towards Methodological Skills in Research",
      date: "April 2023",
    },
    {
      title: "Seminar Workshop on Website User Interface Designing",
      date: "September 2023",
    },
    {
      title:
        "Facilitator during the Seminar-Workshop on Data Science and Big Data Analytics with Data Visualization and Website Integration",
      date: "December 2023",
    },
  ];
  
  export default function Certifications() {
    return (
      <section
        id="certifications"
        className="p-5 bg-white rounded-xl border shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6"
      >
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Certifications & Seminars</h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Workshops and seminars that strengthened my technical and professional
            skills.
          </p>
        </div>
  
        <div className="space-y-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="p-4 rounded-lg border border-gray-200 transition bg-slate-50 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                {cert.title}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  