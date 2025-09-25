import React from "react";
import { HomeComponent } from "../components/home_comp/home";
import type { HeaderProps } from "../interface";

const Home:React.FC<HeaderProps> = ({darkMode, setDarkMode, onNavClick}) => {

    return(
        <>
            <HomeComponent darkMode = {darkMode} setDarkMode={setDarkMode} onNavClick={onNavClick}/>
        </>
    )
}

export default Home;