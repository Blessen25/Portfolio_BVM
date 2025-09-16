import React, { useState } from "react";
import "./contact.css";
import type { HeaderProps } from "../../interface";
import { AutoTypeContacts, ButtonComp,  TimeHHmm } from "../extras";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const ContactComp:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {
    /* END OF VALIDATIONS */
    const [iswhatsappOpen, setIswhatsappOpen] = useState(true);
    const initialValues = {

        phone_number:"",
        country_code: "",
    }

    const handlePhoneChange = (e:any, value:any, name:any) => {

        console.log("Value", value);
        console.log("name", e);
        if(name === 'phone_number'){

            let splitMobile = e?.split(value?.dialCode);
            setData({

                ...data,
                country_code: value?.dialCode,
                phone_number: splitMobile?.[1] || "",
            });
        }
    }

    const [ data, setData ] = useState(initialValues);
    return(

        <>
            <div className="contactdiv">
                <h1 className={`h1text ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}><AutoTypeContacts/></h1>
                <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Open to roles, collaborations, and consultations.</p>
                <div className={`contactmaindiv`}>
                    <div className={`whatsappdiv ${darkMode ? 'darkmodeaboutcard' : 'lightmodeaboutcard'} ${iswhatsappOpen && darkMode ? 'whatsappOpendark whatappOpenCommon' : 'whatsappOpenlight whatappOpenCommon'}`} > 
                        <div className={`whatsappheader whatsappheaderlight`}>
                            <div className="whatsappdp">
                                <img src="../public/assets/images/logo/imagetwo_light.jpg" alt="Whatsapp dp" />
                            </div>
                            <div className="whatsappdetails">
                                <h1 className="h1smalltext">Blessen Vinoy Mathew</h1>
                                <p>Typically replies within 24 hours</p>
                            </div>
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
                        <h1 className={`h1mediumtext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`} style={{ textDecoration: "underline", textAlign: 'center'}}>MESSAGE ME</h1>
                        <form action="#" method="post" className="contactformdetails">
                            <div className="inputparentdiv">
                                <div className="inputchilddiv">
                                    <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>First Name</p>
                                    <input name="firstname" type="text" className={`inputfield ${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`} placeholder="Enter Your First Name" maxLength={20} />
                                </div>
                                <div className="inputchilddiv">
                                    <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Last Name</p>
                                    <input type="text" name="lastname" className={`inputfield ${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`} maxLength={20} placeholder="Enter Your Last Name" />
                                </div>
                            </div>
                            <div className="contactemaildiv">
                                <div className="inputparentdiv">
                                    <div className="inputchilddiv">
                                        <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Email Id</p>
                                        <input type="text" name="emailid" className={`inputfield ${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`} placeholder="Enter Your Email Id" maxLength={50} />
                                    </div>
                                    <div className="inputchilddiv">
                                        <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Phone Number</p>
                                        <PhoneInput country={'au'}
                                            value={`${data.country_code}${data.phone_number}`}
                                            onChange={(e,phone) => handlePhoneChange(e,phone,"phone_number")}
                                            inputClass={`${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`}
                                            buttonClass={`${darkMode ? 'darkmodedropdown' : 'lightmodedropdown'}`}
                                            dropdownClass={`${darkMode ? 'darkmodeflagdropdown' : 'lightmodeflagdropdown'}`}
                                            />
                                       </div>
                                </div>
                            </div>
                            <div className="subjectdiv">
                                <div className="inputchilddiv">
                                 <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Subject</p>
                                 <input type="text" name="subject" className={`inputfield ${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`} placeholder="Enter Subject" maxLength={200} />
                                </div>
                            </div>
                            <div className="descriptiondiv">
                                <div className="inputchilddiv">
                                 <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Description</p>
                                 <textarea name="description" className={`inputfield descriptionfield ${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`} placeholder="Enter Description" maxLength={1000} ></textarea>
                                </div>
                            </div>
                            
                            <button className={`buttonnormal buttoncontact ${darkMode ? 'darkmodebutton' : 'lightmodebutton'}`} type="submit">Send Message</button>
                            </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactComp;