import React from "react";
import './footer.css';
import type { HeaderProps } from "../../interface";

const Footer_Comp: React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {

    return(
        
        <>

            <div className= {`maincontainer footermaincontainer ${darkMode ? 'darkmode' : 'lightmode'}`}>
                <div className="childcontainer footerdiv">
                    <div className="footerdivdetails">
                        <h1 className={`h1mediumtext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Blessen Vinoy Mathew</h1>
                        <p className={`ptext footertext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam cum eius rem nesciunt quibusdam quo, unde repellat repellendus tempora odio quas, dolores illum velit, non earum minus molestias labore facilis!</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Footer_Comp;