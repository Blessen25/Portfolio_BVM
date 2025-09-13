import React from "react";
import "./contact.css";
import type { HeaderProps } from "../../interface";
import { AutoTypeContacts } from "../extras";

const ContactComp:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {

    return(

        <>
            <div className="contactdiv">
                <h1 className={`h1text ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}><AutoTypeContacts/></h1>
                <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Open to roles, collaborations, and consultations.</p>
                <div className={`contactmaindiv`}>
                    <div className={`whatsappdiv ${darkMode ? 'darkmodeaboutcard' : 'lightmodeaboutcard'}`} >
                        
                    </div>
                    <div className={`contactusformdiv ${darkMode ? 'darkmodeaboutcard' : 'lightmodeaboutcard'}`}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactComp;