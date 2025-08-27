import React from "react";
import Skills_Comp from "../components/Skill_comp/skill_comp";
import type { HeaderProps } from "../interface";

export const Skills:React.FC<HeaderProps> = ({darkMode, setDarkMode}) =>{

    return(
        <>
            <Skills_Comp darkMode= {darkMode} setDarkMode = {setDarkMode}/>            
        </>
    )
};