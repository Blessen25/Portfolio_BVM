import React from "react";
import './footer.css';
import type { HeaderProps } from "../../interface";

const Footer_Comp: React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {

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
                        <a href="#" className={`ptext footerlinktext ${darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext footerlinktextlight'}`}>Home</a>
                        <a href="#" className={`ptext footerlinktext ${darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext footerlinktextlight'}`}>About</a>
                        <a href="#" className={`ptext footerlinktext ${darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext footerlinktextlight'}`}>Skills</a>
                        <a href="#" className={`ptext footerlinktext ${darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext footerlinktextlight'}`}>Projects</a>
                        <a href="#" className={`ptext footerlinktext ${darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext footerlinktextlight'}`}>Contact</a>
                    </div>
                    <div className="footerdivlinks">
                        <p className={`ptext footertext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`} style={{ textDecoration:'underline', fontWeight:'bold'}} >CONTACT</p>
                        <a href="#" target="_blank" className={`ptext footerlinktext footercontact ${darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext footerlinktextlight'}`}><i className="fa-solid fa-envelope"></i>blessenvinoymathew25@gmail.com</a>
                        <a href="#" target="_blank" className={`ptext footerlinktext footercontact ${darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext footerlinktextlight'}`}><i className="fa-solid fa-phone"></i>+61 416416738</a>
                        <a href="#" target="_blank" className={`ptext footerlinktext footercontact ${darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext footerlinktextlight'}`}><i className="fa-solid fa-phone"></i>+91 9400260187</a>
                    </div>
                    <div className="footerdivlinks">
                        <p className={`ptext footertext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`} style={{ textDecoration:'underline', fontWeight:'bold'}} >SOCIAL</p>
                        <div className="socialdiv">
                            <a href="#" target="_blank" className={`${darkMode ? 'sociallinkfooterdark' : 'sociallinkfooterlight'}`}><i className="fa-brands fa-github sociallinkfooter"></i></a>
                            <a href="#" target="_blank" className={`${darkMode ? 'sociallinkfooterdark' : 'sociallinkfooterlight'}`}><i className="fa-brands fa-linkedin sociallinkfooter"></i></a>
                            <a href="#" target="_blank" className={`${darkMode ? 'sociallinkfooterdark' : 'sociallinkfooterlight'}`}><i className="fa-brands fa-instagram sociallinkfooter"></i></a>
                            <a href="#" target="_blank" className={`${darkMode ? 'sociallinkfooterdark' : 'sociallinkfooterlight'}`}><i className="fa-brands fa-facebook sociallinkfooter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className= {`maincontainer footermaincontainer ${darkMode ? 'darkmode' : 'lightmode'}`}>
                <div className="childcontainer footerhrdiv">
                    <div className={`footerhr ${darkMode ? 'darkmodehr' : 'lightmodehr'}`}/>
                    <p className={`ptext footertext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Copyright © 2023 Blessen Vinoy Mathew</p>
                </div>
            </div>


        </>
    )
}

export default Footer_Comp;