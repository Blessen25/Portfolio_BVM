import React, { useEffect, useState } from "react";
import "./contact.css";
import type { HeaderProps } from "../../interface";
import { AutoTypeContacts, ButtonComp,  TimeHHmm } from "../extras";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const ContactComp:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {
   
    type FormValues = {
        firstName: string;
        lastName: string;
        emailId: string;
        phone_number: string;   // just the national part you store
        country_code: string;   // dial code like "61"
        subject: string;
        description: string;
    };

    type FormErrors = Partial<Record<keyof FormValues, string>>;
   
    /* END OF VALIDATIONS */
    const [iswhatsappOpen, setIswhatsappOpen] = useState(true);
    const [iswhatsappmidOpen, setIswhatsappmidOpen] = useState(false);
    const initialValues = {

        firstName:"",
        lastName: "",
        emailId: "",
        phone_number:"",
        country_code: "",
        subject: "",
        description: "",
    }

    const handleChange = (e:any, value:any, name:any) => {

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

    const [ dataErrors, setDataErrors ] = useState<FormErrors>({});
    const [ isSubmit, setIsSubmit ] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChangeInput = (e:any) => {

        const { name, value } = e.target;
        setData({ ...data, [name] : value});
    }

    const handleSubmit = (e:React.FormEvent) => {

        e.preventDefault();
        const errs = validate(data);
        setDataErrors(errs);
        setIsSubmit(true);
        setIsSuccess(Object.keys(errs).length === 0);
    }

    useEffect(() => {
        if (isSubmit && Object.keys(dataErrors).length === 0) {
            console.log("Submitting payload:", data);
        }
    }, [dataErrors, isSubmit]);

    useEffect(() => {

        if(isSuccess) {

            console.log("Submitting payload:", data);
        }
    },[isSuccess, data]);
    const validate = (values:any):FormErrors => {

        const errors : FormErrors = {};
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!values.firstName.trim()) errors.firstName = "First Name is required";
            if (!values.lastName.trim()) errors.lastName = "Last Name is required";

            if (!values.emailId.trim()) {

                errors.emailId = "Email is required";
            } else if (!emailRegex.test(values.emailId)) {
                errors.emailId = "Enter a valid email";
            }

            if (!values.country_code || !values.phone_number.trim()) {

                errors.phone_number = "Phone Number is required";
            }

            if (!values.subject.trim()) errors.subject = "Subject is required";
            if (!values.description.trim()) errors.description = "Description is required";

            return errors;
    };

    const HandleClick = () => {

        setIswhatsappmidOpen(true)
    }

    const HandleCloseClick = () => {

        setIswhatsappmidOpen(false)
    }
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
                        <form action="#" method="post" className="contactformdetails" onSubmit={handleSubmit}>
                            <div className="inputparentdiv">
                                <div className="inputchilddiv">
                                    <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>First Name</p>
                                    <input name="firstName" type="text" className={`inputfield ${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`} placeholder="Enter Your First Name" maxLength={20} value={data.firstName} onChange={handleChangeInput}/>
                                    {dataErrors?.firstName && <p className={`error ${darkMode ? 'darkmodeerror' : 'lightmodeerror'}`}>{dataErrors?.firstName}</p>}
                                </div>
                                <div className="inputchilddiv">
                                    <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Last Name</p>
                                    <input type="text" name="lastName" className={`inputfield ${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`} maxLength={20} placeholder="Enter Your Last Name" value={data.lastName} onChange={handleChangeInput}/>
                                    {dataErrors?.lastName && <p className={`error ${darkMode ? 'darkmodeerror' : 'lightmodeerror'}`}>{dataErrors?.lastName}</p>}
                                </div>
                            </div>
                            <div className="contactemaildiv">
                                <div className="inputparentdiv">
                                    <div className="inputchilddiv">
                                        <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Email Id</p>
                                        <input type="text" name="emailId" className={`inputfield ${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`} placeholder="Enter Your Email Id" maxLength={50} value={data.emailId} onChange={handleChangeInput}/>
                                        {dataErrors?.emailId && <p className={`error ${darkMode ? 'darkmodeerror' : 'lightmodeerror'}`}>{dataErrors?.emailId}</p>}
                                    </div>
                                    <div className="inputchilddiv">
                                        <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Phone Number</p>
                                        <PhoneInput country={'au'}
                                            value={`${data.country_code}${data.phone_number}`}
                                            onChange={(e,phone) => handleChange(e,phone,"phone_number")}
                                            inputClass={`${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`}
                                            buttonClass={`${darkMode ? 'darkmodedropdown' : 'lightmodedropdown'}`}
                                            dropdownClass={`${darkMode ? 'darkmodeflagdropdown' : 'lightmodeflagdropdown'}`}
                                            />
                                        {dataErrors?.phone_number && <p className={`error ${darkMode ? 'darkmodeerror' : 'lightmodeerror'}`}>{dataErrors?.phone_number}</p>}
                                       </div>
                                </div>
                            </div>
                            <div className="subjectdiv">
                                <div className="inputchilddiv">
                                 <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Subject</p>
                                 <input type="text" name="subject" className={`inputfield ${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`} placeholder="Enter Subject" maxLength={200} value={data.subject} onChange={handleChangeInput}/>
                                 {dataErrors?.subject && <p className={`error ${darkMode ? 'darkmodeerror' : 'lightmodeerror'}`}>{dataErrors?.subject}</p>}
                                
                                </div>
                            </div>
                            <div className="descriptiondiv">
                                <div className="inputchilddiv">
                                 <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>Description</p>
                                 <textarea name="description" className={`inputfield descriptionfield ${darkMode ? 'darkmodeinput' : 'lightmodeinput'}`} placeholder="Enter Description" maxLength={1000} value={data.description} onChange={handleChangeInput}></textarea>
                                 {dataErrors?.description && <p className={`error ${darkMode ? 'darkmodeerror' : 'lightmodeerror'}`}>{dataErrors?.description}</p>}
                                </div>
                            </div>
                            
                            <button className={`buttonnormal buttoncontact ${darkMode ? 'darkmodebutton' : 'lightmodebutton'}`} type="submit">Send Message</button>
                            </form>
                    </div>
                </div>
            </div>

            <div className="whatsappsymbol">
                    <i className="fa-brands fa-whatsapp whatsappiconmid" onClick={HandleClick}></i>
            </div>
            {iswhatsappmidOpen && (

                <div className={`whatsappmiddiv ${darkMode ? 'darkmodewhatsappmidimg' : 'lightmodewhatsappmidimg'}`} >
                    <div className="whatsappmidheader">
                        <div className="whatsappmidheaderone">
                            <p className="h1smalltext">Blessen Vinoy Mathew</p>
                            <p className="whatsappmidtext">Typically replies within 24 hours</p>
                        </div>
                        <i className="fa-solid fa-xmark iconfont" onClick={HandleCloseClick}></i>
                    </div>
                    <div className="whatsappparamid">
                        <div className="whatsappdetailsmid">
                            <p className="whatsappmidtext">Hi there 👋</p>
                            <br />
                            <p className="whatsappmidtext">How can I help you?</p>
                            <TimeHHmm className="whatsappmidtime"/>
                        </div>
                    </div>
                    <div className="whatsappmidbuttondiv">
                        <a href="#" target="_blank" className={`whatsappbutton buttonnormal whatsappbuttonlight`}><i className="fa-brands fa-whatsapp iconfont "></i>Chat on Whatsapp</a>
                    </div>
                </div>
            )}
        </>
    )
}

export default ContactComp;