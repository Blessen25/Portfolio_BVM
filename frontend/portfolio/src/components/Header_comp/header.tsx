import React, { useState } from "react";
import './header.css';
import type { HeaderProps } from "../../interface";
import type { NavId } from "../../App";


const HeaderComponent:React.FC<HeaderProps> = ({darkMode, setDarkMode, active, onNavClick}) => {

    const [activesidebar, setActivceSidebar] = useState(false);
    const handletogglebutton = () => {

        setDarkMode(!darkMode);
    }
    const handleSidebar = () => {

        setActivceSidebar(!activesidebar);
    }

    const handleNavClick = (id: NavId) => {
    
        if (onNavClick) {
            onNavClick(id);
        
        }
    };

    const handleNavClickSidebar = (id: NavId) => {
    
        if (onNavClick) {
            onNavClick(id);
            setActivceSidebar(!activesidebar);
        }
    };


    const navItems: { id: NavId; label: string }[] = [
        
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    const navItemSidebar = [

        { id: "home",    label: "Home",    icon: "fa-house" },
        { id: "about",   label: "About",   icon: "fa-user" },
        { id: "skills",  label: "Skills",  icon: "fa-id-badge" },
        { id: "projects",label: "Projects",icon: "fa-folder-open" },
        { id: "contact", label: "Contact", icon: "fa-envelope" }
    ]


    const modeClass = darkMode ? "darkmodetextatag" : "lightmodetextatag";

    return(

        <>
            <div className={`maincontainer headermaincontainer ${darkMode ? "darkmode" : "lightmode"}`}>
                <div className={`childcontainer header`}>
                    <div className="headerdirstdiv">
                        <i className={`fa-solid fa-align-left iconfont ${darkMode? `${activesidebar ? 'left-color-dark-hover' : 'left-color-dark'}`
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
                        {navItems.map(({ id, label }) =>
                        (

                           <a key={id} href={`#${id}`} className={`${modeClass} ${active === id ? "atagactive" : ""}`} onClick={(e) => { e.preventDefault(); handleNavClick(id); }} aria-current={active === id ? "page" : undefined}>{label}</a>
                        ))}
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

                    {navItemSidebar.map(({ id, label, icon }) => (

                        <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); handleNavClickSidebar(id); }} className={`sidebaratag ${darkMode ? "sidebaratagdark" : "sidebarataglight"} ${active === id? darkMode ? "sidebaractivedark" : "sidebaractivelight" : ""}`} aria-current={active === id ? "page" : undefined}><i className={`fa-regular ${icon} sidebaricon iconfont`}></i> <span className="sidebartext">{label}</span></a>
                    ))}
                </div>
            </>
        )}
        </>
    )
}

export { HeaderComponent };