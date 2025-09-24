import React from "react";
import Footer_Comp from "../components/footer_comp/footer";
import type { HeaderProps } from "../interface";

const Footer:React.FC<HeaderProps> = ({darkMode, setDarkMode, active, onNavClick}) => {

    return(

        <Footer_Comp darkMode={darkMode} setDarkMode={setDarkMode} active={active} onNavClick={onNavClick}/>
    )
}

export default Footer;