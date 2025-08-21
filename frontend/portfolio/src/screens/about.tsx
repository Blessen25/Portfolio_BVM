import React from "react";
import AboutComp from "../components/About_comp/about";
import type { HeaderProps } from "../interface";

const About:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {

    return(

        <>

            <AboutComp darkMode = {darkMode} setDarkMode = {setDarkMode}/>
        </>
    )
}

export default About;