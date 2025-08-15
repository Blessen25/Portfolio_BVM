import React from "react";
import './header.css';

const HeaderComponent = () => {

    return(

        <>
            <div className="maincontainer headermaincontainer darkmode">
                <div className="childcontainer header">
                    <div className="headerdirstdiv">
                        <i className="fa-solid fa-align-left" ></i>
                        <a href="#" className="imglogosecond">
                            <img src="../public/assets/images/logo/bvm_logo_dark_small.png" alt="Logo Image" />
                        </a>
                    </div>
                    <a href="#" className="imglogomain">
                        <img src="../public/assets/images/logo/bvm_logo_dark_large.png" alt="Logo Image" />
                    </a>
                    <div className="navlinks">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Experience</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="togglebutton">
                        <div className="toggleround"></div>
                        <div className="star star1"></div>
                        <div className="star star2"></div>
                        <div className="star star3"></div>
                        <div className="star star4"></div>
                        <div className="star star5"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { HeaderComponent };