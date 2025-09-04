import React from "react";
import './project.css';
import type { HeaderProps } from "../../interface";

const Project_Comp:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {

    return (
        <>
            <div className={`projectdiv ${darkMode ? 'darkmodeaboutcard' : 'lightmodeaboutcard'}`}>
            </div>
        </>
    )
}

export default Project_Comp;