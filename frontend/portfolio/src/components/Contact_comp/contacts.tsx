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
                    <div className={`whatsappdiv`}>
                        <img src={`${darkMode ? '../assets/images/projects/whatsappdark.jpg' : '../assets/images/projects/whatsapplight.jpg'}`} alt="Whatsapp pic" className="whatsappimg"/>
                        <div className={`whatsappheaderdiv ${darkMode ? 'whatsappdarkheader' : 'whatsapplightheader'}`}>
                            <div className="whatsappprofileround">
                                <img src="../assets/images/logo/imagetwo_light.jpg" alt="Whatsapp Profile" />
                            </div>
                            <div className="whatsappdetails">
                                <p className="h1smalltext">Blessen Vinoy Mathew</p>
                                <p className="whatsapptypicaltext">Typically Replies within 24 hours</p>
                            </div>
                        </div>
                    </div>
                    <div className={`contactusformdiv ${darkMode ? 'darkmodeaboutcard' : 'lightmodeaboutcard'}`}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactComp;