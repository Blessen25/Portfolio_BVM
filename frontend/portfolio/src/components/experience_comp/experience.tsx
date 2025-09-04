import type { HeaderProps } from '../../interface';
import { AutoTypeCareer, ButtonComp } from '../extras';
import './experience.css';

const Experience_Comp:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {
    

    return(

        <>
            <div className="experiencediv">
                <h1 className={`h1text ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}><AutoTypeCareer /></h1>
                <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>The path, milestones, and impact of my work.</p>
                <div className="experienceparent">
                    <div className={`vertical_line ${darkMode ? 'background_primary_red' : 'background_primary_black'}`}>
                    </div>
                    <div className={`timeline_star ${darkMode ? 'darkmoderound' : 'lightmoderound'}`}>
                        <i className={`fa-solid fa-star iconfont`}></i>
                    </div>
                    <div className={`firstexperiencediv ${darkMode ? 'darkmodeaboutcard darkmodetext' : 'lightmodeaboutcard lightmodetext'}`}>
                        <h1 className='h1smalltext'>Full Stack Developer</h1>
                        <p className='ptext'>FreeLancer</p>
                        <p className='ptext'>Freelance full-stack developer delivering end-to-end web apps for small businesses. I ship responsive, accessible UIs with React, HTML/CSS and wire them to secure Django/Python APIs with SQL and Laravel when needed. I handle scoping, development, testing, deployment, and optimizing performance, SEO, and usability.</p>
                        <div className="experienceskilldiv">
                            <ButtonComp text="HTML" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                            <ButtonComp text="CSS" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                            <ButtonComp text="JS" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                            <ButtonComp text="React js" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                            <ButtonComp text="Django" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                            <ButtonComp text="SQL" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                            <ButtonComp text="Laravel" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience_Comp;