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
                <ProjectcardComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
                <ProjectcardComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
                <ProjectcardComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
                <ProjectcardComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
               </Carousel>
            </div>
        </>
    )
}

export default Project_Comp;