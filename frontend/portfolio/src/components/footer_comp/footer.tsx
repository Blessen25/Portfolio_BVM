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
                        <a href="#" className={`ptext footerlinktext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Home</a>
                        <a href="#" className={`ptext footerlinktext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>About</a>
                        <a href="#" className={`ptext footerlinktext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Skills</a>
                        <a href="#" className={`ptext footerlinktext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Projects</a>
                        <a href="#" className={`ptext footerlinktext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer_Comp;