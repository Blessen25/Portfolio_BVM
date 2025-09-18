import React from "react";
import Footer_Comp from "../components/footer_comp/footer";
import type { HeaderProps } from "../interface";

const Footer:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {

    return(

        <Footer_Comp darkMode={darkMode} setDarkMode={setDarkMode}/>
    )
}

export default Footer;