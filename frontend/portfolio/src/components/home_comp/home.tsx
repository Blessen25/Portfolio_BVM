import React from "react";
import "./home.css";
import type { HeaderProps } from "../../interface";
import { AutoType, ButtonComp } from "../extras";


const HomeComponent:React.FC<HeaderProps> = ({darkMode , setDarkMode, onNavClick}) => {
    
    return(
        <>
            <div className="homemaindiv">
                <div className="homeimageborder">
                    <div className={`border-spin ${darkMode ? 'border-spindark' : 'border-spinlight'}`}></div>
                    <div className="homemainimage">
                        <img src={`${darkMode ? '../assets/images/logo/imagetwo_dark.jpg' : '../assets/images/logo/imagetwo_light.jpg' }`} alt="Profile Pic" />
                    </div>
                </div>
                <div className="homemaindetails">
                    <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Hello I'm</p>
                    <h1 className={`h1text ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Blessen Vinoy Mathew</h1>
                    <p className={`role-line ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>I’m a <AutoType /></p>
                    <div className="buttondiv">
                        <ButtonComp text="Download CV" target="_blank" hrefroute="../assets/files/Blessen_Resume_IT.pdf" className={`${darkMode ? 'darkmodebutton' : 'lightmodebutton'}`}/>
                        <ButtonComp text="Contact Info" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`} onClick={() => onNavClick}/>
                    </div>
                    <div className="socialdivhome">
                        <a href="https://github.com/Blessen25" target="_blank">
                            <i className={`fa-brands fa-github iconfont ${darkMode ? 'socialiconsdark' : 'socialiconslight'}`}></i>
                        </a>
                        <a href="https://www.linkedin.com/in/blessen-vinoy-mathew-21881b1a4/" target="_blank">
                            <i className={`fa-brands fa-linkedin iconfont ${darkMode ? 'socialiconsdark' : 'socialiconslight'}`}></i>
                        </a>
                        <a href="https://www.instagram.com/blessen_vinoy_/" target="_blank">
                            <i className={`fa-brands fa-instagram iconfont ${darkMode ? 'socialiconsdark' : 'socialiconslight'}`}></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export { HomeComponent };