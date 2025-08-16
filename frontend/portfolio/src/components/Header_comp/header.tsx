import React, { useState } from "react";
import './header.css';
import type { HeaderProps } from "../../interface";


const HeaderComponent:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {

    const [activesidebar, setActivceSidebar] = useState(false);
    const handletogglebutton = () => {

        setDarkMode(!darkMode);
    }
    const handleSidebar = () => {

        setActivceSidebar(!activesidebar);
    }
    return(

        <>
            <div className={`maincontainer headermaincontainer ${darkMode ? "darkmode" : "lightmode"}`}>
                <div className="childcontainer header">
                    <div className="headerdirstdiv">
                        <i className={`fa-solid fa-align-left ${darkMode? `${activesidebar ? 'left-color-dark-hover' : 'left-color-dark'}`
                                : `${activesidebar ? 'left-color-light-hover' : 'left-color-light'}`}`} onClick={() => {handleSidebar();}}></i>
                        <a href="#" className="imglogosecond">
                            {darkMode ? (
                                <>
                                    <img src="../assets/images/logo/bvm_logo_dark_small.png" alt="Logo Image" />
                                </>
                            ): (
                                <>
                                    <img src="../assets/images/logo/bvm_logo_light_small.png" alt="Logo Image" />
                                </>
                            )
                            }
                            
                        </a>
                    </div>
                    <a href="#" className="imglogomain">
                        {darkMode ? (
                            <>
                                <img src="../assets/images/logo/bvm_logo_dark_large.png" alt="Logo Image" />
                            </>
                        ) : (
                            <>
                               <img src="../assets/images/logo/bvm_logo_light_large.png" alt="Logo Image" />
                            </>
                        )}
                    </a>
                    <div className="navlinks">
                        <a href="#" className={`${darkMode ? 'darkmodetextatag' : 'lightmodetextatag'}`}>Home</a>
                        <a href="#" className={`${darkMode ? 'darkmodetextatag' : 'lightmodetextatag'}`}>About</a>
                        <a href="#" className={`${darkMode ? 'darkmodetextatag' : 'lightmodetextatag'}`}>Experience</a>
                        <a href="#" className={`${darkMode ? 'darkmodetextatag' : 'lightmodetextatag'}`}>Projects</a>
                        <a href="#" className={`${darkMode ? 'darkmodetextatag' : 'lightmodetextatag'}`}>Contact</a>
                    </div>
                    <div className={`${darkMode ? 'togglebuttondark' : 'togglebuttonlight'} togglebutton`} onClick={() => {handletogglebutton();}}>
                        <div className={`${darkMode ? 'togglerounddark' : 'toggleroundlight'} toggleround`}></div>
                        {darkMode ? (
                            <>
                                <div className="star star1"></div>
                                <div className="star star2"></div>
                                <div className="star star3"></div>
                                <div className="star star4"></div>
                                <div className="star star5"></div>
                            </>
                        ) : (
                            <>
                                <div className="cloud cloud1"></div>
                                <div className="cloud cloud2"></div>

                            </>
                        )
                        }
                    </div>
                </div>
            </div>
        {activesidebar && (
            <>

                <div className="sidebaroverlay"></div>
                <div className={`sidebardiv ${darkMode ? 'darkmode' : 'lightmode'}`}>
                    <a href="#" className={`sidebaratag ${darkMode ? 'sidebaratagdark sidebaractivedark' : 'sidebarataglight sidebaractivelight'} `}>
                        <i className="fa-regular fa-house sidebaricon"></i>
                        <span className="sidebartext">Home</span>
                    </a>
                    <a href="#" className={`sidebaratag ${darkMode ? 'sidebaratagdark' : 'sidebarataglight'} `}>
                        <i className="fa-regular fa-user sidebaricon"></i>
                        <span className="sidebartext">About</span>
                    </a>
                    <a href="#" className={`sidebaratag ${darkMode ? 'sidebaratagdark' : 'sidebarataglight'} `}>
                        <i className="fa-regular fa-id-badge sidebaricon"></i>
                        <span className="sidebartext">Experience</span>
                    </a>
                    <a href="#" className={`sidebaratag ${darkMode ? 'sidebaratagdark' : 'sidebarataglight'} `}>
                        <i className="fa-regular fa-folder-open sidebaricon"></i>
                        <span className="sidebartext">Projects</span>
                    </a>
                    <a href="#" className={`sidebaratag ${darkMode ? 'sidebaratagdark' : 'sidebarataglight'} `}>
                        <i className="fa-regular fa-envelope sidebaricon"></i>
                        <span className="sidebartext">Contact</span>
                    </a>
                </div>
            </>
        )}
        </>
    )
}

export { HeaderComponent };