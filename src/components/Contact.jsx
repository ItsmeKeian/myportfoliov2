export default function Contact() {
  return (
    <section
      id="contact"
      className="p-5 bg-white rounded-xl border shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6"
    >
      <h2 className="mb-4 text-lg font-semibold">Contact</h2>

      <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
        <p>
          <span className="font-medium">📞 Phone:</span>{" "}
          <a
            href="tel:+639537882603"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            0953 788 2603
          </a>
        </p>

        <p>
          <span className="font-medium">📍 Location:</span> Borongan City,
          Eastern Samar
        </p>

        <p>
          <span className="font-medium">✉️ Email:</span>{" "}
          <a
            href="mailto:gacilloskeian02@gmail.com"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            gacilloskeian02@gmail.com
          </a>
        </p>

        <p>
          <span className="font-medium">🔗 LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/keian-gacillos-787b6b34b"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            linkedin.com/in/keian-gacillos
          </a>
        </p>

        <p>
          <span className="font-medium">💻 GitHub:</span>{" "}
          <a
            href="https://github.com/ItsmeKeian"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            github.com/ItsmeKeian
          </a>
        </p>

        <p>
          <span className="font-medium">🌐 Portfolio:</span>{" "}
          <a
            href="https://www.keiangacillos.online"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            keiangacillos.online
          </a>
        </p>
      </div>

      <div className="flex flex-col gap-2 mt-5 sm:flex-row">
        <a
          href="mailto:gacilloskeian02@gmail.com"
          className="inline-flex justify-center items-center px-4 py-2 w-full text-sm font-medium text-white rounded-lg transition bg-slate-900 hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white sm:w-auto"
        >
          Send Email
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex justify-center items-center px-4 py-2 w-full text-sm font-medium bg-white rounded-lg border transition border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 sm:w-auto"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
