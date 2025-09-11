import React from "react";
import './project.css';
import type { HeaderProps } from "../../interface";
import { AutoTypeProjects, ProjectcardComponent } from "../extras";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Project_Comp:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1099 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1199, min: 575 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 575, min: 0 },
            items: 1
        }
};

const ProjectCardArray = [
    {

        id : 1,
        title : "Geelong Pentecostal Church",
        description : "Built a responsive web application for a Geelong church using React, HTML, and CSS to create a modern, component-driven UI. Integrated a Django API for dynamic content and secure form handling. Ensured reliability and accessibility through comprehensive cross-browser and cross-device manual testing.",
        imageUrl : "../assets/images/projects/geelong.png"
    },
    {

        id : 2,
        title : "Old Portfolio",
        description : "Developed a professional and responsive portfolio website to showcase my projects and technical expertise as a front-end developer. The portfolio is built using modern web technologies, including HTML for semantic structure, CSS for sleek and responsive design, and React with TypeScript to deliver a dynamic, type-safe, and interactive user experience. This combination ensures a polished, accessible, and high-performance interface that effectively highlights my work.",  
        imageUrl : "../assets/images/projects/portfolio_image.png"
    },
    {

        id : 3,
        title : "Expense Tracker",
        description : "Created a robust Expense Tracker application using React, HTML, and CSS to deliver a user-friendly interface for managing finances. The design features a responsive layout with a dedicated section for adding transactions, tracking balance, and viewing transaction history.",
        imageUrl : "../assets/images/projects/expense_tracker.png"
    },
    {

        id : 4,
        title : "Clothing E-commerce",
        description : "Designed and developed the front-end of an e-commerce platform, ShopCloth, using React, HTML, and CSS to create a stylish and responsive online clothing store. The interface features dynamic sections for new arrivals, top-selling items, and browsing by dress style, with a clean layout showcasing premium brands like Prada, Gucci, and Versace. Implemented an intuitive user experience with interactive elements, including product grids, customer reviews, and a subscription form, all tailored for a seamless shopping journey.",
        imageUrl : "../assets/images/projects/cloth_App.png"
    },
    {

        id : 5,
        title : "Plant E-commerce",
        description : "Designed and developed the front-end of GreenMind, an engaging e-commerce platform for plant enthusiasts, using React, HTML, and CSS. The interface features a responsive layout with a prominent hero section, best-selling plant displays, and category browsing options, creating an immersive shopping experience. Incorporated interactive elements like a search bar, customer testimonials, and service highlights (e.g., free shipping, large assortment) to enhance usability.",
        imageUrl : "../assets/images/projects/plant_project.jpeg"
    },
    {

        id : 6,
        title : "Instagram Login",
        description : "Embarked on my development journey by creating a responsive Instagram inspired landing page using HTML and CSS. The design replicates the app's login interface and showcases a mobile-friendly layout with social media elements. This project marks the beginning of my exploration into front-end development, focusing on clean design and user interface fundamentals.",
        imageUrl : "../assets/images/projects/instagram.jpeg"
    },
    {

        id : 7,
        title : "Facebook and instagram Login",
        description : "Embarked on my development journey by creating a responsive Instagram-inspired landing page using HTML and CSS. The design replicates the app's login interface and showcases a mobile-friendly layout with social media elements. This project marks the beginning of my exploration into front-end development, focusing on clean design and user interface fundamentals.",
        imageUrl : "../assets/images/projects/facebook.jpeg"
    }
]
return (
        <>
            <div className='projectdiv'>
                <h1 className={`h1text ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}><AutoTypeProjects/></h1>
                <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>From concept to code: designs built, features shipped, results measured.</p>
               <Carousel responsive={responsive} 
                  className="carouseldiv"
                  itemClass="carousel-item-pad"
                  containerClass="carousel-container"
               >
                {ProjectCardArray.map((proj) => (
                    <ProjectcardComponent key={proj.id} darkMode={darkMode} setDarkMode={setDarkMode} cardarray={proj} />
                )
                )}
               </Carousel>
            </div>
        </>
    )
}

export default Project_Comp;