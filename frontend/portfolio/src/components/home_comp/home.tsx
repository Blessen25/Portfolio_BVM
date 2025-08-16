import React from "react";
import "./home.css";
import type { HeaderProps } from "../../interface";
import { AutoType } from "../extras";


const HomeComponent:React.FC<HeaderProps> = ({darkMode , setDarkMode}) => {
    
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
                    <p className={`${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Hello I'm</p>
                    <h1 className={`${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Blessen Vinoy Mathew</h1>
                    <p className={`role-line ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>I’m a <AutoType /></p>
                </div>
            </div>
        </>
    )
}

export { HomeComponent };