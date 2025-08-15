import React, { useState } from "react";
import './header.css';

const HeaderComponent = () => {

    const [activesidebar, setActivceSidebar] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const handletogglebutton = () => {

        setDarkMode(!darkMode);
    }
    const handleSidebar = () => {

        setActivceSidebar(!activesidebar);
    }
    return(

        <>
            <div className="maincontainer headermaincontainer darkmode">
                <div className="childcontainer header">
                    <div className="headerdirstdiv">
                        <i className={`fa-solid fa-align-left ${activesidebar ? 'left-color-dark-hover' : 'left-color-dark'}`} onClick={() => {handleSidebar();}}></i>
                        <a href="#" className="imglogosecond">
                            <img src="../public/assets/images/logo/bvm_logo_dark_small.png" alt="Logo Image" />
                        </a>
                    </div>
                    <a href="#" className="imglogomain">
                        <img src="../public/assets/images/logo/bvm_logo_dark_large.png" alt="Logo Image" />
                    </a>
                    <div className="navlinks">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Experience</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className={`${darkMode ? 'togglebuttondark' : 'togglebuttonlight'} togglebutton`} onClick={() => {handletogglebutton();}}>
                        <div className={`${darkMode ? 'togglerounddark' : 'toggleroundlight'} toggleround`}></div>
                        <div className={`${darkMode ? 'star star1' : ''}`}></div>
                        <div className={`${darkMode ? 'star star2' : ''}`}></div>
                        <div className={`${darkMode ? 'star star3' : ''}`}></div>
                        <div className={`${darkMode ? 'star star4' : ''}`}></div>
                        <div className={`${darkMode ? 'star star5' : ''}`}></div>
                    </div>
                </div>
            </div>
        {activesidebar && (
            <>

                <div className="sidebaroverlay"></div>
                <div className="sidebardiv darkmode">
                    <a href="#" className="sidebaratag sidebaractivedark">
                        <i className="fa-regular fa-house sidebaricon"></i>
                        <span className="sidebartext">Home</span>
                    </a>
                    <a href="#" className="sidebaratag">
                        <i className="fa-regular fa-user sidebaricon"></i>
                        <span className="sidebartext">About</span>
                    </a>
                    <a href="#" className="sidebaratag">
                        <i className="fa-regular fa-id-badge sidebaricon"></i>
                        <span className="sidebartext">Experience</span>
                    </a>
                    <a href="#" className="sidebaratag">
                        <i className="fa-regular fa-folder-open sidebaricon"></i>
                        <span className="sidebartext">Projects</span>
                    </a>
                    <a href="#" className="sidebaratag">
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