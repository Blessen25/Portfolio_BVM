import React, { useState } from "react";
import "./contact.css";
import type { HeaderProps } from "../../interface";
import { AutoTypeContacts, ButtonComp,  TimeHHmm } from "../extras";

const ContactComp:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {
    const [ firstName, setFirstName ] = useState('');
    const [ firstNameError, setFirstNameError ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ lastNameError, setLastNameError ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ emailError, setEmailError ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ phoneError, setPhoneError ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ descriptionError, setDescriptionError ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ subjectError, setSubjectError ] = useState('');
    const [ isValid, setIsValid ] = useState(false);

    /* VALIDATION BY MYSELF ( might get error :_) ) */

    const ChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.value.length > 0) {

            setFirstName(e.target.value);
            setFirstNameError('');
        }
        else {

            setFirstNameError('Please enter your first name.');
        }
    }

    const ChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        if(e.target.value.length > 0) {

            setLastName(e.target.value);
            setLastNameError('');
        }
        else {

            setLastNameError('Please enter your last name.');
        }
    }

    const ChangemailId = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        if(e.target.value.length > 0) {

            setEmail(e.target.value);
            setEmailError('');
        }
        else {

            setEmailError('Please enter your Mail ID');
        }
    }

    const HandlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        if(e.target.value.length > 0) {

            setPhone(e.target.value);
            setPhoneError('');
        }
        else {

            setPhoneError('Please enter your Phone Number.');
        }
    }

    const HandleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if(e.target.value.length > 0) {

            setSubject(e.target.value);
            setSubjectError('');
        }

        else {

            setSubjectError('Please enter Subject.');
        }

    }

    const HandleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

        if(e.target.value.length > 0) {

            setDescription(e.target.value);
            setDescriptionError('');
        }

        else {

            setDescriptionError('Please enter Description.');
        }

    }

    const handleFormSubmit = () => {
        
        if(firstName.length > 0 && lastName.length > 0 && email.length > 0 && phone.length > 0 && subject.length > 0 && description.length > 0) {

            setIsValid(true);
        }
    }

    

    /* END OF VALIDATIONS */
    const [iswhatsappOpen, setIswhatsappOpen] = useState(true);
    
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
                        <form action="" method="post" className="contactformdetails">
                            <div className="inputparentdiv">
                                <div className="inputchilddiv">
                                    <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>First Name</p>
                                    <input type="text" className={`inputfield ${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`} placeholder="Enter Your First Name" maxLength={20} onChange={ChangeFirstName}/>
                                    {firstNameError && <p className={`error ${darkMode ? 'darkmodeerror' : 'lightmodeerror'}`} >{firstNameError}</p>}
                                </div>
                                <div className="inputchilddiv">
                                    <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Last Name</p>
                                    <input type="text" className={`inputfield ${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`} maxLength={20} placeholder="Enter Your Last Name" onChange={ChangeLastName}/>
                                    {lastNameError && <p className={`error ${darkMode ? 'darkmodeerror' : 'lightmodeerror'}`} >{lastNameError}</p>}
                                </div>
                            </div>
                            <div className="contactemaildiv">
                                <div className="inputparentdiv">
                                    <div className="inputchilddiv">
                                        <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Email Id</p>
                                        <input type="text" className={`inputfield ${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`} placeholder="Enter Your Email Id" maxLength={50} onChange={ChangemailId}/>
                                        {emailError && <p className={`error ${darkMode ? 'darkmodeerror' : 'lightmodeerror'}`} >{emailError}</p>}
                                    </div>
                                    <div className="inputchilddiv">
                                        <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Phone Number</p>
                                        <input type="text" className={`inputfield ${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`} placeholder="Enter Your Phone Number" maxLength={20} onChange={HandlePhoneNumber}/>
                                        {phoneError && <p className={`error ${darkMode ? 'darkmodeerror' : 'lightmodeerror'}`} >{phoneError}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="subjectdiv">
                                <div className="inputchilddiv">
                                 <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Subject</p>
                                 <input type="text" className={`inputfield ${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`} placeholder="Enter Subject" maxLength={200} onChange={HandleSubjectChange}/>
                                 {subjectError && <p className={`error ${darkMode ? 'darkmodeerror' : 'lightmodeerror'}`} >{subjectError}</p>}
                                </div>
                            </div>
                            <div className="descriptiondiv">
                                <div className="inputchilddiv">
                                 <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Description</p>
                                 <textarea className={`inputfield descriptionfield ${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`} placeholder="Enter Description" maxLength={1000} onChange={HandleDescriptionChange}></textarea>
                                 {descriptionError && <p className={`error ${darkMode ? 'darkmodeerror' : 'lightmodeerror'}`} >{descriptionError}</p>}
                                </div>
                            </div>
                            
                            <ButtonComp text="Send Message" className={`${darkMode ? 'darkmodebutton' : 'lightmodebutton'}`} onClick={() => handleFormSubmit()}/>
                            </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactComp;