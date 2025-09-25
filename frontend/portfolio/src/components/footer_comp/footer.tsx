import React from "react";
import './footer.css';
import type { HeaderProps } from "../../interface";
import type { NavId } from "../../App";

const Footer_Comp: React.FC<HeaderProps> = ({darkMode, active, onNavClick}) => {


    const footermode = darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext footerlinktextlight'
    
    const navItems: { id: NavId; label: string }[] = [
            
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
        ];
    
    const handleNavClick = (id: NavId) => {

        if (onNavClick) {

            onNavClick(id);
        }
    }
    return(
        
        <>

            <div className= {`maincontainer footermaincontainer ${darkMode ? 'darkmode' : 'lightmode'}`}>
                <div className="childcontainer footerdiv">
                    <div className="footerdivdetails">
                        <h1 className={`h1mediumtext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>BLESSEN VINOY MATHEW</h1>
                        <p className={`ptext footertext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Full-stack developer focused on crafting fast, accessible, and reliable web applications. I specialize in modern front-end engineering and dependable back-end APIs, and I’m open to both freelance engagements and full-time roles.</p>
                    </div>
                    <div className="footerdivlinks">
                        <p className={`ptext footertext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`} style={{ textDecoration:'underline', fontWeight:'bold'}} >QUICK LINKS</p>
                        {navItems.map(({ id, label }) => 
                        (

                            <a key={id} href="#" className={`ptext footerlinktext ${footermode} ${active === id ? 'atagactive' : ''}`} onClick={(e) => {e.preventDefault(); handleNavClick(id);}}>{label}</a>
                        ))}
                    </div>
                    <div className="footerdivlinks">
                        <p className={`ptext footertext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`} style={{ textDecoration:'underline', fontWeight:'bold'}} >CONTACT</p>
                        <a href="mailto:blessenvinoymathew25@gmail.com" target="_blank" className={`ptext footerlinktext footercontact ${darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext footerlinktextlight'}`}><i className="fa-solid fa-envelope"></i>blessenvinoymathew25@gmail.com</a>
                        <a href="tel:+61416416738" target="_blank" className={`ptext footerlinktext footercontact ${darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext footerlinktextlight'}`}><i className="fa-solid fa-phone"></i>+61 416416738</a>
                        <a href="tel:+919400260187" target="_blank" className={`ptext footerlinktext footercontact ${darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext footerlinktextlight'}`}><i className="fa-solid fa-phone"></i>+91 9400260187</a>
                    </div>
                    <div className="footerdivlinks">
                        <p className={`ptext footertext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`} style={{ textDecoration:'underline', fontWeight:'bold'}} >SOCIAL</p>
                        <div className="socialdiv">
                            <a href="https://github.com/Blessen25" target="_blank" className={`${darkMode ? 'sociallinkfooterdark' : 'sociallinkfooterlight'}`}><i className="fa-brands fa-github sociallinkfooter"></i></a>
                            <a href="https://www.linkedin.com/in/blessen-vinoy-mathew-21881b1a4/" target="_blank" className={`${darkMode ? 'sociallinkfooterdark' : 'sociallinkfooterlight'}`}><i className="fa-brands fa-linkedin sociallinkfooter"></i></a>
                            <a href="https://www.instagram.com/blessen_vinoy_/" target="_blank" className={`${darkMode ? 'sociallinkfooterdark' : 'sociallinkfooterlight'}`}><i className="fa-brands fa-instagram sociallinkfooter"></i></a>
                            <a href="https://www.facebook.com/blessenvinoy.mathew/" target="_blank" className={`${darkMode ? 'sociallinkfooterdark' : 'sociallinkfooterlight'}`}><i className="fa-brands fa-facebook sociallinkfooter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className= {`maincontainer footermaincontainer ${darkMode ? 'darkmode' : 'lightmode'}`}>
                <div className="childcontainer footerhrdiv">
                    <div className={`footerhr ${darkMode ? 'darkmodehr' : 'lightmodehr'}`}/>
                    <p className={`ptext footertext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Copyright © 2025 Blessen Vinoy Mathew</p>
                </div>
            </div>


        </>
    )
}

export default Footer_Comp;