import React from "react";
import "./about.css";
import type { HeaderProps } from "../../interface";
import { AboutcardComponent, AutoTypeAbout } from "../extras";

const AboutComp:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {

    return(

        <>
            
            <div className="aboutdivtitle">
                <h1 className={`h1text ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}><AutoTypeAbout/></h1>
                <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>I build end-to-end features users love and teams can scale.</p>
                <div className="aboutcarddivparent">
                    <AboutcardComponent darkMode={darkMode} setDarkMode={setDarkMode} className="fa-solid fa-laptop-code" h1text="Front-End Craft" ptext="Pixel-perfect, fast, and accessible UIs."/>
                    <AboutcardComponent darkMode={darkMode} setDarkMode={setDarkMode} className="fa-solid fa-server" h1text="Back-End & APIs" ptext="Reliable services that are easy to consume."/>
                    <AboutcardComponent darkMode={darkMode} setDarkMode={setDarkMode} className="fa-solid fa-database" h1text="Data & Persistence" ptext="Well-modeled data, clear queries, safe migrations."/>
                </div>
            </div>
        </>
    )
}

export default AboutComp;