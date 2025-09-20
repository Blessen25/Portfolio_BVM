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
                        <p className={`ptext footertext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam cum eius rem nesciunt quibusdam quo, unde repellat repellendus tempora odio quas, dolores illum velit, non earum minus molestias labore facilis!</p>
                    </div>
                    <div className="footerdivlinks">
                        <p className={`ptext footertext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`} style={{ textDecoration:'underline', fontWeight:'bold'}} >QUICK LINKS</p>
                        <a href="#" className={`ptext footerlinktext ${darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext footerlinktextlight'}`}>Home</a>
                        <a href="#" className={`ptext footerlinktext ${darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext'}`}>About</a>
                        <a href="#" className={`ptext footerlinktext ${darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext'}`}>Skills</a>
                        <a href="#" className={`ptext footerlinktext ${darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext'}`}>Projects</a>
                        <a href="#" className={`ptext footerlinktext ${darkMode ? 'darkmodetext footerlinktextdark' : 'lightmodetext'}`}>Contact</a>
                    </div>
                    <div className="footerdivlinks">
                        <p className={`ptext footertext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`} style={{ textDecoration:'underline', fontWeight:'bold'}} >CONTACT</p>
                        <a href="#" target="_blank" className={`ptext footerlinktext footercontact ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}><i className="fa-solid fa-envelope"></i>blessenvinoymathew25@gmail.com</a>
                        <a href="#" target="_blank" className={`ptext footerlinktext footercontact ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}><i className="fa-solid fa-phone"></i>+61 416416738</a>
                        <a href="#" target="_blank" className={`ptext footerlinktext footercontact ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}><i className="fa-solid fa-phone"></i>+91 9400260187</a>
                    </div>
                    <div className="footerdivlinks">
                        <p className={`ptext footertext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`} style={{ textDecoration:'underline', fontWeight:'bold'}} >SOCIAL</p>
                        <div className="socialdiv">
                            <a href="#" target="_blank" ><i className="fa-brands fa-github"></i></a>
                            <a href="#" target="_blank" ><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#" target="_blank" ><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" target="_blank" ><i className="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer_Comp;