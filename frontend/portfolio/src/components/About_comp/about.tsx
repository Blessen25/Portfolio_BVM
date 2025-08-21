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
                    <AboutcardComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
                    <AboutcardComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
                    <AboutcardComponent darkMode={darkMode} setDarkMode={setDarkMode}/>

                </div>
            </div>
        </>
    )
}

export default AboutComp;