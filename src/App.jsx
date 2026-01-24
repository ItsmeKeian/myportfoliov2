import { useEffect, useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Education from "./components/Education";


export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header dark={dark} setDark={setDark} />

        <main className="max-w-8xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-6">
             <About />
            <Education />
            <TechStack />
            <Projects />
          </div>

          <div className="space-y-6">
            <Experience />
            <Contact />
          </div>
        </main>

        <footer className="text-center text-xs text-gray-500 dark:text-gray-400 py-6">
          © 2026 Keian Gacillos
        </footer>
      </div>
    </div>
  );
}
