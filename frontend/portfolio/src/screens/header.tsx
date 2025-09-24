import React from "react";
import { HeaderComponent } from "../components/Header_comp/header";
import type { HeaderProps } from "../interface";

const Header:React.FC<HeaderProps> = ({darkMode, setDarkMode, active, onNavClick}) => {

    return( 
        <>
        
            <HeaderComponent darkMode = {darkMode} setDarkMode = {setDarkMode} active={active} onNavClick={onNavClick}/>
        </>
    )
}

export default Header;