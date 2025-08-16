import React from "react";
import { HomeComponent } from "../components/home_comp/home";
import type { HeaderProps } from "../interface";

const Home:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {

    return(
        <>
            <HomeComponent darkMode = {darkMode} setDarkMode={setDarkMode}/>
        </>
    )
}

export default Home;