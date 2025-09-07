import React from "react";
import './project.css';
import type { HeaderProps } from "../../interface";
import { AutoTypeProjects } from "../extras";

const Project_Comp:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {

    return (
        <>
            <div className='projectdiv'>
                <h1 className={`h1text ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}><AutoTypeProjects/></h1>
                <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>From concept to code: designs built, features shipped, results measured.</p>
                <div className="project-slider">
                    
                </div>
            </div>
        </>
    )
}

export default Project_Comp;