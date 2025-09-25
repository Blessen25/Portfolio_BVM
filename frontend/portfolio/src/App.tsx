import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Home from "./screens/home";
import Header from "./screens/header";
import About from "./screens/about";
import { Skills } from "./screens/skill";
import Project from "./screens/project";
import Experience from "./screens/experience";
import Contact from "./screens/contact";
import Footer from "./screens/footer";

export const SECTIONS = ["home","about","skills","experience","projects","contact"];
export type SectionId = typeof SECTIONS[number];

export type NavId = "home" | "about" | "skills" | "projects" | "contact";

const App = () => {
  
  const [darkmode, setdarkmode] = useState(true);
  const [active, setActive] = useState<NavId>("home");
  const sectionRefs = useMemo(
  () =>
    SECTIONS.reduce(
      (acc, id) => {
        acc[id] = React.createRef<HTMLDivElement>();
        return acc;
      },
      {} as Record<string, React.RefObject<HTMLDivElement | null>>
    ),
  []
);

  const handleNavClick = (id: string) => {

      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };


  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if ( visible?.target?.id) {

        const id = visible.target.id as SectionId;
        const navId: NavId = ( id === 'experience' ? 'skills' : id) as NavId;
        setActive(navId);
      }
    },
      { threshold: [0.6] } 
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <Header darkMode = {darkmode} setDarkMode={setdarkmode} onNavClick={handleNavClick} active={active}/>
      <div className={`maincontainer ${darkmode ? 'darkmode' : 'lightmode'}`}>
      <div className={`childcontainer`}>
         <section id="home" ref={sectionRefs.home} className="page-section">
            <Home darkMode={darkmode} setDarkMode={setdarkmode} onNavClick={() => handleNavClick("contact")}/>
          </section>
        <section id="about" ref={sectionRefs.about} className="page-section">
            <About darkMode={darkmode} setDarkMode={setdarkmode} />
          </section>
        <section id="skills" ref={sectionRefs.skills} className="page-section">
            <Skills darkMode={darkmode} setDarkMode={setdarkmode} />
          </section>
        <section id="experience" ref={sectionRefs.experience} className="page-section">
            <Experience darkMode={darkmode} setDarkMode={setdarkmode} />
          </section>
        <section id="projects" ref={sectionRefs.projects} className="page-section">
            <Project darkMode={darkmode} setDarkMode={setdarkmode} />
          </section>
        <section id="contact" ref={sectionRefs.contact} className="page-section">
            <Contact darkMode={darkmode} setDarkMode={setdarkmode} />
          </section>
      </div>
      </div>
      <Footer darkMode={darkmode} setDarkMode={setdarkmode} active={active} onNavClick={handleNavClick}/>
    </>
  )
}

export default App;