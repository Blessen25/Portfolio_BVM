import React, { useState } from "react";
import "./contact.css";
import type { HeaderProps } from "../../interface";
import { AutoTypeContacts, ButtonComp,  TimeHHmm } from "../extras";

const ContactComp:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {
    const [iswhatsappOpen, setIswhatsappOpen] = useState(true);
    return(

        <>
            <div className="contactdiv">
                <h1 className={`h1text ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}><AutoTypeContacts/></h1>
                <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Open to roles, collaborations, and consultations.</p>
                <div className={`contactmaindiv`}>
                    <div className={`whatsappdiv ${darkMode ? 'darkmodeaboutcard' : 'lightmodeaboutcard'} ${iswhatsappOpen && darkMode ? 'whatsappOpendark whatappOpenCommon' : 'whatsappOpenlight whatappOpenCommon'}`} > 
                        <div className={`whatsappheader whatsappheaderlight`}>

                        </div>
                        <div className="whatsappcontent">
                            <div className="whatsappptextcontent">
                                <p className="ptext">Hi There 👋</p>
                                <p className="ptext">How can i help you?</p>
                                <TimeHHmm />
                            </div>
                        </div>
                        <div className="whatsappbuttondiv">
                                <a href="#" target="_blank" className={`whatsappbutton buttonnormal whatsappbuttonlight`}><i className="fa-brands fa-whatsapp iconfont "></i>Chat on Whatsapp</a>
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