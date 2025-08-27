import React from "react";
import "./skill.css";
import type { HeaderProps } from "../../interface";
import { AutoTypeSkills } from "../extras";

const Skills_Comp:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {

    return(
        <>
            <div className="skillparentdiv">
                    <h1 className={`h1text ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}><AutoTypeSkills/></h1>
                    
            </div>
        </>
    )
}

export default Skills_Comp;