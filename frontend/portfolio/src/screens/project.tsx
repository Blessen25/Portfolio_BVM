import React from "react";
import type { HeaderProps } from "../interface";
import Project_Comp from "../components/Project_comp/project";
const Project:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {

    return (
        
        <>
         <Project_Comp darkMode= {darkMode} setDarkMode={setDarkMode}/>
        </>
    )
}

export default Project