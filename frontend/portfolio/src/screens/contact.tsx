import React from "react";
import type { HeaderProps } from "../interface";
import ContactComp from "../components/Contact_comp/contacts";

const Contact:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {

    return(
        <>
            <ContactComp darkMode={darkMode} setDarkMode={setDarkMode}/>
        </>
    )
}

export default Contact;