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
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen text-gray-900 bg-gray-50 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100">
        <Header dark={dark} setDark={setDark} />

        <main className="grid grid-cols-1 gap-4 p-6 mx-auto max-w-8xl md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
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

        <footer className="py-6 text-xs text-center text-gray-500 dark:text-gray-400">
          © 2026 Keian Gacillos
        </footer>
      </div>
    </div>
  );
}
