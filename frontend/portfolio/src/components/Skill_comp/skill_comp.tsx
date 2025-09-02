import React from "react";
import "./skill.css";
import type { HeaderProps, Skill } from "../../interface";
import { AutoTypeSkills, SkillscardComponent } from "../extras";

const Skills_Comp:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {

     const frontEnd: Skill[] = [

    { name: 'HTML' , level: 'Advanced' },
    { name: 'CSS' , level: 'Advanced' },
    { name: 'JavaScript' , level: 'Intermediate' },
    { name: 'TypeScript' , level: 'Intermediate' },
    { name: 'React' , level: 'Intermediate' },
    { name: 'SCSS', level: 'Beginner'},
    { name: 'Bootstrap', level: 'Beginner'}

  ]

  const Backend: Skill[] = [

    { name : 'Python', level: 'Advanced'},
    { name : 'Django', level: 'Intermediate'},
    { name : 'SQL', level: 'Intermediate'},
    { name : 'Laravel', level: 'Beginner'},

  ]
    return(
        <>
            <div className="skillparentdiv">
                <h1 className={`h1text ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}><AutoTypeSkills/></h1>
                <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>The languages, frameworks, and tools behind my work.</p>
                <div className="skillchilddiv">
                    <SkillscardComponent darkMode={darkMode} setDarkMode={setDarkMode} h1text="Front-End Development" items={frontEnd}/>
                    <SkillscardComponent darkMode={darkMode} setDarkMode={setDarkMode} h1text="Back-End Development" items={Backend}/>
                </div>
            </div>
        </>
    )
}

export default Skills_Comp;