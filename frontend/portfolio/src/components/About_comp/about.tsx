import React from "react";
import "./about.css";
import type { HeaderProps } from "../../interface";

const AboutComp:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {

    return(

        <>
            
            <div className="aboutdivtitle">
                <h1 className={`h1text ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>WHAT I DO?</h1>
                <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>I build end-to-end features users love and teams can scale.</p>
            </div>
        </>
    )
}

export default AboutComp;