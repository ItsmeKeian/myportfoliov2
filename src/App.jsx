import { useEffect, useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import FeaturedCTA from "./components/FeaturedCTA";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");

    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="relative min-h-screen text-gray-900 bg-gray-50 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100">
      
      {/* Background Effects */}
      <div className="overflow-hidden absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-[-250px] left-[-250px] h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-250px] right-[-250px] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* PAGE WRAPPER (FADE ALL) */}
      <div className="fade-up">
        
        {/* Header */}
        <Header dark={dark} setDark={setDark} />

        {/* Main Layout */}
        <main className="grid grid-cols-1 gap-3 px-4 py-6 w-full sm:px-6 lg:px-10 md:grid-cols-3 md:gap-3">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 md:col-span-2">
            <About />
            <TechStack />
            <Services />
            <Projects />
            
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6 h-fit">
          <FeaturedCTA />
          <Experience />
          <Education />
          <Certifications />
            
            <Contact />
            
          </aside>

        </main>

        {/* Footer */}
        <footer className="py-6 text-xs text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Keian Gacillos. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
